export const getOAuthToken = async (params) => {
  const { code } = params;

  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(code);
    }, 10);
  });

  return response;
};
