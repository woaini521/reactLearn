import {APP_LOAD,REDIRECT,ARTICLE_SUBMITTED} from "../actionTypes"

export default (state={name:'admin',password:123456},action)=>{

  switch(action.type){
      case APP_LOAD:
          return  {name:payload.name,password:payload.password};
      case REDIRECT:
          return {name:"小小",password:"out"}; 
      case ARTICLE_SUBMITTED:
          return {name:"",password:""} 
       default:
           return state     
  }

}