import React from 'react'
import { ConfigProvider, DatePicker, message,Button} from 'antd';
import Bar from "./components/Bar"  
import Barname from "./components/Barname"
import Barscope from "./components/Barscope"
import Tar from "./components/Tar"
import Barchildren from "./components/Barchildren"
import ThemContext from "../../context";
function Add({user}){
  return (
    <div>
       {user}
    </div>
  )
}
function Right({user}){
  return (
    <div>
      Right
    </div>
  )
}
function Left({user}){
  return (
    <div>
       left
    </div>
  )
}
function Container({user}){
  return (
    <div>
       Container
    </div>
  )
}
class Nameslot extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        name:"小明",
        num:0
    }
  }
  static contextType = ThemContext
  render() {
    const theme = this.context
    return (
      <div>
         <h1>插槽</h1>
         <h1>{theme.name}</h1>
          <Bar>
             <div style={{color:'red'}}>插槽</div>
          </Bar>
          <Barname>
            <div data-position="left">left</div>
            <div data-position="middle">middle</div>
            <div data-position="right">right</div>
          </Barname> 
          <Barscope>
           { (name)=><Add data-position="up" user={name}></Add>}
           { (name)=><Add data-position="mian" user={name}></Add>}
           { (name)=><Add data-position="down" user={name}></Add>}
          </Barscope>
          <Tar Container={<Container />}  left={<Left />} right={<Right />}> </Tar>
           <Barchildren>
               <div>1111111111</div>
               <Add user='xiaoxiao'></Add>
               <Add user='xiao'></Add>
           </Barchildren>
      </div>
    )
  }
}

export default Nameslot;

