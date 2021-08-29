//variables
if(true) {

var x2
var x3
var y2
var y3
var x4
var x5
var y4
var y5

}

function setup () {
  createCanvas(1050,700)
  background("white")
  textFont("mansalva")
  
}

//variables
if (true) {

var x1 = 200
var y1 = -40

var x6 = 0
var y6 = 0

var bx = 0
var by = 0

var tempAng = 4.7
var ang = 4.7

var a = 0
var b = 180
var c = 1

var s = 0.1

var ColorFill1 = "purple"

var T1 = false

var screen = "start"

var z = 30

var T2 = false
var T3 = false
var T4 = false
var T5 = false
var T6 = false
var T7 = false

var fillcolor1 = "pink"
var fillcolor2 = "magenta"
var fillcolor3 = "pink"
var fillcolor4 = "pink"
var fillcolor5 = "pink"
var fillcolor6 = "magenta"
var fillcolor7 = "pink"
var fillcolor8 = "pink"
var fillcolor9 = "pink"
var fillcolor10 = "magenta"

}

function draw () {
  strokeWeight(0.7)
  stroke(1)
  
//variables
if(true) {
  
  x2 = 75*cos(c*a) + 475
  x3 = 75*cos(c*b) + 275
  y2 = 175*cos(c*a) + 275
  y3 = 225*cos(c*b) + 325 
  
  x4 = -100*cos(c*a) + 430
  x5 = -100*cos(c*b) + 600
  y4 = 100*cos(c*a) + 230
  y5 = 100*cos(c*b) + 440
  
}
  
if(screen === "start") {
  
  start()
  
  } 
  
else if(screen === "options") {

 options() 
  
}
  
else if(screen === "maingame") {
    
    maingame()
    
  }
  
else if(screen === "endscreen1") {
    
  endscreen1()
    
  }
  
else if(screen === "endscreen2") {
    
  endscreen2()
    
  }

//gun speed
if(fillcolor1 === "magenta") {
  
  s = 5
  
}
  
else if(fillcolor2 === "magenta") {
  
  s = 15
  
}
 
else if(fillcolor3 === "magenta") {
  
  s = 25
  
}
 
else if(fillcolor4 === "magenta") {
  
  s = 50
  
}
  
//gem speed
if(fillcolor5 === "magenta") {
   
   c = 0.5
   
   }
 
else if(fillcolor6 === "magenta") {
   
   c = 1
   
   }
  
else if(fillcolor7 === "magenta") {
   
   c = 2
   
   }
 
else if(fillcolor8 === "magenta") {
   
   c = 5
   
   }
  
}
 
