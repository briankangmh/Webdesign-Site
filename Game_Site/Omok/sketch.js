class spot {
  constructor() {
    // this.x=x
    // this.y=y
    this.mark = 'x'
  }
}

//alternate players
let board = [
  // ['','','','','','','','','','','','','','',''],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]

let x = -1;
let y = -1;
let padding = 60;
let gap = 40;
let winner = 'x'
let currentPlayer = 1

function drawboard() {
  // draw board
  stroke(170, 170, 170)
  for (let i = 0; i < 15; i++) {
    line(padding + i * gap, padding - 10, padding + i * gap, padding + gap * 14 + 10)
  }
  for (let i = 0; i < 15; i++) {
    line(padding - 10, padding + gap * i, padding + gap * 14 + 10, padding + gap * i)
  }
  noStroke()
  fill(170)
  circle(padding + 3 * gap, padding + 3 * gap, 8)
  circle(padding + 3 * gap, padding + 11 * gap, 8)
  circle(padding + 11 * gap, padding + 3 * gap, 8)
  circle(padding + 11 * gap, padding + 11 * gap, 8)
}

function drawpeices() {
  // drawing the pieces on the board
  noStroke()
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (board[i][j].mark == 1) {
        fill(180)
        circle(padding + gap * i + 3, padding + gap * j + 4, 33)
        fill(47)
        if (winner != 'x') {
          fill(90)
        }
        circle(padding + gap * i, padding + gap * j, 33)
      } else if (board[i][j].mark == 0) {
        fill(180)
        circle(padding + gap * i + 3, padding + gap * j + 4, 33)
        fill(255)
        if (winner != 'x') {
          fill(239)
        }
        circle(padding + gap * i, padding + gap * j, 33)
      }
    }
  }
}

function drawcursor() {
  if (mouseX < padding + gap * 14 + 10 && mouseX > padding - 10 && mouseY < padding + gap * 14 + 10 && mouseY > padding - 10 && winner == 'x') {
    // circle(mouseX, mouseY, 33)
    cursor('none')
  } else {
    cursor(ARROW)
  }

  if (mouseX >= padding && mouseX <= padding + gap * 14 && mouseY <= padding + gap * 14 && mouseY >= padding) {
    x = ((mouseX - padding) / gap).toFixed()
    y = ((mouseY - padding) / gap).toFixed()
    let actualx = mouseX - padding
    let actualy = mouseY - padding

    if (currentPlayer == 1) {
      fill(130)
    } else {
      fill(240)
    }
    // console.log(actualx, actualy)
    if (x >= 0 && y >= 0) {
      if ((board[x][y]).mark != 'x') {
        cursor(ARROW)
      } else if (winner == 'x') {
        noStroke()
        // blendMode(SOFT_LIGHT)
        circle(padding + gap * x, padding + gap * y, 47)
      }
    }
  }
}

function checkArr(arr) {
  org = arr[0]
  if (org == 'x') {
    return 'x'
  }
  for (let i = 0; i < 5; i++) {
    if (arr[i] != org) {
      return 'x'
    }
    console.log('1 operation performed')
  }
  return org
}

function arrtopleft(i, j) {
  let result = []
  for (let a = 0; a < 5; a++) {
    result.push(board[i][j].mark)
    i -= 1
    j -= 1
  }
  return result
}

function arrtopright(i, j) {
  let result = []
  for (let a = 0; a < 5; a++) {
    result.push(board[i][j].mark)
    i += 1
    j -= 1
  }
  return result
}

function checkwin() {
  //ver
  for (let i = 0; i < 15; i++) {
    let arr = []
    for (let j = 0; j < 15; j++) {
      if (arr.length == 5) {
        arr.shift()
      }
      arr.push(board[i][j].mark)
      let val = checkArr(arr)
      if (val != 'x') {
        return val
      }
    }
  }
  //hor
  for (let i = 0; i < 15; i++) {
    let arr = []
    for (let j = 0; j < 15; j++) {
      if (arr.length == 5) {
        arr.shift()
      }
      arr.push(board[j][i].mark)
      let val = checkArr(arr)
      if (val != 'x') {
        return val
      }
    }
  }
  //leftbottom to top right
  for (let i = 14; i >= 4; i--) {
    for (let j = 0; j <= 10; j++) {
      let arr = arrtopright(j, i)
      console.log(arr)
      let val = checkArr(arr)
      if (val != 'x') {
        console.log(val)
        return val
      }
    }
  }
  //lefttop to bottom right
  // go from 4,14 to 14 14,
  // and starting point goes from 4,14 to 4, 4
  for (let i = 14; i >= 4; i--) {
    for (let j = 4; j <= 14; j++) {
      let arr = arrtopleft(j, i)
      console.log(arr)
      let val = checkArr(arr)
      if (val != 'x') {
        console.log(val)
        return val
      }
    }
  }
  return 'x'
}

function win(winParam) {
  winner = winParam
  rectMode(CENTER)
  fill(240)
  rect(padding+gap*7,padding+gap*5.5,300,150, 20)
  fill(30)
  textAlign(CENTER)
  textSize(32)
  textFont('Avenir')
  let col
  if (winParam == 0){
    col='White'
  }
  else{
    col='Black'
  }
  text(col+' wins', padding+gap*7,padding+gap*5.5)
}

function setup() {
  let currentPlayer = 1
  createCanvas(680, 680);
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      leboi = new spot()
      board[i][j] = leboi
    }
  }
  // for(let i=0; i<15; i++){
  //   for(let j=0; j<15; j++){
  //     console.log(board[i][j].x, board[i][j].y)
  //   }
  // }
}

function draw() {
  background(230)

  drawboard()
  drawpeices()

  if (winner != 'x') {
    win(lewinner)
  }
  // if game not won, draw cursor
  drawcursor()
  // else display message, reset if needed

}

function mouseClicked() { //only do if not won
  //switch appropriate spot to 'marked' with appropriate color
  // console.log(x, y)
  if (board[x][y].mark == 'x' && winner == 'x') {
    board[x][y].mark = currentPlayer
    currentPlayer = (currentPlayer + 1) % 2
  }
  lewinner = checkwin()
  if (lewinner != 'x') {
    win(lewinner)
  }
}

function keyPressed() {
  if (keyCode==ENTER&&winner!='x') {
    winner = 'x'
    setup()
  }
  if(keyCode==LEFT_ARROW){
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

