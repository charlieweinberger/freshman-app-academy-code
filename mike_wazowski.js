let x, y, scalar, degrees = 0

var colors = ['blue','red','green','orange','yellow']
var fillcolor

function setup() {
  createCanvas(800, 800);
  
  fillcolor=random(colors)
  
}

function draw() {
  background(225,225,225);

var littleMike = function(x,y,scalar) {
 
  noStroke()
  fill(fillcolor)
  ellipse(x,y,scalar*325,scalar*315)//mainbody
  ellipse(x,y-45*scalar,scalar*270,scalar*300)
  fill("white")
  ellipse(x+30*scalar,y+20*scalar,scalar*200,scalar*200)//teeth
  fill("black")
  quad(x-scalar*42,y+scalar*90,x+scalar*103,y+scalar*90,x+scalar*125,y+scalar*55,x-scalar*65,y+scalar*55)//mouth
  triangle(x+scalar*124,y+scalar*55,x+scalar*115,y+scalar*55,x+scalar*130,y+scalar*20)//top teeth
  triangle(x+scalar*120,y+scalar*55,x+scalar*96,y+scalar*55,x+scalar*108,y+scalar*30)
  triangle(x+scalar*96,y+scalar*55,x+scalar*72,y+scalar*55,x+scalar*84,y+scalar*35)
  triangle(x+scalar*72,y+scalar*55,x+scalar*48,y+scalar*55,x+scalar*60,y+scalar*35)
  triangle(x+scalar*48,y+scalar*55,x+scalar*24,y+scalar*55,x+scalar*36,y+scalar*38)
  triangle(x+scalar*24,y+scalar*55,x,y+scalar*55,x+scalar*12,y+scalar*38)
  triangle(x,y+scalar*55,x-scalar*24,y+scalar*55,x-scalar*12,y+scalar*35)
  triangle(x-scalar*24,y+scalar*55,x-scalar*48,y+scalar*55,x-scalar*36,y+scalar*35)
  triangle(x-scalar*48,y+scalar*55,x-scalar*64,y+scalar*55,x-scalar*60,y+scalar*30)
 
  triangle(x-scalar*24,y+scalar*90,x-scalar*42,y+scalar*90,x-scalar*32,y+scalar*102)//bottom teeth
  triangle(x,y+scalar*90,x-scalar*24,y+scalar*90,x-scalar*12,y+scalar*110)
  triangle(x+scalar*28,y+scalar*90,x,y+scalar*90,x+scalar*12,y+scalar*115)
  triangle(x+scalar*50,y+scalar*90,x+scalar*24,y+scalar*90,x+scalar*36,y+scalar*118)
  triangle(x+scalar*72,y+scalar*90,x+scalar*48,y+scalar*90,x+scalar*60,y+scalar*115)
  triangle(x+scalar*96,y+scalar*90,x+scalar*72,y+scalar*90,x+scalar*84,y+scalar*108)
 
  fill(fillcolor)//top lip
  ellipse(x+scalar*20,y-scalar*10,scalar*275,scalar*100)
 
  fill("green")//eyelid
  ellipse(x+scalar*18,y-scalar*75,scalar*140,scalar*170)
  fill("fillcolor")
  ellipse(x+scalar*23,y-scalar*70,scalar*140,scalar*170)
  fill("green")
  ellipse(x+scalar*27,y-scalar*50,scalar*140,scalar*170)
 
  fill("white")
 
  ellipse(x+scalar*35,y-scalar*55,scalar*135,scalar*160)//eye
  fill("darkcyan")
  ellipse(x+scalar*30,y-scalar*33,scalar*65,scalar*65)//iris
  fill("black")
  ellipse(x+scalar*30,y-scalar*33,scalar*40,scalar*40)//pupil
 
  fill("bisque")
  triangle(x-scalar*100,y-scalar*140,x-scalar*65,y-scalar*160,x-scalar*100,y-scalar*200)//horns
  triangle(x+scalar*100,y-scalar*140,x+scalar*65,y-scalar*160,x+scalar*100,y-scalar*200)
 
  fill(fillcolor)
  //limbs
  //arms
  quad(x+scalar*150,y,x+scalar*130,y-scalar*25,x+scalar*300,y-scalar*100,x+scalar*300,y-scalar*80)//right bicep
  quad(x-scalar*150,y+scalar*20,x-scalar*130,y-scalar*35,x-scalar*300,y+scalar*80,x-scalar*300,y+scalar*110)//left bicep
  quad(x+scalar*(320-abs(40*cos(degrees))),y-scalar*200,x+scalar*(340-abs(40*cos(degrees))),y-scalar*205,x+scalar*300,y-scalar*100,x+scalar*270,y-scalar*80)//right forearm
  quad(x-scalar*280,y+scalar*200,x-scalar*300,y+scalar*205,x-scalar*300,y+scalar*100,x-scalar*270,y+scalar*80)//left forearm
 
  //legs
  quad(x-scalar*90,y+scalar*280,x-scalar*110,y+scalar*260,x-scalar*105,y+scalar*120,x-scalar*60,y+scalar*140)//left thigh
  quad(x+scalar*90,y+scalar*260,x+scalar*110,y+scalar*240,x+scalar*105,y+scalar*120,x+scalar*60,y+scalar*140)//right thigh
  quad(x-scalar*80,y+scalar*250,x-scalar*110,y+scalar*260,x-scalar*70,y+scalar*350,x-scalar*50,y+scalar*350)//left calf
  quad(x+scalar*80,y+scalar*230,x+scalar*110,y+scalar*240,x+scalar*70,y+scalar*350,x+scalar*50,y+scalar*350)//right calf
 
  //feet
  ellipse(x-scalar*100,y+scalar*350,scalar*110,scalar*40)//left foot
  ellipse(x+scalar*100,y+scalar*350,scalar*110,scalar*40)//right foot
  //toes
  fill("bisque")
  triangle(x-scalar*80,y+scalar*370,x-scalar*100,y+scalar*350,x-scalar*130,y+scalar*380)//left toe nails
  triangle(x-scalar*100,y+scalar*370,x-scalar*120,y+scalar*350,x-scalar*155,y+scalar*375)
  triangle(x-scalar*120,y+scalar*370,x-scalar*140,y+scalar*350,x-scalar*170,y+scalar*370)
 
  triangle(x+scalar*80,y+scalar*370,x+scalar*100,y+scalar*350,x+scalar*130,y+scalar*380)//right toe nails
  triangle(x+scalar*100,y+scalar*370,x+scalar*120,y+scalar*350,x+scalar*155,y+scalar*375)
  triangle(x+scalar*120,y+scalar*370,x+scalar*140,y+scalar*350,x+scalar*170,y+scalar*370)
 
  //hands
  fill(fillcolor)
  ellipse(x+scalar*(330-40*abs(cos(degrees))),y-scalar*210,scalar*50,scalar*90)//right hand
  ellipse(x-scalar*290,y+scalar*200,scalar*40,scalar*100)//left hand
  fill(220,220,220)//!!CHANGE THIS COLOR TO THE SAME AS YOUR BACKGROUND!!
  ellipse(x-scalar*270,y+scalar*200,scalar*40,scalar*80)//left hand
 
  //fingers
  fill(fillcolor)
  quad(x-scalar*250,y+scalar*220,x-scalar*310,y+scalar*175,x-scalar*285,y+scalar*160,x-scalar*250,y+scalar*205)//thumb
  quad(x+scalar*(260-40*abs(cos(degrees))),y-scalar*220,x+scalar*(310-40*abs(cos(degrees))),y-scalar*205,x+scalar*(305-40*abs(cos(degrees))),y-scalar*190,x+scalar*(265-40*abs(cos(degrees))),y-scalar*205)//thumb
  fill("bisque")
  //left claws
  triangle(x-scalar*275,y+scalar*275,x-scalar*290,y+scalar*235,x-scalar*305,y+scalar*230)//claws
  triangle(x-scalar*290,y+scalar*275,x-scalar*290,y+scalar*235,x-scalar*305,y+scalar*230)
  quad(x-scalar*250,y+scalar*220,x-scalar*270,y+scalar*185,x-scalar*250,y+scalar*200,x-scalar*250,y+scalar*205)
  //right claws
  quad(x+scalar*(260-40*abs(cos(degrees))),y-scalar*230,x+scalar*(280-40*abs(cos(degrees))),y-scalar*195,x+scalar*(260-40*abs(cos(degrees))),y-scalar*210,x+scalar*(260-40*abs(cos(degrees))),y-scalar*215)
  triangle(x+scalar*(310-40*abs(cos(degrees))),y-scalar*265,x+scalar*(320-40*abs(cos(degrees))),y-scalar*245,x+scalar*(305-40*abs(cos(degrees))),y-scalar*230)
  triangle(x+scalar*(340-40*abs(cos(degrees))),y-scalar*275,x+scalar*(340-40*abs(cos(degrees))),y-scalar*245,x+scalar*(355-40*abs(cos(degrees))),y-scalar*230)
  triangle(x+scalar*(330-40*abs(cos(degrees))),y-scalar*275,x+scalar*(320-40*abs(cos(degrees))),y-scalar*245,x+scalar*(340-40*abs(cos(degrees))),y-scalar*245)
 
  degrees=degrees+0.05
 
  fill(0);
  textSize(scalar*38);
  textFont('Georgia');
  text('The Wazowski Commune', x-220*scalar, y+420*scalar);
  text('By Anton, Colors by Charlie', x-240*scalar, y+470*scalar);
}

littleMike(mouseX,mouseY,0.5) // (x coord, y coord, size)

  
}


function mouseClicked() {
  
 fillcolor = random(colors)
  
}