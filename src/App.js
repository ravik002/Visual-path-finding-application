import "./App.css";
import { React, useState } from "react";
import ".//UI/nodesContainer";
import NodeContainer from ".//UI/nodesContainer";
import Navigation from "./UI/navigation";
// import Navigation from "./UI/navigation";
// import DFS from "./algorithms/DFS";
function App() {
  const [clicked, setclicked] = useState(false);
  const [type, settype] = useState("DFS");
  const [input, setinput] = useState([]);
  function get_call(state, ty) {
    setclicked(state);
    settype(ty);
  }
  // function getinput(i) {
  //   setinput(i);
  // }
  // console.log(input);
  return (
    <div className="App">
      <Navigation is_clicked={get_call} />
      <NodeContainer visited={false} value={clicked} type={type} />
    </div>
  );
}

export default App;
