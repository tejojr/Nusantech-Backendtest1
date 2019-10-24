const drawMaze3 = s => {
  if ((s + 1) % 4 != 0 || s <= 0) {
    console.log(
      "Input must positive integer and can be expressed in 4n - 1, where n is a positive integer"
    )
    return
  }
  let i, j
  const half = Math.floor(s / 2)
  //   console.log(half)
  /* top */

  for (i = 0; i <= half; i++) {
    let line = ""
    if (i % 2 == 0) {
      for (j = 0; j < s; j++) {
        if (j % 2 == 0 || (j < s - i && j > i + 1)) {
          line += "@"
        } else {
          line += " "
        }
      }
    } else {
      for (j = 0; j < s; j++) {
        if (j % 2 != 0 || (j < s - i && j > i + 1)) {
          line += " "
        } else {
          line += "@"
        }
      }
    }

    console.log(line)
  }

  /* bottom half */
  i = s - half
  for (i; i < s; i++) {
    let line = ""
    if (i % 2 != 0) {
      for (j = 0; j < s; j++) {
        if (j % 2 != 0 || (j < i - 1 && j > s - i - 1)) {
          line += " "
        } else {
          line += "@"
        }
      }
    } else {
      for (j = 0; j < s; j++) {
        if (j % 2 == 0 || (j < i - 1 && j > s - i - 1)) {
          line += "@"
        } else {
          line += " "
        }
      }
    }
    console.log(line)
  }
}
// drawMaze3(-1)
// drawMaze3(0)
// drawMaze3(4)
// drawMaze3(5)
drawMaze3(15)
