const drawMaze4 = s => {
  if ((s + 1) % 4 != 0 || s <= 0) {
    console.log(
      "Input must positive integer and can be expressed in 4n - 1, where n is a positive integer"
    )
    return
  }
  for (let i = 0; i < s; i++) {
    let result = ""
    for (let j = 0; j < s; j++) {
      if (i == 0 && j == 1) {
        result += " "
      } else if (i % 2 === 0 && i != 0) {
        if ((i % 4 == 0 && j <= s - 3 && j >= s - i) || j % 2 == 0) {
          result += "@"
        } else if ((i % 4 != 0 && (j < s && j >= s - i)) || j % 2 == 0) {
          result += "@"
        } else {
          result += " "
        }
      } else if (j % 4 === 0 && i === 1 && j !== 0 && j !== s - 1) {
        result += " "
      } else {
        if ((j <= s - 3 && j >= s - i) || (j % 2 != 0 && i != 0)) {
          result += " "
        } else {
          result += "@"
        }
      }
    }
    console.log(result)
  }
}
drawMaze4(-1)
// // drawMaze4(0)
// // drawMaze4(4)
// // drawMaze4(5)
// drawMaze4(15)
