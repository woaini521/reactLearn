import { Button } from "antd";
import React from "react"
function Bar({children}) {
  return (
    <div>
       {/* {children.map((item,index)=>{
           return index>0?item:"按照"
       })} */}
      { React.Children.map(children,(child,index) => {
               return child
       })}
       {/* {
           children
       } */}
       {/* {
           children("加以加油")
       } */}
    </div>
  );
}
export default Bar;
