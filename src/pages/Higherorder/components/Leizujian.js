import React from 'react'
class Leizujian extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        name:"小明",
    }
  }
  componentDidMount(){
      console.log(111111111)
  }
  render() {
    return (
      <div>
         <h1>高阶组件反向继承</h1>
         <h1>{this.state.name}</h1>
         <h1>{this.state.num}</h1>
         <button onClick={this.change}>ChangeName</button>
      </div>
    )
  }
}

export default Leizujian;

