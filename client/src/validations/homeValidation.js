import * as yup from "yup";

 export const homeValidation = yup.object().shape({
    name: yup.string().required(),
    cost: yup.string().required(),
    category: yup.string().required(),
  });