import { matrix } from "./DFS";
var COL, ROW, dCol, dRow, grid;
// grid = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [32, 32, 33, 34, 35, 36, 37, 38, 39, 40], [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]];
ROW = 7;
COL = 20;

export function find_coordinates(ele) {
  for (var i = 0; i < 7; i += 1) {
    for (var j = 0; j < 20; j += 1) {
      if (ele === matrix[i][j]) {
        return [i, j];
      }
    }
  }
}

dRow = [0, 1, 0, -1];
dCol = [-1, 0, 1, 0];

function isValid(row, col, ROW, COL) {
  if (row < 0 || col < 0 || row >= ROW || col >= COL) {
    return false;
  }

  return true;
}

export function Greedy_BFS(start, matrix, goal) {
  var adjx, adjy, c, path, r, stack, temp, val, xn, yn, x, y;
  [x, y] = find_coordinates(start);
  path = [];
  stack = [[x, y]];
  let gn = 0;

  while (stack) {
    [r, c] = stack.pop();
    [xn, yn] = find_coordinates(goal);

    if (isValid(r, c, ROW, COL) === false) {
      continue;
    }

    if (matrix[r][c] === goal) {
      path.push(matrix[r][c]);
      console.log(path);
      //   return ",".join(path);
      return path;
    }

    path.push(matrix[r][c]);
    temp = [];
    let value = [];
    for (var i = 0, _pj_a = 4; i < _pj_a; i += 1) {
      adjx = r + dRow[i];
      adjy = c + dCol[i];
      if (isValid(adjx, adjy, ROW, COL) === false) {
        continue;
      }
      console.log(adjx, adjy);
      // val = Math.abs(adjx - xn) + Math.abs(adjy - yn);
      val = Math.round(Math.sqrt((adjx - xn) ** 2 + (adjy - yn) ** 2));
      // let dist = Math.abs(matrix[adjx][adjy] - matrix[r][c]);
      // gn = dist;
      temp.push([val, [adjx, adjy]]);
      value.push(val);
    }
    value.sort();

    // temp.sort({
    //   "key": x => {
    //     return x[0];
    //   }
    // });
    temp.sort((a, b) => {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      return 0;
    });
    stack.push(temp[0][1]);
  }
}

// console.log(A_star(0, 0, matrix, 50));
