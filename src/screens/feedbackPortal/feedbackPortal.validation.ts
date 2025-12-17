import * as Yup from "yup";

// export const validationSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   fullName: Yup.string().required("Full name is required"),
//   phone: Yup.string().required("Phone is required"),
//   feedback: Yup.string().required("Required"),
//   feedbackCategory: Yup.string().required("Required"),
//   trackingId: Yup.string().required("Required"),
// });

export const shareSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  feedbackCategory: Yup.string().required("Please pick a category"),
  feedback: Yup.string().required("Feedback is required"),
});

export const trackSchema = Yup.object({
  trackingId: Yup.string().required("Tracking ID is required"),
});
