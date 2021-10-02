import React from "react";
import { connect } from "react-redux";
import { LOGIN, LOGOUT, REGISTEE } from "../../store/actionTypes";
import { Login, Loginout, actions, actionSaga } from "../../store/action";
import axios from "axios";
class Reduxsaga extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    obj: {
      name: "store测试",
    },
  };
  componentDidMount() {
    console.log(this.props.dispatch, 2222);
  }
  render() {
    return (
      <div>
        <h1>redux-saga</h1>
        <div>
          <span>{this.props.num}</span>
        </div>
        <div>User</div>
        <div>admin:{this.props.name}</div>
        <div>Text:{this.props.text}</div>
        <div>password:{this.props.password}</div>
        {/* <button onClick={this.props.Numadd}>num++</button> */}
        <button
          onClick={() => {
            this.props.dispatch({ type: "numAdd" });
          }}
        >
          num++
        </button>
        <button onClick={this.props.NumIncrease}>num--</button>
        <button onClick={this.props.sagaIncrease}>saganum--</button>
        <button onClick={this.props.Login}>Login</button>
        <button onClick={this.props.Loginout}>Loginout</button>
        <button onClick={this.props.sagaAdd}>sagaAdd</button>
        <button onClick={this.props.sagaLogin}>sagaLogin</button>
        <button onClick={this.props.addText}>addText</button>
      </div>
    );
  }
}
export default connect((state) => ({ ...state.Saga, ...state.Login }), {
  ...actionSaga,
  ...actions,
})(Reduxsaga);
