import {createContext} from "react";
import { useState } from "react";
export const GlobalContext = createContext(null);

function GlobalState({children}){
    let initialTheme = 'light';
    const[theme,setTheme] = useState(initialTheme);
    return <GlobalContext.Provider value = {{theme,setTheme}}>{children}</GlobalContext.Provider>
}

export default GlobalState;