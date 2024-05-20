import { createTheme, PaletteMode, useMediaQuery } from "@mui/material";
import React from "react";
import { getDesignTokens } from "./theme";
import { LOCAL_STORAGE_KEY_THEME } from "../../LS/localStorageKeys";


export const useColorTheme = () => {
    const storedMode: PaletteMode | null = localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as PaletteMode;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const initialMode: PaletteMode = storedMode || (prefersDarkMode ? 'dark' : 'light');

    const [mode, setMode] = React.useState<PaletteMode>(initialMode);

    const toggleColorMode = () => {
        const newMode: PaletteMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newMode);
    };

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)), [mode]
    )

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode
    }
}