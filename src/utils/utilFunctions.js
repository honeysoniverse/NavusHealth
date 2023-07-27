export const parseStringToBoolean = (str) => {
  if (str === 'true') return true;
  if (str === 'false') return false;
  return str;
};
