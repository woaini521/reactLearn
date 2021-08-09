import React from "react";
import { connect } from 'react-redux';
import {LOGIN,LOGOUT,REGISTEE} from "../../store/actionTypes"
import {Login,Loginout,actions} from "../../store/action"
import axios from "axios"
class Release extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    obj: {
      name: "store测试",
    },
  };
 componentDidMount(){
 }
  render() {
    return <div>
            <h1>store测试</h1>
             <h1>{this.props.name}</h1>
             <h1>{this.props.password}</h1>
             {/* <button onClick={()=>store.dispatch({type: 'INCREASE'})}>增加</button>
             <button onClick={()=>store.dispatch({type: 'DECREASE'})}>减法</button> */}
             {/* <button onClick={()=>this.props.Login("朱瑞",9999888)}>Login</button> */}
               <button onClick={this.props.Login}>Login</button>
             <button onClick={this.props.Loginout}>LOGOUT</button>
             <button onClick={this.props.Regisergit}>REGISTEE</button>
    </div>
  }
}


// export default connect(state=>({...state.Login}),(dispatch)=>({
//   //  Login:(name,passward)=>{
//   //       //  dispatch({type:LOGIN,payload:{name:name,password:passward}})
//   //  },
//   // Login:()=>{
//   //   axios.get("https://mock.mengxuegu.com/mock/61108f2b0f12550baa9b6817/example/talk").then((res)=>{
//   //   dispatch({type:LOGIN,payload:{name:res.data.data.name,password:res.data.data.password}})
//   // }) 
//   // },
//     Login:()=>{
//         //  dispatch({type:LOGIN,payload:{name:name,password:passward}})
//         dispatch(Login())
//    },
//    Loginout:()=>{
//       //  dispatch({type:LOGOUT})
//       dispatch(Loginout())
//    },
//    Regisergit:()=>{
//       dispatch({type:REGISTEE})
//    }
// }))(Release);
export default connect(state=>({...state.Login}),actions)(Release);
