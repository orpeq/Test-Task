import Error from "../../../assets/icons/error.svg"
import Success from "../../../assets/icons/success.svg"
import Button from "../button/Button"
import { Status } from "./submitStatus.styled"
import { InputContainer } from "../../form/form.styled"

interface SubmitStatusProps {
  apiStatus: string | null
}

const SubmitStatus: React.FC<SubmitStatusProps> = ({ apiStatus }) => (
  <InputContainer>
    {apiStatus === "error" && (
      <Status status="error">
        <img src={Error} alt="Error sending message" />
        Error sending form!
      </Status>
    )}
    {apiStatus === "success" && (
      <Status status="success">
        <img src={Success} alt="Success sending message" />
        Form sent successfully!
      </Status>
    )}
    <Button type="submit" disabled={apiStatus === "success"}>
      {apiStatus === "error" ? "Resubmit form" : "Submit form"}
    </Button>
  </InputContainer>
)

export default SubmitStatus
