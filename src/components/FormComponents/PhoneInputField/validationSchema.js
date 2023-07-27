import * as yup from 'yup';

export const phoneValidationSchema = yup.object({
  phoneNumber: yup
    .string()
    .required('Phone is required.'),
});
