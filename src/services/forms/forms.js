/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

import {endpoints} from './constants';
import useFormsAxios from './instance';
import {handleGetFormLocalMockResponse} from './mock';

const useFormsApi = () => {
  const { get, post } = useFormsAxios();

  const setFileToUpload = async (valueId, file, registrationId) => {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('type', valueId);
    const urlBuilder = `${endpoints.registrations}/${registrationId}/documents`;
    return post(urlBuilder, formData)
  };

  const handleFilesUpload = async (filesToUpload, registrationId) => {
    const tasks = Object.entries(filesToUpload).map(([valueId, file]) =>
      () => setFileToUpload(valueId, file, registrationId)
    );
    return tasks.reduce((prev, task) => prev.then(task), Promise.resolve());
  };

  const getRegistrationRecursively = async (registrationId, maxHits = 20) => {
    try {
      return await get(`${endpoints.registrations}/${registrationId}`);
    } catch {
      if (maxHits === 1)
        return {data: {registrationId: null}};
      return getRegistrationRecursively(registrationId, maxHits - 1);
    }
  };

  const handleFormSubmission = async (data, filesToUpload) => {
    const response = await post(`${endpoints.registrations}`, data);
    const registration = response.data;
    const { id } = registration;
    const registrationResponse = await getRegistrationRecursively(id);

    if (id !== registrationResponse.data.registrationId)
      throw Error('Something went wrong. Please register again.');
    if (Object.keys(filesToUpload).length > 0)
      await handleFilesUpload(filesToUpload, id);
    return response;
  };

  return {
    getForm: (clientId, eventId) =>
      get(`${endpoints.registrationMetadata}`, { params: { clientId, entityId: eventId } }),
    getFormMock: (clientId, eventId) => handleGetFormLocalMockResponse(clientId, eventId),
    postFormDataMock: (data, filesToUpload) => handleFormDataSubmit(data, filesToUpload),
    postFormData: (data, filesToUpload) => handleFormSubmission(data, filesToUpload),
    getEvents:
      () => get(`${endpoints.registrations}`),
       postDocumentsData: (data, filesToUpload) => post(`${endpoints.registrations}/${registrationId}/documents`, setFileToUpload(valueId, file, registrationId),
       ),
  };
};

export default useFormsApi;
