import { ThemeProvider } from "styled-components"
import { testTaskTheme } from "./styles/systemDesign"
import Form from "./components/form/Form"

const App = () => {
  return (
    <ThemeProvider theme={testTaskTheme}>
      <Form />
    </ThemeProvider>
  )
}

export default App
