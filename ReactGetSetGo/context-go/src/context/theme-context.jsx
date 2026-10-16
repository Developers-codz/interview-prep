import { useState, useEffect } from "react";
import { createContext, useContext } from "react";


const ThemeContext = createContext(null);
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        document.body.className = theme; // sets body class to "light" or "dark"
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


const useTheme = () => useContext(ThemeContext)

export {useTheme, ThemeProvider}