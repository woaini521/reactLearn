import { Button } from "antd";
function Bar(props) {
  let Main,Up,Down
  console.log(props.children[0]().props['data-position'],"scope")
  props.children.map((item)=>{
      if(item().props['data-position']==='up'){
        return  Main = item
      }else if(item().props['data-position']==='down'){
          Up = item
      }else{
         Down = item
      }
  })
  return (
    <div>
       <div className="up">{props.children[1]("11111")}</div>
       <div className="main" style={{color:"red"}}>{props.children[0]('22222')}</div>
       <div className="down">{props.children[2]('eeeeee')}</div>
       <div className="down">{Main('COISDCOIJ')}</div>
       <div className="down">{Up(1123)}</div>
       <div className="down">{Down(431243)}</div>
    </div>
  );
}
export default Bar;
