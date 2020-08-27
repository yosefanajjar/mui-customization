import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

import AvenirMediumTTF from "./fonts/Avenir-Medium.ttf";

const avenirMedium = {
  fontFamily: "Avenir",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    local('Avenir'),
    local('Avenir-Medium'),
    url(${AvenirMediumTTF}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00A699",
    },
    secondary: {
      main: "#323C4A",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Avenir, sans-serif",
    fontSize: 16,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [avenirMedium],
      },
    },
  },
});

export default theme;
