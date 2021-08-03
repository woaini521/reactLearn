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

  add(e,name){
      console.log(e,1111)
    this.setState({num:name})
  }
  // bind改变指向  目标事件放在后面
  increase(userNum,e){
      console.log(userNum,e)
    this.setState(function(state,props){
        let data = state.num + userNum;
        console.log(userNum,11)
        return {
            num:data 
        }
    })   
  }
  multiplicationl=(e,data)=>{
      console.log(e,"multiplicationl")
    this.setState({num:data})  
  }
  division(e,data){
      console.log(e,data,"division")
    this.setState({num:data})  
  }
  render() {
    return (
      <div>
         <h1>参数</h1>
         <h1>{this.state.num}</h1>
         <br />
         <br />
        <Button onClick={(e)=>this.add(e,"xiaoxiao")}>+++</Button>  
        <Button onClick={this.increase.bind(this,100)}>+++</Button>  
        <Button onClick={(e)=>this.multiplicationl(e,99)}>---</Button>
        <Button onClick={(e)=>this.division(e,3333)}>%%%%</Button>
        <Button>****</Button>
      </div>
    )
  }
}

export default Test1;

