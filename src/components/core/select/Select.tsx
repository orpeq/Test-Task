import { ErrorMessage, Field } from "formik"
import { StyledSelect } from "./select.styled"
import { InputContainer, Label } from "../../form/form.styled"
import { InformativeErrorMessage } from "./select.styled"
import Information from "../../../assets/icons/information.svg"
interface SelectComponentProps {
  name: string
  label: string
}

const generateAgeOptions = () => {
  const options = []

  for (let value = 1; value <= 100; value++) {
    options.push(
      <option key={value} value={value}>
        {value}
      </option>
    )
  }

  return options
}

const SelectComponent: React.FC<SelectComponentProps> = ({ name, label }) => (
  <InputContainer>
    <Label>{label}</Label>
    <Field as={StyledSelect} name={name}>
      <option value="">Select your age from dropdown</option>
      {generateAgeOptions()}
    </Field>
    <ErrorMessage name={name}>
      {(msg) => (
        <InformativeErrorMessage>
          <img src={Information} alt="Error in field" /> {msg}
        </InformativeErrorMessage>
      )}
    </ErrorMessage>
  </InputContainer>
)

export default SelectComponent
