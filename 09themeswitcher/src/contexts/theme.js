// creating context and its provider for theme switcher in one single file 
// to manage theme state and provide it throughout the application


import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
});

export const ThemeProvider = ThemeContext.Provider; 

// Custom Hook
export default function useTheme () {
    return useContext(ThemeContext);
}