import * as Yup from "yup";

export const shareSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  governmentID: Yup.mixed<File>()
    .required("Government ID is required")
    .test("fileSize", "File size is too large", (value) => {
      if (value instanceof File) {
        return value.size <= 5000000;
      }
      return false;
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      if (value instanceof File) {
        return ["image/jpeg", "image/png", "application/pdf"].includes(
          value.type
        );
      }
      return false;
    }),
  proofOfIncome: Yup.mixed<File>()
    .required("Proof of income is required")
    .test("fileSize", "File size is too large", (value) => {
      if (value instanceof File) {
        return value.size <= 5000000;
      }
      return false;
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      if (value instanceof File) {
        return ["image/jpeg", "image/png", "application/pdf"].includes(
          value.type
        );
      }
      return false;
    }),
  residentialAddress: Yup.string().required(
    "Residential address size is required"
  ),
  familySize: Yup.string().required("Family size is required"),
  serviceType: Yup.string().required("Please pick a service type"),
  reason: Yup.string().required("Reason is required"),
});
