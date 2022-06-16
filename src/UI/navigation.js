import { React, useState, useEffect } from "react";
import "./navigation.css";

export default function Navigation(props) {
  // let operations_symbol = document.querySelector(".operations_name");
  // console.log(operations_symbol);
  const [clicked, setclicked] = useState(false);
  // const [selecting, setselecting] = useState(false);
  let scount = 0;
  let active = false;
  let inparr = [];
  function clickHandler() {
    active = !active;
    let operations_div = document.querySelector(".operations_div");

    if (active) {
      // console.log(operations_div.classList);

      operations_div.classList.remove("hidden");
    } else {
      operations_div.classList.add("hidden");
    }
  }

  // window.addEventListener("DOMContentLoaded", (event) => {
  //   const dfs_btn = document.querySelector(".btn-DFS");
  //   dfs_btn.addEventListener("click", function (e) {

  //   });
  // });

  function DFS_handler(e) {
    // e.preventDefault();
    setclicked(true);
    props.is_clicked(clicked, "DFS");
    // setclicked(false)
  }

  function A_star_handler() {
    setclicked(true);
    props.is_clicked(clicked, "A_STAR");
    // setclicked(false)
  }
  // setclicked(false)
  function Greedy_handler() {
    setclicked(true);
    props.is_clicked(clicked, "GREEDY_BFS");
  }

  function BFS_handler() {
    setclicked(true);
    props.is_clicked(clicked, "BFS");
  }
  // function SelectNodeHandler(e) {
  //   setselecting(true);
  // }

  // useEffect(() => {
  //   if (selecting === true) {
  //     document.addEventListener("click", function (e) {
  //       console.log(e.target.innerHTML);
  //       inparr.push(+e.target.innerHTML);
  //     });
  //     if (scount == 2) {
  //       setselecting(false);
  //     }
  //     // console.log(scount);
  //   }
  //   props.input(inparr.slice(0, 2));
  // }, [selecting]);

  function Reset_handler() {
    const nodes = document.querySelectorAll(".node");
    nodes.forEach((node) => {
      node.style.backgroundColor = null;
      node.style.border = "1px solid #e64980";
      // node.classList.add("node_restructure");
    });
    setclicked(false);
  }
  // sortingdiv.addEventListener("click", function () {
  //   sortingselected = !sortingselected;
  //   if (sortingselected) {
  //     sortingdiv.classList.remove("hidden");
  //   } else {
  //     sortingdiv.classList.add("hidden");
  //   }
  // });

  return (
    <nav className="navigation">
      <h1 className="sitename">Path finder</h1>
      <div className="nav_links">
        <div className="operations_name">
          <p>Operations</p>
          <span className="d_a">
            <svg
              onClick={clickHandler}
              xmlns="http://www.w3.org/2000/svg"
              className="down-arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        <div className="operations_div">
          <div className="operation_btn ">
            <button onClick={Greedy_handler} className="btn btn-Greedysearch ">
              Greedy BFS Search
            </button>
            {/* <button onClick={A_star_handler} className="btn btn-Asearch ">
              A* search
            </button> */}
            <button onClick={DFS_handler} className="btn btn-DFS ">
              Depth first search
            </button>
            <button onClick={BFS_handler} className="btn btn-BFS ">
              Breadth first search
            </button>
          </div>

          {/* <div className="operation_controls "> */}
          {/* <span className="btn">Search</span> */}
          {/* <button className="btn-control">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fast-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div> */}
        </div>

        <button onClick={Reset_handler} className="btn btn-reset ">
          Reset Content
        </button>
      </div>
    </nav>
  );
}
