export default function Node(props) {
  return (
    <div className="node" uid={props.value}>
      {props.value}
    </div>
  );
}
