import { FormikHelpers } from "formik"

interface Values {
  name: string
  email: string
  age: number
  newsletter: string
}

export const handleSubmit = (
  values: Values,
  { setSubmitting, setErrors }: FormikHelpers<Values>,
  setApiStatus: React.Dispatch<React.SetStateAction<string | null>>
): void => {
  setTimeout(() => {
    if (values.name === "Invalid Name") {
      setErrors({ name: "Invalid name" })
      setApiStatus("error")
    } else {
      console.log("Submitted values:", values)
      setApiStatus("success")
    }
    setSubmitting(false)
  }, 1000)
}
