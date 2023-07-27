/* eslint-disable brace-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import {
  VStack, Button, HStack, useStyleConfig,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormStore } from '../../../store/form';
import { useUserStore } from '../../../store/user';
import { pathNames } from '../../../config/pathNames';
import { useAppStateStore } from '../../../store/appState';
import { useFormDataStore } from '../../../store/formData';
import { useSubmitFormData } from './hooks';
import { useUserFormSessionStore } from '../../../store/userFormSession';
import { useFetchUser, useUpdateUser } from '../../../pages/MyProfile/hooks';

const FormPage = ({
  id,
  children,
  ...props
}) => {
  const { formPages } = useFormStore();
  const { user } = useFetchUser();
  const { updateUser, isUpdatingProfile } = useUpdateUser();
  const { isAuthenticated, isEmailVerified } = useUserStore();
  const { setRedirectFromAuth } = useAppStateStore();
  const { setData, updateFormDataField, data, noVerification, setPhoneMessage, address, updateUserProfileField } = useFormDataStore();
  const { formPageIndex, setFormPageIndex } = useUserFormSessionStore();
  const { submitForm, isSubmitting } = useSubmitFormData();
  const { eventId } = useParams();
  const nextButtonStyles = useStyleConfig('Button', { variant: 'next' });

  const { handleSubmit } = useFormContext();

  const IS_FIRST_PAGE = (formPageIndex === 0);
  const IS_DEMOGRAPHIC = (formPageIndex === 1)
  const IS_LAST_PAGE = (formPageIndex === (formPages.length - 1));
  const IS_PROFILE_PAGE = (formPages.length === 1);

  const navigation = useNavigate();

  const onBack = () => {
    setFormPageIndex(formPageIndex - 1);
  };

  const onSubmit = async (formData) => {
    if (IS_FIRST_PAGE && !isAuthenticated) {
      setRedirectFromAuth(window.location.pathname);
      navigation(pathNames.login);
    }
    else if (IS_FIRST_PAGE && !isEmailVerified) {
      setRedirectFromAuth(window.location.pathname);
      navigation(pathNames.checkmail);
    }
    else if (IS_DEMOGRAPHIC && !user.phone) {
      setPhoneMessage('Please confirm your phone to continue')
    }
    else if (IS_DEMOGRAPHIC && user.phone && noVerification) {
      setPhoneMessage('Please enter the code to continue')
    }

    else {
      setData(formData);
      if (IS_LAST_PAGE && !IS_PROFILE_PAGE) {
        navigation(`${pathNames.register}/submitting`);
        await updateFormDataField("eventCode", formPages[0].eventCode);
        await updateFormDataField("orderRequired", formPages[0].orderRequired);
        submitForm({ eventId });
      }
      if (IS_PROFILE_PAGE) {
        delete data.address;
        delete data.email;
        // delete data.birthDate;
        delete data.phoneNumber;
        address.streetAddress && updateUserProfileField("address1", address.streetAddress.split(', ')[0])
        address.streetAddress && updateUserProfileField("address2", address.streetAddress.split(', ')[1])
        address.city && updateUserProfileField("city", address.city)
        address.state && updateUserProfileField("state", address.state)
        address.zip && updateUserProfileField("zipCode", address.zip)
        updateUser();
        

      }
      else {
        setFormPageIndex(formPageIndex + 1);
      }
    }
  };

  return (
    <VStack
      id={id}
      {...props}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          {children}
        </VStack>
        {(!IS_FIRST_PAGE) && (
          <HStack style={{
            width: '100%', marginTop: 28,
          }}
          >
            <HStack style={{ width: '100%', justifyContent: 'flex-start', padding: '0px 8px' }}>
              <Button __css={nextButtonStyles} onClick={onBack} isLoading={isSubmitting}>Back</Button>
            </HStack>
            <HStack style={{ width: '100%', justifyContent: 'flex-end', padding: '0px 8px' }}>
              <Button
                isLoading={isSubmitting}
                type="submit"
                __css={nextButtonStyles}
              // isDisabled={isConfirm || user.phone ? false : true}
              >
                {IS_LAST_PAGE ? 'Submit' : 'Next'}
              </Button>
            </HStack>
          </HStack>
        )}
        <HStack style={{ justifyContent: 'center', marginTop: 28 }}>
          {/* eslint-disable-next-line max-len */}
          {IS_FIRST_PAGE && !IS_PROFILE_PAGE && <Button __css={nextButtonStyles} type="submit" isLoading={isSubmitting}>Continue</Button>}
          {IS_FIRST_PAGE && IS_PROFILE_PAGE && <Button __css={nextButtonStyles} isLoading={isUpdatingProfile} width="160px" fontSize="18px" type="submit">Update Profile</Button>}

        </HStack>
      </form>
    </VStack>
  );
};

FormPage.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Array),
};

FormPage.defaultProps = {
  children: [],
};

export default FormPage;
