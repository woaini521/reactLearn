import { Button } from "antd";
import Grandson from "./Grandson"
import React,{useContext} from "react";
import ThemContext from "../../../context";
import PropTypes from 'prop-types';
Son.propTypes={
    name:PropTypes.string
}
function Son(props) {
  //   const  add1=()=>{
  //         props.callback(100)
  //     }
  const {name} = useContext(ThemContext)
  function add1() {
    props.callback(100);
  }
  console.log(useContext(ThemContext),"obj")
  return (
    <div>
      <h1>儿子组件</h1>
      <h1>{props.name}</h1>
      <div style={{color:"green"}}>{name}</div>
      <ThemContext.Consumer>
          {
              (value)=>{
                  return (
                      <div style={{color:"red"}}>{value.name}</div>
                  )
              }
          }
      </ThemContext.Consumer>
      <Grandson num={2} ></Grandson>
      <Button onClick={add1}>son+++</Button>
    </div>
  );
}
export default Son;
