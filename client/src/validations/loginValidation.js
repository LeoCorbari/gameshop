import * as yup from "yup";

 export const validationLogin = yup.object().shape({
    email: yup.string().email().required().nullable(),
    password: yup.string().required().nullable(),
  });