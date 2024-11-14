import { useContext } from "react";
import { GlobalContext } from "../context";


function ButtonContext(){
    const{theme,setTheme} = useContext(GlobalContext);
    return(

       <button onClick= {()=> setTheme(theme === 'light'?'dark' : 'light')}>Change Theme</button>

    );
}

export default ButtonContext;