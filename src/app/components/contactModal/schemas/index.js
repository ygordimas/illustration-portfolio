import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Must be a valid e-mail.").required("Required"),
  name: yup
    .string()
    .min(3, "Must have at least 3 characters.")
    .required("Required"),
  message: yup
    .string()
    .min(20, "Must have at least 20 characters.")
    .max(200, "Message is too long.")
    .required("Required"),
});
