import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { useThemeContext } from "./utils/theme/ThemeContextProvider";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
      <CssBaseline />
      <div className="App app-container">
        <Navbar id="navbar" />
        <Box className="main-content" style={{ marginTop: navbarHeight }}>
          <Outlet />
        </Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
