import React from 'react'
import { ConfigProvider, DatePicker, message,Button} from 'antd';
import Css1  from './components/Css1';


class Classtyle extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        name:"小明",
        num:0
    }
  }
    // state={
    //     name:"小明",
    //     num:0
    // }
  render() {
    return (
      <div>
         <h1>样式</h1>
         <Css1></Css1>
      </div>
    )
  }
}

export default Classtyle;

