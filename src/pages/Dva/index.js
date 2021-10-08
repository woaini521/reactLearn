import React from "react";
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
  componentDidMount() {}
  render() {
    return (
      <div>
        <button>num--</button>
      </div>
    );
  }
}
export default Reduxsaga;
