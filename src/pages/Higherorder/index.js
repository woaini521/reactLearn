import React from "react";
import { ConfigProvider, DatePicker, message, Button } from "antd";
import Add from "./components/Add";
import Clone from "./components/Clone";
import Inputref from "./components/Inputref";
import Leizujian from "./components/Leizujian";
// 返回一个无状态的函数组件
function HOC(WrappedComponent) {
  const newProps = { type: "HOC" };
  return (props) => <WrappedComponent {...props} {...newProps} />;
}

// 返回一个有状态的 class 组件
function HOC1(WrappedComponent) {
  return class extends React.Component {
    render() {
      const newProps = { type: "HOC1" };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}

// 返回一个有状态的 class 组件
function HOC2(WrappedComponent) {
  return class extends React.Component {
    render() {
      return this.props.isShow ? (
        <WrappedComponent {...this.props} />
      ) : (
        <div>高阶组件2</div>
      );
    }
  };
}

const HOC3 = (WrappedComponent) => {
  return class Retrorse extends WrappedComponent {
    componentDidMount() {
        console.log(2222222222)
    }
    render() {
      return super.render();
    }
  };
};
const HOC4 = (WrappedComponent) => {
    const didMount = WrappedComponent.prototype.componentDidMount;
    return class Retrorse extends WrappedComponent {
      componentDidMount() {
          console.log(2222222222,"小小")
          didMount.apply(this)
          
      }
      state={
         ...this.state,
         num:0
      }
      change=()=>{
          this.setState({
              name:"zhurui"
          })
      }
      render() {
        return this.props.isRead?super.render():<div>重新渲染</div>;
      }
    };
};
function CloneDemo(props){
    return React.cloneElement(<Inputref></Inputref>,{user:"clone",num:123456,...props},props.children)
}
const Frist = HOC(Add);
const Second = HOC1(Add);
const Third = HOC2(Add);
const Fourth = HOC3(Leizujian);
const Forth = HOC4(Leizujian);
class Higherorder extends React.Component {
  static sayHello() {
    console.error("hello world");
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "小明",
      num: 0,
      inputElement: "",
      flag: true,
    };
  }

  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <Frist></Frist>
        <Second></Second>
        <Third isShow={this.state.flag}></Third>
        {/* 反向继承 */}
        <Fourth></Fourth>
        <Forth isRead={this.state.flag}></Forth>
        <CloneDemo>
            <Clone></Clone>
        </CloneDemo>
      </div>
    );
  }
}

export default Higherorder;
