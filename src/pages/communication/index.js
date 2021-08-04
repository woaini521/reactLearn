import React from "react";
import { ConfigProvider, DatePicker, message, Button } from "antd";
import Son from "./components/Son"
class Communication extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "小明",
    num: 0,
  };
  // add=(data)=>{
  //   this.setState({num:data})
  // }
  add(data){
    this.setState({num:data})
  }
  render() {
    return (
      <div>
        <h1>react组件通信</h1>
        <h1>{this.state.num}</h1>
        {/* <Son name={this.state.name} callback={this.add} ></Son> */}
        <Son name={this.state.name} callback={this.add.bind(this)} ></Son>
      </div>
    );
  }
}

export default Communication;
