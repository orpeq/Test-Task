import * as Yup from "yup"

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(40, "Name must be at most 40 characters")
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  age: Yup.number()
    .min(18, "You must be at least 18 years old")
    .required("Age is required"),
  newsletter: Yup.string().required(
    "You must select an option for the newsletter"
  ),
})
