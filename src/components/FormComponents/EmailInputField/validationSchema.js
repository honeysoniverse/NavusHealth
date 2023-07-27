import * as yup from 'yup';

export const emailValidationSchema = yup.object({
  email: yup
    .string()
    .email('Wrong email format.')
    .required('Email is required.'),
});

export const emailVerificationCodeSchema = yup.object({
  emailCode: yup
    .string()
    .required('Verification code is required.'),
});
