import { Button } from "antd";
function Bar(props) {
  return (
    <div>
       <div>{props.left}</div>
       <div>{props.right}</div>
       <div>{props.Container}</div>
    </div>
  );
}
export default Bar;
