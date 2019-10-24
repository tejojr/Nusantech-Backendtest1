const drawMaze2 = s => {
  if ((s + 1) % 4 != 0 || s <= 0) {
    console.log(
      "Input must positive integer and can be expressed in 4n - 1, where n is a positive integer"
    )
    return
  }
  let i, j
  const half = Math.floor(s / 2)
  // console.log(half)
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
        // console.log(j, j % 2)
        if (j % 2 == 0 && (j > i || j < s - i)) {
          line += "@"
        } else {
          line += " "
        }
      }
    } else {
      for (j = 0; j < s; j++) {
        if (j % 2 != 0 && (j > i || j < s - i)) {
          line += " "
        } else {
          line += "@"
        }
      }
    }
    console.log(line)
  }
}
// drawMaze2(-1)
// drawMaze2(0)
// drawMaze2(4)
// drawMaze2(5)
drawMaze2(15)
