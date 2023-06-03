import { useField } from "formik"
import { StyledInput } from "./input.styled"
import { Label } from "../../form/form.styled"

interface InputProps {
  label: string
  name: string
  type?: string
  placeholder?: string
}

const Input = ({ label, placeholder, ...props }: InputProps) => {
  const [field, meta] = useField(props)
  return (
    <>
      <Label htmlFor={props.name}>{label}</Label>
      <StyledInput
        id={props.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
    </>
  )
}

export default Input
