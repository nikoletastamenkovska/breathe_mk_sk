import React from "react";

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeToggler: React.FC<ThemeProps> = ({ theme, toggleTheme }) => {
  return (
    <label htmlFor="theme_toggler">
      <input
        id="theme_toggler"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
    </label>
  );
};
