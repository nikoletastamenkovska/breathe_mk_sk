import { PaletteMode } from "@mui/material";

const theme = {
  palette: {
    primary: {
      main: "#79B937",
      light: "#343A40",
      dark: "#CCCECF",
      contrastText: "#343A40",
    },
    secondary: {
      main: "#33393f",
    },
    background: {
      default: "#CCCECF",
      paper: "#79B937",
    },
    divider: "#343A40",
    error: {
      main: "#f07852",
    },
    success: {
      main: "#79B937",
    },
    warning: {
      main: "#f3f36d",
    },
    text: {
      primary: "#343A40",
      secondary: "#fff",
      disabled: "#525659",
    },
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#79B937",
            light: "#343A40",
            dark: "#CCCECF",
            contrastText: "#343A40",
          },
          secondary: {
            main: "#33393f",
          },
          background: {
            default: "#CCCECF",
          },
          divider: "#343A40",
          error: {
            main: "#f07852",
          },
          success: {
            main: "#79B937",
          },
          warning: {
            main: "#f3f36d",
          },
          text: {
            primary: "#343A40",
            secondary: "#fff",
            disabled: "#525659",
          },
        }
      : {
          primary: {
            main: "#79B937",
            light: "#CCCECF",
            dark: "#343A40",
            contrastText: "#fff",
          },
          secondary: {
            main: "#CCCECF",
          },
          divider: "#CCCECF",
          background: {
            default: "#343A40",
          },
          text: {
            primary: "#CCCECF",
            secondary: "#CCCECF",
            disabled: "#525659",
          },
          warning: {
            main: "#f3f36d",
          },
        }),
  },
});

export default theme;
