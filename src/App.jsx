import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from "./components/products/index"
import ReducerExample from"./components/use-reducer-example"
import ExampleClass from "./components/class-based-component"
import FunctionalComponents from "./components/functional-component"
import Users from './components/users'
import GlobalCntxtExample from"./components/text"
import ButtonContext from './components/button'
const dummyProductData = ["Hi1","Hi2","Hi3"]



function App() {
  return (
    <div>
    <h1>Hi Hell</h1>
    {/*<ExampleClass/>*/}
    {/* <Users/> */}
    <GlobalCntxtExample/>  
    <ButtonContext/> 
    <ReducerExample/> 
    {/*<ProductList ListofProducts = {dummyProductData} name="Maremma" city="Everywhere"/>*/}
    </div>
  )
}

export default App
