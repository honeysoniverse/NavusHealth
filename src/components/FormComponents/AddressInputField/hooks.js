/* eslint-disable no-unused-vars */
import {useMutation} from 'react-query';
import {getPlaceDetailsById} from '../../../services/googleMaps/places';
import {useFormDataStore} from '../../../store/formData';
import {findPropertyInPlaceComponents} from './helpers';
import useToast from '../../../hooks/useToast';

export const useGetPlaceDetails = () => {
  const { setAddress, updateFormDataField, address } = useFormDataStore();
  const toast = useToast();

  const { isLoading, mutate } = useMutation(({ placeId }) => getPlaceDetailsById({ placeId }), {
    onSuccess: async (result) => {
      const components = await result.address_components;
      const streetNumber = await findPropertyInPlaceComponents({property: 'street_number', components});
      const route = await findPropertyInPlaceComponents({property: 'route', components});
      const streetAddress = [streetNumber, route].filter(component => component).join(', ');
      const zip = await findPropertyInPlaceComponents({ property: 'postal_code', components });
      const city = await findPropertyInPlaceComponents({ property: 'locality', components });
      let state = await findPropertyInPlaceComponents({
        property: 'administrative_area_level_1',
        components,
      });
      if (state === '') {
        state = await findPropertyInPlaceComponents({
          property: 'country',
          components,
        });
      }

      await setAddress({
        streetAddress,
        state,
        city,
        zip,
      })
    //   await console.log(address)
    //  await updateFormDataField("state", address.state)
    //  await updateFormDataField("city", address.city)
    //  await updateFormDataField("zipCode", address.zip)
    },
    onError: (err) => toast({ text1: 'Error on get place details', text2: err.toString() }),
  });

  return {
    isLoading,
    fetch: mutate,
  };
};
