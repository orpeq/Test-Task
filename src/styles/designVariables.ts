export const colors = {
  primary: {
    primaryBlack: "#232631",
    primaryWhite: "#ffffff",
    errorBackground: "#ffd8d8",
    successBackground: "#E9FAD2",
    errorMessageColor: "#ff3e3e",
    buttonBackground: "#3bbfc2",
    buttonDisabledBackground: "#dddfe5",
    buttonDisabledColor: "#9a9Fb0",
    inputTextColor: "#9b9b9b",
    inputBackground: "#fbfbfd",
    infoTextColor: "#216bf8",
    borderColor: "#dddfe5",
  },
}

export type AppColorsType = typeof colors

export const responsiveBreakPoints = {
  maxSmallPhone: "(max-width: 360px)",
  maxPhone: "(max-width: 480px)",
  maxTablet: "(max-width: 770px)",
  maxSmallDesktop: "(max-width: 1020px)",
  maxLargeDesktop: "(max-width: 1360px)",
}

export type AppBreakpointsType = typeof responsiveBreakPoints

export const fontSizes = {
  xs: "12px",
  sm: "14px",
  default: "16px",
  md: "18px",
  bg: "20px",
  xl: "32px",
  h1: "48px",
}

export type AppFSType = typeof fontSizes

export const lineHeights = {
  sm: "16px",
  md: "18px",
  default: "21px",
  lg: "24px",
  bg: "28px",
  xl: "40px",
  h1: "72px",
}

export type AppLineHeightsType = typeof lineHeights

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
}

export type AppFontWeightType = typeof fontWeights
