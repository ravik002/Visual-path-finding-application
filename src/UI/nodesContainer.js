import React from "react";
import { matrix, DFS, vis } from "../algorithms/DFS";
import { A_star, find_coordinates } from "../algorithms/A_Star";
import { Greedy_BFS } from "../algorithms/Greedy_BFS";
import { BFS } from "../algorithms/BFS";
import { useState, useEffect } from "react";

// import {  } from "react/cjs/react.production.min";
// import DFS_graph from "../algorithms/DFS";
import Node from "./searchingNodes";

export default function NodeContainer(props) {
  let nodes = [];
  let { value, visited, type } = props;
  // const [graph_state, setgraph_state] = useState(graph);
  // const [nodeColor, setnodeColor] = useState("white");
  const [isVisited, SetIsVisited] = useState(visited);
  const [selecting, setselecting] = useState(false);
  const [inputreceived, setinputreceived] = useState(false);
  const [dataarr, setdataarr] = useState([]);
  let inparr = [];

  for (let i = 1; i < 141; i++) {
    nodes.push(i);
  }

  // document.querySelector(`.node`).addEventListener("click", function (e) {
  //   inparr.push(+e.target.innerHTML);
  // });
  // if (inparr.length === 2) {
  //   setselecting(false);
  // }

  function containerclickhandler(e) {
    if (e.target != null) {
      console.log(e.target.innerHTML);
      inparr.push(+e.target.innerHTML);
      if (inparr.length == 1) {
        document.querySelector(
          `.node[uid = "${+e.target.innerHTML}"]`
        ).style.backgroundColor = "#9c36b5 ";
      } else if (inparr.length == 2) {
        document.querySelector(
          `.node[uid = "${e.target.innerHTML}"]`
        ).style.backgroundColor = "#9c36b5 ";
      }
    }
    console.log(inparr);
    if (inparr.length == 2) {
      setdataarr(inparr);
      setselecting(true);
    }
  }
  console.log(dataarr);
  // window.addEventListener("DOMContentLoaded", (event) => {
  //   // console.log("DOM fully loaded and parsed");

  // });

  // useEffect(() => {
  //   if (selecting === "true") {
  //     console.log(inparr);

  //     start = dataarr[0];

  //     [x, y] = find_coordinates(start);
  //     end = dataarr[1];
  //     console.log(start, end);
  //   }

  //   setselecting(false);
  //   setinputreceived(true);
  //   if (inputreceived === true) {
  //     animateNodes(x, y, end);
  //   }
  // }, [selecting]);
  // console.log(inparr);
  // function DFS_graph(graph, start, goal) {
  //   let path = [];
  //   let stack = [start];

  //   while (stack != null) {
  //     let s = stack.pop();
  //     console.log(s);
  //     if (!path.includes(s)) {
  //       path.push(s);
  //     }
  //     console.log(stack, path);

  //     // document
  //     //   .querySelector(`.node[uid = "${s}"]`)
  //     //   .classList.add("node-visited");
  //     // document.querySelector(`.node[uid = "${s}"]`).style.backgroundColor =
  //     //   nodeColor;
  //     if (s === goal) {
  //       console.log(path.join(","));

  //       return path;
  //     }

  //     if (graph[s]) {
  //       for (const neighbour of graph[s]) {
  //         stack.push(neighbour);
  //       }
  //     }
  //   }
  // }
  // console.log(value);

  useEffect(() => {
    let start, x, y, end;
    if (selecting === "true") {
      console.log(dataarr);

      start = dataarr[0];

      [x, y] = find_coordinates(start);
      end = dataarr[1];
      console.log(start, end);
    }

    // setselecting(false);
    // setinputreceived(true);
    console.log(dataarr, x, y, end);
    if (value === true) {
      let path;
      if (type === "A_STAR") {
        path = A_star(dataarr[0], matrix, dataarr[1]);
      } else if (type === "DFS") {
        path = DFS(dataarr[0], matrix, vis, dataarr[1]);
      } else if (type === "GREEDY_BFS") {
        path = Greedy_BFS(dataarr[0], matrix, dataarr[1]);
      } else if (type === "BFS") {
        path = BFS(dataarr[0], matrix, vis, dataarr[1]);
      }
      path.pop();
      path.shift();
      SetIsVisited(true);
      // props.value = false;

      path.forEach((element, i, path) => {
        setTimeout(() => {
          document.querySelector(
            `.node[uid = "${element}"]`
          ).style.backgroundColor = "#f06595";
          document.querySelector(`.node[uid = "${element}"]`).style.border =
            "1px solid #9c36b5 ";
        }, 80 * i);
      });
      // value = false;
    }
  }, [value, dataarr, type]);

  // inparr = []

  return (
    <React.Fragment>
      <div onClick={containerclickhandler} className="node_container">
        {nodes.map((node) => {
          return <Node key={node} value={node} />;
        })}
      </div>
    </React.Fragment>
  );
}
