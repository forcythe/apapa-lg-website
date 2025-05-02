import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  fullName: Yup.string().required("Full name is required"),
  phone: Yup.string().required("Phone is required"),
  feedback: Yup.string().required("Required"),
  feedbackCategory: Yup.string().required("Required"),
});
