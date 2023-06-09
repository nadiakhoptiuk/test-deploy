import * as yup from 'yup';

const phoneRegExp = /^\+[1-9]\d{11}$/;
const latinRegExp = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g;
const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('*Enter your name!')
    .trim('*Enter your name!')
    .matches(latinRegExp, '*Name can only contain Latin letters!')
    .min(2, '*Min length 2 chars!')
    .max(100, '*Max length 100 chars!'),
  phone: yup
    .string()
    .matches(
      phoneRegExp,
      '*Enter your correct phone number in +XXXXXXXXXXXX format!',
    ),
  email: yup
    .string()
    .required('*Enter your correct email!')
    .email('*Enter your correct email!')
    .matches(/^[a-zA-Z]{3}/, '*Enter your correct email!')
    .matches(emailRegExp, '*Enter your correct email!')
    .max(63, '*Enter your correct email!'),
  projectType: yup.string().required('*Choose Project Type!'),
});

export const modalFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('*Enter your name!')
    .trim('*Enter your name!')
    .matches(latinRegExp, '*Name can only contain Latin letters!')
    .min(2, '*Min length 2 chars!')
    .max(100, '*Max length 100 chars!'),
  phone: yup
    .string()
    .matches(
      phoneRegExp,
      '*Enter your correct phone number in +XXXXXXXXXXXX format!',
    ),
  email: yup
    .string()
    .required('*Enter your correct email!')
    .email('*Enter your correct email!')
    .matches(/^[a-zA-Z]{3}/, '*Enter your correct email!')
    .matches(emailRegExp, '*Enter your correct email!')
    .max(63, '*Enter your correct email!'),
});
