import React from 'react'
import { ConfigProvider, DatePicker, message,Button} from 'antd';
class Test1 extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        name:"小明",
        num:0
    }
    this.add = this.add.bind(this)
  }
    // state={
    //     name:"小明",
    //     num:0
    // }

  add(){
      alert(1111)
    this.setState({num:2})
  }
  increase(){
    this.setState(function(state,props){
        return {
            num:state.num + 1
        }
    })   
  }
  multiplicationl=()=>{
    this.setState({num:10})  
  }
  division(){
    this.setState({num:20})  
  }
  render() {
    return (
      <div>
         <h1>{this.state.num}</h1>
         <br />
         <br />
        <Button onClick={this.add}>+++</Button>  
        <Button onClick={this.increase.bind(this)}>+++</Button>  
        <Button onClick={this.multiplicationl}>---</Button>
        <Button onClick={()=>this.division()}>%%%%</Button>
        <Button>****</Button>
      </div>
    )
  }
}

export default Test1;

