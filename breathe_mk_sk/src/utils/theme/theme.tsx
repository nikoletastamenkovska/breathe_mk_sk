import { PaletteMode } from "@mui/material";

const theme = {
  palette: {
    primary: {
      main: "#79B937",
    },
    background: {
      default: "#CCCECF",
    },
    divider: "#525659",
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
          },
          background: {
            default: "#CCCECF",
          },
          divider: "#525659",
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
          },
          divider: "#525659",
          background: {
            default: "#343A40",
            paper: "#525659",
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
