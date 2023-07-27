import placeHolderApi from './instance';

export const PostPlaceHolderData = async (data) => {
  const resp = await placeHolderApi.post('/posts', { data });
  return resp;
};