function maingame() {
  
  //track
  if(true) {
    
  background(150,150,150)
    
  //rails
  if(true) {
    
  fill("lightgrey")
  rect(160,0,80,20)
  rect(160,60,80,20)
  rect(160,120,80,20)
  rect(160,180,80,20)
  rect(160,240,80,20)
  rect(160,300,80,20)
  rect(160,360,80,20)
  rect(160,420,80,20)
  
  rect(270,460,20,80)
  rect(330,460,20,80)

  push()
  
  translate(0,0)
  rotate(-0.785)
    
  rect(-20,594,20,85)
  rect(40,594,20,85)
  rect(100,594,20,85)
  rect(160,594,20,85)
  rect(220,594,20,85)
  
  pop()
  
  rect(710,180,20,80)
  rect(770,180,20,80)
  
  rect(810,280,80,20)
  rect(810,340,80,20)
  rect(810,400,80,20)
  rect(810,460,80,20)
  rect(810,520,80,20)
  rect(810,580,80,20)
  rect(810,640,80,20)
  rect(810,700,80,20)
  
  //corner rails
  quad(142,540,162,559,260,460,240,440)
  quad(439,539,419,559,360,460,380,441)
  quad(650,190,630,210,670,290,690,270)
  quad(790,260,800,290,909,180,890,161)
  
  }
    
  //track
  if(true) {
  noStroke()
    
  fill(190,142,102)
  rect(140,0,20,550)
  rect(240,0,20,450)
  rect(140,540,280,20)
  rect(240,440,140,20)
  rect(660,160,230,20)
  rect(700,260,90,20)
  quad(380,440,380,460,660,180,660,160)
  quad(420,540,420,560,700,280,700,260)
  rect(890,160,20,540)
  rect(790,260,20,440)
  
  strokeWeight(0.7)
  stroke(1)
  
  //track lines
  line(140,0,140,560)
  line(160,0,160,540)
  line(240,0,240,460)
  line(260,0,260,440)
  
  line(140,560,420,560)
  line(160,540,420,540)
  line(240,460,380,460)
  line(260,440,380,440) 

  line(380,440,660,160)
  line(380,460,660,180)
  line(420,540,700,260)
  line(420,560,700,280)
    
  line(660,160,910,160)
  line(660,180,890,180)
  line(700,260,810,260)
  line(700,280,790,280)
    
  line(910,160,910,700)
  line(890,180,890,700)
  line(810,260,810,700)
  line(790,280,790,700)
  
  }
    
  }  
  
  //gems
  if(true) {
  
  if(!T2){
    
  fill(ColorFill1)
  rect(x2,35,50,30)
  
  }
   
  if(!T3){
    
  fill(ColorFill1)
  rect(x3,635,50,30)
  
  }
  
  if(!T4){
    
  fill(ColorFill1)
  rect(60,y2,30,50)
  
  }
   
  if(!T5){
    
  fill(ColorFill1)
  rect(965,y3,30,50)
  
  }
  
  if(!T6){
    
  fill(ColorFill1)
  quad(x4,y4,x4-20,y4+20,x4+15,y4+55,x4+35,y4+35)
  
  }
     
  if(!T7){
   
  fill(ColorFill1)
  quad(x5,y5,x5-20,y5+20,x5+15,y5+55,x5+35,y5+35)
  
  }
  
  a+=0.05
  b+=0.05
  
}
  
  //minecart
  if(true) {
    
  fill("lightgray") 
  
  //cart
  if(!T1){
    
  rect(x1-40,y1-40,80,80)
  
  }
  
  //down
  if(x1 === 200 && y1 < 500) {
   
    T1 = false
    
    y1+=3
    
  }
  
  //right
  if(200 <= x1 && x1 <= 400 && y1 >= 500) {
    
    y1 = 500
    x1+=3
    
  }
  
  //up and right
  if(400 < x1 && x1 < 680) {
    
    T1 = true
    
    push()
    
    translate(x1,y1)
    rotate(-0.785)
    
    rect(-40,-43,85,85)
  
    pop()
   
    y1-=1.73
    x1+=1.73
    
  }
  
  //right
  if(118 < y1 && y1 < 222 && 300 < x1 && x1 < 850) {
     
    T1 = false
    
    y1 = 220
    x1+=3
     
  }
  
  //down
  if(220 <= y1 && y1 <= 750 && x1 >= 850) {
    
    x1 = 850
    y1+=3
    
  }

  //restart
  if(y1 > 740) {
    
   x1 = 200
   y1 = -40
    
  }
}
  
  //bullet
  if(true) {
    
  //gun
  fill("black")
  circle(x1,y1,30)
  
  push()
  
  translate(x1,y1)
  rotate(tempAng)
  fill("black")
  rect(0,-7,25,15)
    
  pop()
  
  //bullet
  ellipse(x6,y6,10,10)
    
  //bullet movement
  x6 = x1 + bx
  y6 = y1 + by
  
  bx += s*cos(ang)
  by += s*sin(ang)
   
var r = sqrt(pow(bx,2)+pow(by,2))  
    
  //return to gun
  if(r > 500) {
    if(x6 < 0 || x6 > 1050 || y6 < 0 || y6 > 700) {
     
     x6 = x1
     y6 = y1
     
     ang = tempAng
     
     bx = 0
     by = 0
     
    }
 }
  
  //gun movement
  if(keyIsPressed) {
    
    if (keyCode === RIGHT_ARROW) {
      tempAng+=0.08
    }
    if (keyCode === LEFT_ARROW) {
      tempAng-=0.08
    } 
    
   }
 
  }
  
  //hitboxes
  if(true) {
  
  //top
  if(x6 > x2 && x6 < x2+50 && y6 < 65 && y6 > 35) {
    
    T2 = true
    
  }
  
  //bottom
  if(x6 > x3 && x6 < x3+50 && y6 < 665 && y6 > 635) {
    
    T3 = true
    
  }

  //left
  if(x6 > 60 && x6 < 90 && y6 > y2 && y6 < y2+50) {
    
    T4 = true
    
  }

  //right
  if(x6 > 965 && x6 < 995 && y6 > y3 && y6 < y3+50) {
    
    T5 = true
    
  }
   
  //top diagonal
  if(x6 > x4 && x6 < x4+50 && y6 > y4 && y6 < y4+30) {
    
    T6 = true
    
  }

  //bottom diagonal
  if(x6 > x5 && x6 < x5+50 && y6 > y5 && y6 < y5+30) {
    
    T7 = true
    
  }
  
  }
  
  //score
  if(true) {
  
  fill("black")
  textSize(32)
  text("Time left:\n" + z + " seconds",800,50)
  
  if(T2 === true && T3 === true && T4 === true && T5 === true && T6 === true && T7 === true && screen === "maingame") {
    
   screen = "endscreen1" 
    
  }
    
  if(z === 0 && screen === "maingame") {
    
    screen = "endscreen2"
    
  }

    fill("black")
    rect(655,625,100,50)
    fill("pink")
    rect(650,620,100,50)
    
    fill("black")
    textSize(32)
    textAlign(CENTER)
    text("Quit",700,655)

  } 

}

