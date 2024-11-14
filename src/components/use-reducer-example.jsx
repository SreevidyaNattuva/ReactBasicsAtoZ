import { useReducer } from "react";


function ReducerExample(){
    const initialState = {
        showTextFlag:false,
        changeTextStylesFlag: false,
    }
    const[state,dispatch] = useReducer(reducer, initialState);
   
    // console.log(initialState);
    function reducer(state,action){
        switch(action.type){
            case 'SHOW':
                
            return {...state,
                showTextFlag: true};
                
            case 'HIDE':
                return{
                    ...state,
                    showTextFlag:false
                }
                case 'CHANGE':
                return{
                    ...state,
                    changeTextStylesFlag: !state.changeTextStylesFlag,
                }
            default:
                break;
        }
    }
    console.log(state);

    return(
        <div>
            {(state.showTextFlag) ? <h1 style = {{color: state.changeTextStylesFlag? 'red':'black'}}>Reducer example</h1>:null}
        <button onClick = {() => dispatch({type: 'SHOW'})}>Show</button>
        <button onClick = {()=> dispatch({type:'HIDE'})}>Hide</button>
        <button onClick = {()=> dispatch({type: 'CHANGE'})}>Change style</button>
        </div>
    );
}
export default ReducerExample;