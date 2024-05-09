import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useThemeContext } from "./utils/theme/ThemeContextProvider";
import React from "react";

function App() {
  const { theme } = useThemeContext();
  const [navbarHeight, setNavbarHeight] = React.useState(0);

  React.useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <Navbar id="navbar" />
          <Box style={{ marginTop: navbarHeight }}>
            <Outlet />
          </Box>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
