// import * as Yup from "yup";

// export const validationSchema = Yup.object().shape({
//   selectedOption: Yup.string().required("Required"),
// });

import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  selectedOption: Yup.number().required("Please select an option"),
});