function start() {
 
  noStroke()
  fill("purple")
  rect(0,0,1000,700)
  fill("white")
  rect(1000,0,50,700)
  strokeWeight(1)
  stroke(1)
  
  x1 = 200
  y1 = -40
  
  fill("black")
  rect(430,305,150,75)
  
  fill("pink")
  rect(425,300,150,75)
    
  fill("black")
  textSize(50)
  textAlign(CENTER)
  text("Play!",500,350)
    
  fill("black")
  textSize(100)
  textAlign(CENTER)
  text("Minecart Mayhem!",500,165)
  
  fill("pink")
  textSize(100)
  textAlign(CENTER)
  text("Minecart Mayhem!",495,160)
    
  fill("black")
  textSize(28)
  textAlign(CENTER)
  text("Instructions: \n \n You are in a minecart, riding through a cave! Use your automatic gun to shoot the gems. If you don't destroy all the gems before the timer runs out, you lose. Good luck! ",50,250,305)
  
  text("Controls: \n \n Hold the left and right arrow keys down to aim the gun.",650,250,300)
  
  textSize(24)
  text("Thank you to Anton, Maia, Liam (Maia's brother), Ms. Boyles, and anyone else who helped me on this game!",650,480,300)
  
  fill("black")
  rect(430,480,150,75)
  
  fill("pink")
  rect(425,475,150,75)
    
  fill("black")
  textSize(35)
  textAlign(CENTER)
  text("Options",500,525)
  
  T2 = false
  T3 = false
  T4 = false  
  T5 = false
  T6 = false
  T7 = false
  
}

function options() {
  
  noStroke()
  fill("purple")
  rect(0,0,1000,700)
  fill("white")
  rect(1000,0,50,700)
  strokeWeight(1)
  stroke(1)
  
  fill("black")
  rect(445,545,125,75)
  
  fill("pink")
  rect(440,540,125,75)
    
  fill("black")
  textSize(35)
  textAlign(CENTER)
  text("Back",500,590)
  
  //gun speed
  textSize(28)
  textAlign(CENTER)
  text("Bullet Speed: ",200,150)
  
  fill(fillcolor1)
  rect(325,100,75,75)
  fill(fillcolor2)
  rect(425,100,75,75)
  fill(fillcolor3)
  rect(525,100,75,75)
  fill(fillcolor4)
  rect(625,100,75,75)
  
  fill("black")
  textSize(18)
  text("Slow",362.5,85)
  text("Medium",462.5,85)
  text("Fast",562.5,85)
  text("Kachow",662.5,85)
  
  textSize(24)
  textAlign(LEFT)
  text("This option changes the speed of the bullet. The default option is medium.",100,240)
  
  //gem speed
  textSize(28)
  textAlign(CENTER)
  text("Gem Speed: ",200,375)
  
  fill(fillcolor5)
  rect(325,325,75,75)
  fill(fillcolor6)
  rect(425,325,75,75)
  fill(fillcolor7)
  rect(525,325,75,75)
  fill(fillcolor8)
  rect(625,325,75,75)
  
  fill("black")
  textSize(18)
  text("Slow",362.5,310)
  text("Medium",462.5,310)
  text("Fast",562.5,310)
  text("Kachow",662.5,310)
  
  textSize(24)
  textAlign(LEFT)
  text("This option changes the speed of the gems. The default option is medium.",100,465)
  
}

function endscreen1() {
  
  noStroke()
  fill("purple")
  rect(0,0,1000,700)
  fill("white")
  rect(1000,0,50,700)
  strokeWeight(1)
  stroke(1)
  
  fill("black")
  rect(355,455,300,75)
    
  fill("pink")
  rect(350,450,300,75)
    
  fill("black")
  textSize(50)
  textAlign(CENTER)
  text("Play Again!",500,500)
  
  fill("black")
  textSize(100)
  textAlign(CENTER)
  text("You Win!",505,355)
  
  fill("Gold")
  textSize(100)
  textAlign(CENTER)
  text("You Win!",500,350)
  
}

