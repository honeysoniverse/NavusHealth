import { getDetails } from 'use-places-autocomplete';
// import { endpoints } from './constants';
// import googleMapsApi from './instance';
// const API_KEY = process.env.PLACES_API_KEY;
// const API_KEY = 'AIzaSyB8Fo77PviN9Jc2mivYYBWPAd17Ztn_z_A';

export const getPlaceDetailsById = async ({ placeId }) => {
  const parameter = {
    placeId,
    fields: ['ALL'],
  };
  const details = await getDetails(parameter);
  return details;

  // const body = {
  //   place_id: placeId,
  //   key: API_KEY,
  // };
  // // place_id=${placeId}&key=${API_KEY}
  // const { data } = await googleMapsApi.post(`${endpoints.placeDetails}`, body);

  // return data;
};
