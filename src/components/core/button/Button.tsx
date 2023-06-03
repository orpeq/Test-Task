import { StyledButton } from "./button.styled"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />
}

export default Button
