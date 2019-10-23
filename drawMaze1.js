const drawMaze1 = s => {
  if ((s + 1) % 4 != 0) {
    console.log(
      "Input must positive integer and can be expressed in 4n - 1, where n is a positive integer"
    )
    return
  }
  for (let i = 0; i < s; i++) {
    let result = ""
    for (let j = 0; j < s; j++) {
      if (i == 0 || i == s - 1 || j == 0 || j == s - 1 || i % 2 == 0) {
        if (i % 4 == 0 && j == 1) {
          result += " "
        } else if (i % 2 == 0 && i % 4 != 0 && j == s - 2) {
          result += " "
        } else {
          result += "@"
        }
      } else {
        result += " "
      }
    }
    console.log(result)
  }
}
drawMaze1(15)
