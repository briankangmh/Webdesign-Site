class card {
  constructor(fruit, num) {
    this.fruit = fruit
    this.num = num
  }
}

// 0: strawberry
// 1: banana
// 2: plum
// 3: grape

let cardwidth = 150
let cardheight = 200
let leftcenter = [140, 200]
let rightcenter = [360, 200]
let rightscore = 0
let leftscore = 0
let hit = false

let left = -1
let right = -1
let turn = 0
let deck = []
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    deck.push(new card(i, 1))
  }
  for (let j = 0; j < 3; j++) {
    deck.push(new card(i, 2))
  }
  for (let j = 0; j < 3; j++) {
    deck.push(new card(i, 3))
  }
  for (let j = 0; j < 2; j++) {
    deck.push(new card(i, 4))
  }
  deck.push(new card(i, 5))
}

function checkclick() {
  if (turn == 0 && mouseX < 180 && mouseX > 100 && mouseY < 440 && mouseY > 400) {
    return 0
  } else if (turn == 1 && mouseX < 400 && mouseX > 320 && mouseY < 440 && mouseY > 400) {
    return 1
  } else {
    return 2
  }
}

function goturn(val) {
  if (val == 0) {
    left = Math.floor(Math.random() * 55 + 1)
    console.log(left, right)
    turn = 1
  }
  if (val == 1) {
    right = Math.floor(Math.random() * 55 + 1)
    console.log(left, right)
    turn = 0
  }
}

function drawcard() {
  if (left != -1) {
    fill(220)
    rectMode(CENTER)
    rect(leftcenter[0], leftcenter[1], cardwidth, cardheight, 10)
    if (deck[left].fruit == 0) {
      // 딸기
      fill(255, 51, 119)
    } else if (deck[left].fruit == 1) {
      // 바나나
      fill(255, 234, 94)
    } else if (deck[left].fruit == 2) {
      // 자두
      fill(153, 102, 255)
    } else if (deck[left].fruit == 3) {
      // 포도
      fill(133, 224, 133)
    }
    let coords = []
    if (deck[left].num == 1) {
      coords.push([leftcenter[0], leftcenter[1]])
    }
    if (deck[left].num == 2) {
      coords.push([leftcenter[0] - cardwidth / 6, leftcenter[1] - cardwidth / 6])
      coords.push([leftcenter[0] + cardwidth / 6, leftcenter[1] + cardwidth / 6])
    }
    if (deck[left].num == 3) {
      coords.push([leftcenter[0] - cardwidth / 4, leftcenter[1] - cardheight / 4])
      coords.push([leftcenter[0], leftcenter[1]])
      coords.push([leftcenter[0] + cardwidth / 4, leftcenter[1] + cardheight / 4])
    }
    if (deck[left].num == 4) {
      coords.push([leftcenter[0] - cardwidth / 4.67, leftcenter[1] - cardheight / 4])
      coords.push([leftcenter[0] - cardwidth / 4.67, leftcenter[1] + cardheight / 4])
      coords.push([leftcenter[0] + cardwidth / 4.67, leftcenter[1] + cardheight / 4])
      coords.push([leftcenter[0] + cardwidth / 4.67, leftcenter[1] - cardheight / 4])
    }
    if (deck[left].num == 5) {
      coords.push([leftcenter[0] - cardwidth / 4.67, leftcenter[1] - cardheight / 4])
      coords.push([leftcenter[0] - cardwidth / 4.67, leftcenter[1] + cardheight / 4])
      coords.push([leftcenter[0], leftcenter[1]])
      coords.push([leftcenter[0] + cardwidth / 4.67, leftcenter[1] + cardheight / 4])
      coords.push([leftcenter[0] + cardwidth / 4.67, leftcenter[1] - cardheight / 4])
    }
    for (let i = 0; i < deck[left].num; i++) {
      circle(coords[i][0], coords[i][1], 20)
    }
  }
  if (right != -1) {
    fill(220)
    rectMode(CENTER)
    rect(rightcenter[0], rightcenter[1], cardwidth, cardheight, 10)
    let newcoords = []
    if (deck[right].fruit == 0) {
      // 딸기
      fill(255, 51, 119)
    } else if (deck[right].fruit == 1) {
      // 바나나
      fill(255, 234, 94)
    } else if (deck[right].fruit == 2) {
      // 자두
      fill(153, 102, 255)
    } else if (deck[right].fruit == 3) {
      // 포도
      fill(133, 224, 133)
    }
    if (deck[right].num == 1) {
      newcoords.push([rightcenter[0], rightcenter[1]])
    }
    if (deck[right].num == 2) {
      newcoords.push([rightcenter[0] - cardwidth / 6, rightcenter[1] - cardwidth / 6])
      newcoords.push([rightcenter[0] + cardwidth / 6, rightcenter[1] + cardwidth / 6])
    }
    if (deck[right].num == 3) {
      newcoords.push([rightcenter[0] - cardwidth / 4, rightcenter[1] - cardwidth / 4])
      newcoords.push([rightcenter[0] + cardwidth / 4, rightcenter[1] + cardwidth / 4])
      newcoords.push([rightcenter[0], rightcenter[1]])
    }
    if (deck[right].num == 4) {
      newcoords.push([rightcenter[0] - cardwidth / 4.67, leftcenter[1] - cardheight / 4])
      newcoords.push([rightcenter[0] - cardwidth / 4.67, leftcenter[1] + cardheight / 4])
      newcoords.push([rightcenter[0] + cardwidth / 4.67, leftcenter[1] + cardheight / 4])
      newcoords.push([rightcenter[0] + cardwidth / 4.67, leftcenter[1] - cardheight / 4])
    }
    if (deck[right].num == 5) {
      newcoords.push([rightcenter[0] - cardwidth / 4.67, leftcenter[1] - cardheight / 4])
      newcoords.push([rightcenter[0] - cardwidth / 4.67, leftcenter[1] + cardheight / 4])
      newcoords.push([rightcenter[0], leftcenter[1]])
      newcoords.push([rightcenter[0] + cardwidth / 4.67, leftcenter[1] + cardheight / 4])
      newcoords.push([rightcenter[0] + cardwidth / 4.67, leftcenter[1] - cardheight / 4])
    }
    for (let i = 0; i < deck[right].num; i++) {
      circle(newcoords[i][0], newcoords[i][1], 20)
    }
  }
}

