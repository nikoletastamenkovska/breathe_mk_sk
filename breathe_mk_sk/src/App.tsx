import { createContext, useState } from "react";
import "./App.css";
import { ThemeToggler } from "./components/themeToggler/ThemeToggler";

interface ThemeType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeType | null>(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
