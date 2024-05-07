import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useThemeContext } from "../utils/theme/ThemeContextProvider";

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        p: 2,
      }}
    >
      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
