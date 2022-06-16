import { find_coordinates } from "./A_Star";
// export const graph = {
//   60: [41, 61, 81],
//   41: [22, 42],
//   61: [62, 82],
//   81: [100, 101, 102],
//   10: [16, 18, 19],
//   12: [11, 13, 14],
//   15: [20, 17, 21],
// };

// export const matrix = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [
//     21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
//     40,
//   ],
//   [
//     41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//     60,
//   ],
//   [
//     61, 62, 63, 64, 65, 66, 67, 68, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
//     80,
//   ],
// ];

const matrix = [];
let n = 1,
  v = 1;
for (let i = 0; i < 7; i++) {
  n += 20;
  let temp = [];
  for (let j = v; j < n; j++) {
    temp.push(j);
  }
  matrix.push(temp);
  v += 20;
}
console.log(matrix);
// export const graph = {
//   0: [1, 8, 7],
//   1: [2, 9],
//   2: [3, 10],
//   4: [10, 12, 15],
//   10: [16, 18, 19],
//   12: [11, 13, 14],
//   15: [20, 17, 21],
// };

var ROW = 7;
var COL = 20;

// Initialize direction vectors
var dRow = [0, 1, 0, -1];
var dCol = [-1, 0, 1, 0];
var vis = Array.from(Array(ROW), () => Array(COL).fill(false));
// Function to check if mat[row][col]
// is unvisited and lies within the
// boundary of the given matrix
function isValid(vis, row, col) {
  // If cell is out of bounds
  if (row < 0 || col < 0 || row >= ROW || col >= COL) return false;

  // If the cell is already visited
  if (vis[row][col]) return false;

  // Otherwise, it can be visited
  return true;
}

// Function to perform DFS
// Traversal on the matrix grid[]
 function BFS(start, grid, vis, goal) {
  // Initialize a stack of pairs and
  // push the starting cell into it
  let r, c;
  [r, c] = find_coordinates(start);
  let path = [];
  let st = [];
  st.push([r, c]);

  // Iterate until the
  // stack is not empty
  while (st.length !== 0) {
    // Pop the top pair
    var curr = st[0];
    st.shift();
    var row = curr[0];
    var col = curr[1];

    // Check if the current popped
    // cell is a valid cell or not
    if (!isValid(vis, row, col)) continue;

    // Mark the current
    // cell as visited
    vis[row][col] = true;

    if (grid[row][col] === goal) {
      path.push(grid[row][col]);
      return path;
    }
    // Print the element at
    // the current top cell
    // console.log(grid[row][col] + " ");
    path.push(grid[row][col]);

    // Push all the adjacent cells
    for (var i = 0; i < 4; i++) {
      var adjx = row + dRow[i];
      var adjy = col + dCol[i];
      st.push([adjx, adjy]);
    }
  }
}

export {BFS,vis,matrix}

// Driver Code
// var grid = [ [ -1, 2, 3 ],
//                        [ 0, 9, 8 ],
//                        [ 1, 0, 1 ] ];
// Stores whether the current
// cell is visited or not

// Function call
// DFS(0, 0, grid, vis);
