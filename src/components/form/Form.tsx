import {
  Form as FormikForm,
  Formik,
  FormikHelpers,
  Field,
  ErrorMessage,
} from "formik"
import { validationSchema } from "../../utils/validation"
import { handleSubmit } from "../../utils/api"
import {
  Container,
  Heading,
  InputContainer,
  Label,
  ValidationErrorMessage,
} from "./form.styled"
import { useState } from "react"
import Error from "../../assets/icons/error.svg"
import SelectComponent from "../core/select/Select"
import Input from "../core/input/Input"
import SubmitStatus from "../core/submit-status/SubmitStatus"

interface FormValues {
  name: string
  email: string
  age: number
  newsletter: string
}

const initialValues: FormValues = {
  name: "",
  email: "",
  age: 0,
  newsletter: "yes",
}

interface RadioButtonProps {
  name: string
  labelYes: string
  labelNo: string
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  labelYes,
  labelNo,
}) => (
  <InputContainer>
    <Label>
      <Field type="radio" name={name} value="yes" />
      {labelYes}
    </Label>
    <Label>
      <Field type="radio" name={name} value="no" />
      {labelNo}
    </Label>
  </InputContainer>
)

interface FormFieldProps {
  name: string
  label: string
  type: string
  placeholder: string
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  placeholder,
}) => (
  <InputContainer>
    <Input name={name} label={label} type={type} placeholder={placeholder} />
    <ErrorMessage name={name}>
      {(msg) => (
        <ValidationErrorMessage>
          <img src={Error} alt="Error in field" /> {msg}
        </ValidationErrorMessage>
      )}
    </ErrorMessage>
  </InputContainer>
)

const Form = () => {
  const [apiStatus, setApiStatus] = useState<string | null>(null)

  const handleSubmitWithStatus = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    handleSubmit(values, formikHelpers, setApiStatus)
  }

  return (
    <Container>
      <Heading>Registration Form</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitWithStatus}
      >
        <FormikForm>
          <FormField
            name="name"
            label="Name"
            type="text"
            placeholder="John Doe"
          />
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder="john.doe@email.com"
          />
          <SelectComponent name="age" label="How old are you?" />

          <RadioButton
            name="newsletter"
            labelYes="Send me newsletters"
            labelNo="Don't send me newsletters"
          />
          <SubmitStatus apiStatus={apiStatus} />
        </FormikForm>
      </Formik>
    </Container>
  )
}

export default Form
