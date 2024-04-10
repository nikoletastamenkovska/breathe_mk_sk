import React from "react";
import style from "./themeToggler.module.css";

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeToggler: React.FC<ThemeProps> = ({ theme, toggleTheme }) => {
  return (
    <label htmlFor="theme_toggler" className={style.theme_toggler_label}>
      {theme === "light" ? "Light Mode" : "Dark Mode"}
      <input
        className={style.theme_toggler}
        id="theme_toggler"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
    </label>
  );
};
