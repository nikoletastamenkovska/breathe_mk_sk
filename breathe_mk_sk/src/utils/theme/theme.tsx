import { PaletteMode } from "@mui/material";
import { grey, teal } from "@mui/material/colors";

const theme = {
  palette: {
    primary: {
      main: "#343A40",
    },
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#343A40",
          },
          divider: teal[200],
          text: {
            primary: grey[900],
            secondary: grey[600],
          },
        }
      : {
          primary: {
            main: "#79B937",
          },
          divider: teal[700],
          background: {
            default: "#79B937",
            paper: teal[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default theme;
