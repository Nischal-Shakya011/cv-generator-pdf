import * as yup from 'yup';

export const formSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    // password: yup
    //   .string('Enter your password')
    //   .min(8, 'Password should be of minimum 8 characters length')
    //   .required('Password is required'),
    fullName: yup.
    string('Enter your fullname')
    .matches(/^[A-Za-z]+ [A-Za-z]+$/, 'Enter a valid fullname')
    .required('Full name is required'),

    address: yup.
    string('Enter your address')
    .required('Address is required'),

  });