/* eslint-disable no-unused-vars */

import moment from 'moment';

export const normalizeDateFromServerToUSFormat = (date) => {
  const serverFormat = 'YYYY-MM-DD';
  const usFormat = 'MM-DD-YYYY';
  const normalized = moment(date, serverFormat).format(serverFormat);
  return normalized;
};
