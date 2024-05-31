// import React from "react";
// import { Outlet } from "react-router-dom";
// import { useThemeContext } from "./utils/theme/ThemeContextProvider";
// import { Box, CssBaseline, ThemeProvider } from "@mui/material";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

// function App() {
//   const { theme } = useThemeContext();
//   const [navbarHeight, setNavbarHeight] = React.useState(0);

//   React.useEffect(() => {
//     const navbar = document.getElementById("navbar");
//     if (navbar) {
//       setNavbarHeight(navbar.offsetHeight);
//     }
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <div className="App app-container">
//         <Navbar id="navbar" />
//         <Box className="main-content" style={{ marginTop: navbarHeight }}>
//           <Outlet />
//         </Box>
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { useThemeContext } from "./utils/theme/ThemeContextProvider";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BreathingLoader from "./components/loader/BreathingLoader";

function App() {
  const { theme } = useThemeContext();
  const [navbarHeight, setNavbarHeight] = React.useState(0);
  const navigation = useNavigation();

  React.useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  React.useEffect(() => {
    console.log("Navigation State:", navigation.state);
  }, [navigation.state]);

  const isLoading = navigation.state === "loading";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App app-container">
        {isLoading ? (
          <BreathingLoader />
        ) : (
          <>
            <Navbar id="navbar" />
            <Box className="main-content" style={{ marginTop: navbarHeight }}>
              <Outlet />
            </Box>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
