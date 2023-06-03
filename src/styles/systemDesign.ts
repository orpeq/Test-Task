import { DefaultTheme } from "styled-components"

import {
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  responsiveBreakPoints,
} from "./designVariables"

export const testTaskTheme: DefaultTheme = {
  theme: "testTask",
  colors: colors,
  media: responsiveBreakPoints,
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  fontWeights: fontWeights,
}
