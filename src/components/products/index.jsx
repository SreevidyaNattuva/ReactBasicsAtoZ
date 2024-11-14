import { useDeferredValue, useEffect, useState } from "react";
import ProductItem from "./components/product-item";

const initialState = true;

const countInitial = 0;

function ProductList({ListofProducts,name,city}){
  const [flag,setFlag] = useState(initialState);
  const [count,setCount] = useState(countInitial);
  const [styl,setStyl] = useState(false);
  function UseEffectandUseState()
{
      setFlag(!flag);
}
function UseEffectandUseStateCounter()
{
  setCount(count+1);
}
useEffect(()=>{
if (count===10)  setStyl(!styl)
},[count])

    return(
        <div>
            <h4>ECommerce Project</h4>
            {/*<ProductItem />*/}
            <h3>{name} belongs {city}</h3>
            <button onClick={UseEffectandUseState}>UseState</button>
            <button onClick={UseEffectandUseStateCounter}>UseEffect</button>
            <h4 style = {{backgroundColor: styl? 'black': 'red'}}>CountUseEffect {count}</h4>
            { flag?
              <h4>Test UseEffect and UseState</h4>: <h4></h4>}
            
            <ul>
              {ListofProducts.map((item,index)=> ( 
                <ProductItem index = {index} singleItem = {item}/>
              ) )} 
            </ul>
        </div>);
};
export default ProductList;