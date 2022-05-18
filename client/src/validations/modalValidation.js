import * as yup from "yup";

 export const validationModal = yup.object().shape({
    name: yup.string().required(),
    cost: yup.string().required(),
    category: yup.string().required(),
  });