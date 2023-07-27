/* eslint-disable camelcase */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import {
  VStack, FormLabel, Input, HStack, Spinner, Text, Box, FormControl,
} from '@chakra-ui/react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import {useFormContext} from 'react-hook-form';
import { colors } from '../../../resources/colors';
import { INPUT_FIELD_BORDER_RADIUS } from '../../../theme/constants';
import { mapSuggestionsToOptions } from './helpers';
import { useGetPlaceDetails } from './hooks';
import { useFormDataStore } from '../../../store/formData';
import { useUserStore } from '../../../store/user';

const AddressInputField = ({
  id,
  variant,
  ...props
}) => {
  const [da, sda] = useState(false);
  const { user } = useUserStore();
  const { register } = useFormContext();
  const { fetch } = useGetPlaceDetails();
  const [options, setOptions] = useState([]);
  const {address, setAddress} = useFormDataStore();
  const {
    ready,
    value,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { /* Define search scope here */ },
    debounce: 300,
  });
  const showAddressSelection = options.length > 0;
  const inputValue = value || address.streetAddress;
  const updateOptions = () => {
    const array = mapSuggestionsToOptions(data);
    setOptions(array);
  };


  const handleSelect = async ({ placeId }) => {
    clearSuggestions();
    fetch({placeId});
    setValue('', false);
  };
  useEffect(() => {
    updateOptions();
  }, [data]);


  const onInputChange = (event) => {
    setValue(event.target.value);
    if (!event.target.value)
      setAddress({...address, streetAddress: ''});
  };
  const remove = () => {
    sda(true)
  }
  return (
    <VStack width="100%" alignItems="flex-start">
      <FormLabel>
        {props.label}
      </FormLabel>
      <HStack width="100%">
        <Input
        onClick={remove}
         borderColor= {colors.altoGray}
         cursor='pointer'
         borderWidth= '1px'
         borderRadius= '18px'
         width= '100%'
         height= '50px'
         textColor= {colors.codGray}
         background= {colors.white}
         padding= '8px'
        placeholder= {props.label}
          value={ inputValue ? value || address.streetAddress : null ??  ((!da && user.address1 ? `${user.address1}, ${user.address2}`: null) || (!da && user.address2 ? `${user.address2}`: ''))}
          {...register('address.streetAddress', {
            onChange: onInputChange
          })}
        />
        {!ready && <Spinner />}
      </HStack>
      {showAddressSelection
        && (
          <VStack
            width="100%"
            bgColor={colors.alabasterGray}
            borderRadius={INPUT_FIELD_BORDER_RADIUS}
            borderWidth={1}
            paddingLeft="8px"
            paddingRight="8px"
            alignItems="flex-start"
          >
            <Collapsible open={showAddressSelection}>
              {/* eslint-disable-next-line max-len */}
              {options.map(({
                place_id, main_text, secondary_text, suggestion,
              }) => (
                <Box
                  cursor="pointer"
                  onClick={() => {handleSelect({ suggestion, placeId: place_id });}}
                  key={place_id}
                  style={{
                    justifyContent: 'center', alignItems: 'center', padding: '8px', background: colors.white,
                  }}
                >
                  <HStack>
                    <Text>{main_text}</Text>
                    <Text>{secondary_text}</Text>
                  </HStack>
                </Box>
              ))}
            </Collapsible>
          </VStack>
        )}
      <HStack style={{ width: '100%', justifyContent: 'stretch', margin: '16px 0px'}}  >
        <ShowData label='City' field='city' value={address.city ? address.city : user.city } background= {colors.white}/>
        <ShowData label='State' field='state' value={address.state ? address.state : user.state} background= {colors.white} />
        <ShowData label='ZipCode' field='zip' value={address.zip ? address.zip : user.zipCode} background= {colors.white} />
      </HStack>
    </VStack>

  );
};

const ShowData = ({label, field, value}) => {
  const {register} = useFormContext();
  return (
    <FormControl style={{width: '100%'}}>
      <FormLabel textAlign="left" width='100%'>
        {label}
      </FormLabel>
      <Input
       borderColor= {colors.altoGray}
       borderWidth= '1px'
       borderRadius= '18px'
       width= '100%'
       height= '50px'
       textColor= {colors.codGray}
       background= {colors.white}
       padding= '8px'
        readOnly
        value={value}
        placeholder={label}
        {...register(`address.${field}`)}
      />
    </FormControl>
  );
}

ShowData.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

AddressInputField.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.string,
  label: PropTypes.string,
};

AddressInputField.defaultProps = {
  variant: 'logo',
  label: 'Street Address',
};

export default AddressInputField;