function drawboard() {
  if (turn == 0) {
    noStroke()
    fill(170, 235, 170)
    rectMode(CENTER)
    rect(140, 420, 80, 40, 10)
    fill(255)
    textSize(28)
    text("Flip", 120, 429)
  } else if (turn == 1) {
    noStroke()
    fill(170, 235, 170)
    rectMode(CENTER)
    rect(360, 420, 80, 40, 10)
    fill(255)
    textSize(28)
    text("Flip", 340, 429)
  }
  // if (left!=0){
  //   let letext=(deck[left].fruit).toString()+(deck[left].num).toString()
  //   text(letext, 100, 400)
  // }
  // if (right!=0){
  //   let letext=(deck[right].fruit).toString()+(deck[right].num).toString()
  //   text(letext, 300, 400)
  // }
  drawcard()
  textSize(35)
  fill(0)
  text(leftscore.toString(), 140, 300)
  text(rightscore.toString(), 340, 300)
}

function mouseClicked() {
  if (checkclick() == 0) {
    hit = false
    goturn(0)
  } else if (checkclick() == 1) {
    hit = false
    goturn(1)
  } else if (checkclick() == 2) {

  }
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(235);
  drawboard()
}

function keyPressed() {
  let valid
  if (deck[left].fruit == deck[right].fruit && deck[left].num + deck[right].num == 5) {
    valid = true
  } else if (deck[left].fruit != deck[right].fruit) {
    if (deck[left].num == 5 || deck[right].num == 5) {
      valid = true
    }
  }
  if (keyCode == 76) { //right
    if (valid && !hit) {
      rightscore += 1
      hit = true
    }
  } else if (keyCode == 65) { //left
    if (valid && !hit) {
      leftscore += 1
      hit = true
    }
  }
}