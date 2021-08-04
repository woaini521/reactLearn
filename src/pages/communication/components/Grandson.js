import React from "react";
import ThemContext from "../../../context";
import PropTypes from 'prop-types';
import { ConfigProvider, DatePicker, message, Button } from "antd";

class Grandson extends React.Component {
    // static contextTypes = {
    //     name: PropTypes.string,
    // }
    // static propTypes = {
    //     num: PropTypes.number,
    // }
    // static defaultProps = {
    //     num:0
    // }
  constructor(props) {
    super(props);
    this.state = {
      name: "小明",
      num: 0,
    };
  }
  render() {
    return (
      <div>
        <ThemContext.Consumer>
          {(value) => {
            return (
              <div>
                <h1>孙子组件</h1>
                 <h1 style={{color:'#852222'}}>{this.props.num}</h1>
                <div>{value.name}</div>
              </div>
            );
          }}
        </ThemContext.Consumer>
      </div>
    );
  }
}
Grandson.propTypes = {
    num: PropTypes.number,
}
Grandson.defaultProps = {
    num:0
}
export default Grandson;
