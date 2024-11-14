import { GlobalContext } from "../context";
import { useContext } from "react";

function GlobalCntxtExample(){
    const{theme} = useContext(GlobalContext);
    return(<div>
 
        <h1 style = {{ color: theme ==='light'? "blue": "red"}}>Sree Vidya</h1>
    </div>);
}

export default GlobalCntxtExample;