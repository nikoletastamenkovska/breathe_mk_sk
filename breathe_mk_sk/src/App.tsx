import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useThemeContext } from "./utils/theme/ThemeContextProvider";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <Navbar />
          <Outlet />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
