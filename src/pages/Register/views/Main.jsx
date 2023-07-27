/* eslint-disable  no-unused-expressions  */
/* eslint-disable  brace-style  */
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import { useCreateElementFromJson } from '../../../hooks/useCreateElementFromJson';
import LoadingForm from '../components/loaders/LoadingForm';
import { useFetchForm } from '../hooks';
import { useUserStore } from '../../../store/user';
import { pathNames } from '../../../config/pathNames';
import { useAppStateStore } from '../../../store/appState';
import { useUserFormSessionStore } from '../../../store/userFormSession';

const Main = () => {
  const { formPageIndex } = useUserFormSessionStore();
  const { clientId, eventId } = useParams();
  const [isProfile, setIsProfile] = useState(false);
  const { isLoading, page } = useFetchForm({ clientId, eventId });
  const createElementFromJson = useCreateElementFromJson();
  const { setRedirectFromAuth } = useAppStateStore();
  const navigation = useNavigate();
  const { isEmailVerified } = useUserStore();
  const profileReload = useCallback(() => {
    if (clientId === undefined) {
      (!isProfile && setIsProfile(true));
      (!isLoading && setTimeout(() => window.location.reload()));
    }
    else if (clientId !== undefined) {
      isProfile && setIsProfile(false);
    }
  }, [isProfile]);
  useEffect(() => {
    if (!isEmailVerified) {
      setRedirectFromAuth(window.location.pathname);
      navigation(pathNames.checkmail);
    }
    profileReload();
    window.scrollTo(0, 0)
  }, [isProfile, formPageIndex]);
  return (
    <ContentWrapper>
      {/* <Slide direction='right' in={formPageIndex}> */}
      {!isLoading && createElementFromJson(page)}
      {/* </Slide> */}
      {isLoading && (
        <VStack>
          <LoadingForm />
        </VStack>
      )}
    </ContentWrapper>
  );
};

export default Main;
