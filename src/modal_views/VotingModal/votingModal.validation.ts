import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  selectedOption: Yup.string().required("Required"),
});
