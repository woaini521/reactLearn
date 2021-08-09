import React,{useState,useReducer,useMemo,useCallback} from "react";
import Public from "./components/public";
function getUserInfo(a){
    return new Promise((resolve)=>{
        setTimeout(()=>{ 
           resolve({
               name:a,
               age:16,
           }) 
        },500)
    })
}

function Hook(){
    const [num,setNum] = useState(0)
    const [name,setName] = useState(function(){
        return num?"小小":"消息"
    })
        /* number为更新后的state值,  dispatchNumbner 为当前的派发函数 */
       const [ number , dispatchNumbner ] = useReducer((state=0,action)=>{
           const { payload , name  } = action
           /* return的值为新的state */
           switch(name){
               case 'add':
                   return state + 1
               case 'sub':
                   return state - 1 
               case 'reset':
                 return payload       
           }
           return state
       },0)
    const Data = useMemo(()=><Public data={name}></Public>,[name])   
    return (
        <div>
            <h1>{num}</h1>
            <h1>{number}</h1>
             {Data}
            <button onClick={()=>setName("jinjin")}>改名字</button>
            <button onClick={()=>setNum(num+1)}>++增加</button>
            <button onClick={()=>dispatchNumbner({ name:'add' })} >增加</button>
            <button onClick={()=>dispatchNumbner({ name:'sub' })} >减少</button>
            <button onClick={()=>dispatchNumbner({ name:'reset' ,payload:666 })} >赋值</button>
        </div>
    )
}

export default Hook;