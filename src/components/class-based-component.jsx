import { Component } from "react";


class ExampleClass extends Component{
  state = {
    setToggle:true,
    count:1,
  };
  handleClick =() =>{
    this.setState({
      setToggle: !this.state.setToggle,
    })

  }
  IncrementCounter=()=>{
    this.setState({
      count: this.state.count+1,
    })
  }
  render(){
    console.log(this.state);
    const{setToggle,count} = this.state;
    return(
      <div>
        {setToggle ? <h1>Test Toggle</h1>: <h1></h1>}
        <h1>Hi Again</h1>
        <button onClick = {this.handleClick}>button</button>
        <button onClick = {this.IncrementCounter}>Increment</button>
        <h1>count is{count}</h1>
      </div>
    );
  }
}

export default ExampleClass