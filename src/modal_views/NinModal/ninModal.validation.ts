import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  nin: Yup.string().required("Required"),
});
