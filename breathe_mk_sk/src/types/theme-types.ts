import { Theme } from "@mui/material";


export type ThemeContextType = {
    mode: string;
    toggleColorMode: () => void;
    theme: Theme;
};