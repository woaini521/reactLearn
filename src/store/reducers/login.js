import {LOGIN,LOGOUT,REGISTEE} from "../actionTypes"

export default (state={name:'admin',password:123456},action)=>{

  switch(action.type){
      case LOGIN:
          return  {name:action.payload.name,password:action.payload.password};
      case LOGOUT:
          return {name:"小小",password:"out"}; 
      case REGISTEE:
          return {name:"",password:""} 
       default:
           return state     
  }

}