import { createContext, useContext, useReducer } from "react";
const {initialThemeState, themeReducer} = require("./themeReducer");

const themeContext = createContext();

const themeProvider = ({ children }) => {
const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
}

export default themeContext;