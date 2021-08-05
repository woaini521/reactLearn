function Inputref(props) {
  return (
    <div>
      {props.type ? props.type : "暂无数据"}
      <h2>{props.user}</h2>
      <h2 style={{ color: "red" }}>{props.num}</h2>
    </div>
  );
}

export default Inputref;