function endscreen2() {
  
  noStroke()
  fill("black")
  rect(0,0,1000,700)
  fill("white")
  rect(1000,0,50,700)
  strokeWeight(1)
  stroke(1)
  
  fill("red")
  rect(355,455,300,75)
    
  fill("pink")
  rect(350,450,300,75)
    
  fill("black")
  textSize(50)
  textAlign(CENTER)
  text("Play Again!",500,500) 
  
  fill("red")
  textSize(125)
  textAlign(CENTER)
  text("You Lose",500,350)
  
}

function mouseClicked() {
  
 if(mouseX > 425 && mouseX < 575 && mouseY > 300 && mouseY < 375 && screen === "start") {
   
   screen = "maingame"
   
 }
  
 else if(mouseX > 650 && mouseX < 750 && mouseY > 620 && mouseY < 670 && screen === "maingame") {
 
   screen = "start"
   
 }
  
 else if(mouseX > 350 && mouseX < 650 && mouseY > 450 && mouseY < 525 && screen === "endscreen1") {
   
   screen = "start"
   
 }
  
 else if(mouseX > 350 && mouseX < 650 && mouseY > 450 && mouseY < 525 && screen === "endscreen2") {
   
   screen = "start"
   
 }
 
 else if(mouseX > 425 && mouseX < 575 && mouseY > 475 && mouseY < 550 && screen === "start") {
   
   screen = "options"
   
 }
 
 else if(mouseX > 440 && mouseX < 565 && mouseY > 540 && mouseY < 615 && screen === "options") {
   
   screen = "start"
   
 }
 
 //bullet speed
 else if(mouseX > 325 && mouseX < 400 && mouseY > 100 && mouseY < 175 && screen === "options") {
   
   fillcolor1 = "magenta"
   fillcolor2 = "pink"
   fillcolor3 = "pink"
   fillcolor4 = "pink"
   
 }
  
 else if(mouseX > 425 && mouseX < 500 && mouseY > 100 && mouseY < 175 && screen === "options") {
   
   fillcolor1 = "pink"
   fillcolor2 = "magenta"
   fillcolor3 = "pink"
   fillcolor4 = "pink"
   
 }
  
 else if(mouseX > 525 && mouseX < 600 && mouseY > 100 && mouseY < 175 && screen === "options") {
   
   fillcolor1 = "pink"
   fillcolor2 = "pink"
   fillcolor3 = "magenta"
   fillcolor4 = "pink"
   
 }
  
 else if(mouseX > 625 && mouseX < 700 && mouseY > 100 && mouseY < 175 && screen === "options") {
   
   fillcolor1 = "pink"
   fillcolor2 = "pink"
   fillcolor3 = "pink"
   fillcolor4 = "magenta"

 }
  
 //gem speed
 else if(mouseX > 325 && mouseX < 400 && mouseY > 325 && mouseY < 400 && screen === "options") {
   
   fillcolor5 = "magenta"
   fillcolor6 = "pink"
   fillcolor7 = "pink"
   fillcolor8 = "pink"
   
 }
  
 else if(mouseX > 425 && mouseX < 500 && mouseY > 325 && mouseY < 400 && screen === "options") {
   
   fillcolor5 = "pink"
   fillcolor6 = "magenta"
   fillcolor7 = "pink"
   fillcolor8 = "pink"
   
 }
  
 else if(mouseX > 525 && mouseX < 600 && mouseY > 325 && mouseY < 400 && screen === "options") {
   
   fillcolor5 = "pink"
   fillcolor6 = "pink"
   fillcolor7 = "magenta"
   fillcolor8 = "pink"
   
 }
  
 else if(inside(mouseX, mouseY, 625, 325, 75, 75, screen == "options")) {
   
   fillcolor5 = "pink"
   fillcolor6 = "pink"
   fillcolor7 = "pink"
   fillcolor8 = "magenta"

 }

}

function increaseTime() {
  
  if(screen === "maingame") {
  
    z-=1
  
  }
   
  if(screen === "endscreen1" || screen === "endscreen2" || screen === "start") {
  
    z = 30
  
  }
  
}

function inside(mouse_x, mouse_y, x, y, x_size, y_size, condition) {
  
  if(mouse_x > x && mouse_x < x + x_size && mouse_y > y && mouse_y < y + y_size && condition) {
    return true
  } else {
    return false
  }
  
}

setInterval(increaseTime, 1000)