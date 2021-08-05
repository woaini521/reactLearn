import React,{useRef,useEffect}from "react";
/**
 * 
 * @param {*} Component 原始组件
 * @param {*} isRef  是否开启ref模式
 */

 function HOC(Component,isRef){
    class Wrap extends React.Component{
       render(){
          const { forwardedRef ,...otherprops  } = this.props
          return <Component ref={forwardedRef}  {...otherprops}  />
       }
    }
      if(isRef){
        return  React.forwardRef((props,ref)=> <Wrap forwardedRef={ref} {...props} /> )
      }
      return Wrap
  }
  
  class Index extends React.Component{
    componentDidMount(){
        console.log(666)
    }
    render(){
      return <div>hello,world</div>
    }
  }
  
  const HocIndex =  HOC(Index,true)
  
  export default ()=>{
    const node = useRef(null)
    useEffect(()=>{
       /* 就可以跨层级，捕获到 Index 组件的实例了 */ 
      console.log(node.current.componentDidMount)
    },[])
    return <div><HocIndex ref={node}  /></div>
  }
  