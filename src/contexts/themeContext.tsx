import { createContext, ReactNode, useEffect, useState } from "react";

interface ITheme {
    theme: string;
    toggleTheme: () => void;
}

// Provide a default value that matches the `ITheme` interface
const ThemeContext = createContext<ITheme>({
    theme: 'light',
    toggleTheme: () => {},
});


const ThemeProvider = ({ children }:{children:ReactNode}) => {


    let currentTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState <string>(()=> {
        return currentTheme == undefined? 'light':currentTheme
    })
    useEffect(() => {
        localStorage.setItem('theme', theme!);
        console.log(theme!)
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme:theme, toggleTheme:toggleTheme }}>
            { children }
         </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}