// make multiplayer (2nd car, more lanes, collisons)
// add more obstacles (that do different things)

function setup() {
  createCanvas(670, 780)

}

let yellowLine1 = 210,
    yellowLine2 = 440,
    carLeftX, carTopY,
    numCones = 50,
    xConeOptions = [105, 335, 565],
    coneCoords = [],
    score = 0

function reset() {
  
  carLeftX = 260
  carTopY = 270
  score = 0
  
  coneCoords = []

  for (var i = 2; i < numCones + 2; i++) {
    coneIndex = Math.floor(Math.random() * 3)
    x = xConeOptions[coneIndex]
    y = -600 * i
    coneCoords.push([x, y])
  }
    
}

reset()

function buildCone(coords) {
  
  x = coords[0]
  y = coords[1]
    
  fill(255, 165, 0)
  rect(x - 75, y + 150, 150, 75)
  triangle(x, y, x + 50, y + 200, x - 50, y + 200)
  
  fill(255, 255, 255)
  quad(x - 22, y + 90, x - 30, y + 120, x + 30, y + 120, x + 22, y + 90)
    
}

function draw() {
  background(80,80,80)
  
  fill(255)
  rect(0, 715, 100 + 10 * round(score).toString().length, 155)
  fill(0)
  textSize(20)
  text('score: ' + round(score), 20, 755)
  
  fill(255)
  rect(carLeftX, carTopY, 150, 240, 50)

  fill(255,255,0)
  rect(yellowLine1, 780, 20, -2000)
  rect(yellowLine2, 780, 20, -2000)
  
  if (carLeftX < 0) {
    carLeftX = 30
  }
  
  if (carLeftX > 670) {
    carLeftX = 490
  }
 
  if (carTopY < 0) {
    carTopY = 10
  }
  
  if (carTopY > 780) {
    carTopY = 530
  }
  
  for (const coords of coneCoords) {
    
    buildCone(coords)
    
    coneX = coords[0]
    coneY = coords[1]
    
    if (carLeftX+65 < coneX && coneX < carLeftX+85 && carTopY-225 < coneY && coneY < carTopY+255) {
      reset()
    }
  
    coords[1] += 8
    
  }
  
  score += 0.1
  
}

function keyPressed() {
  
  if (keyCode == LEFT_ARROW) {
    carLeftX -= 230
  }
  
  if (keyCode == RIGHT_ARROW) {
    carLeftX += 230
  }
  
  if (keyCode == UP_ARROW) {
    carTopY -= 260
  }

  if (keyCode == DOWN_ARROW) {
    carTopY += 260
  }
  
}