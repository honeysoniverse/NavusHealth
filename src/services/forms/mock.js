import { mockFormResponseVersion2 } from '../../mocks/mockResponseVersion2';
import { testMockResponse } from '../../mocks/testMockResponse';

export const handleGetFormLocalMockResponse = async (clientId, eventId) => {
  let retVal = {};
  switch (eventId) {
    case 'miamibeach':
      retVal = mockFormResponseVersion2;
      break;
    case 'myevent':
      retVal = testMockResponse;
      break;
    default:
      retVal = mockFormResponseVersion2;
      break;
  }

  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(retVal);
    }, 1000);
  });

  return { data: response };
};

export const handlePostFormDataMock = async (data) => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

  return response;
};

export const handleFileUploadMock = async (valueId, file) => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(file);
    }, 1000);
  });

  return response;
};
