import { Button } from "antd";
function Barname(props) {
  let header,main,footer
  props.children.map((item)=>{
    if(item.props['children'] ==='left'){
      return  header = item
    }else if(item.props['children'] ==='middle'){
      return  main = item
    }else{
      return  footer = item
    }
  })
  return (
    <div>
      <div style={{width:100+'px',height:100+'px',backgroundColor:'red'}}>
          {header}
      </div>
      <div style={{width:100+'px',height:100+'px',backgroundColor:'green'}}>{main}</div>
      <div style={{width:100+'px',height:100+'px',backgroundColor:'orange'}}>{footer}</div>
    </div>
  );
}
export default Barname;
