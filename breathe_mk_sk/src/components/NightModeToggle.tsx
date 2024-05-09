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
        p: 2,
      }}
    >
      <IconButton onClick={toggleColorMode} color="secondary" size="small">
        {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
