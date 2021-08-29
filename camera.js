//variables
if (true) {

  var capture
  var poseNet
  var poses = []

  var pixelated
  var pixelatedbutton
  
  var pixelatescreen = false
  var switchpixelated = true
  
  var spaghetto
  var meatball
  var spaghettiHair
  
  var showSpaghetti = false
  var switchSpaghetti = true

  var buttonfilter1
  var buttonfilter2
  var buttonfilter3
  var buttonfilter4

  var applyfilter1 = false
  var applyfilter2 = false
  var applyfilter3 = false
  var applyfilter4 = false

  var switch1 = true
  var switch2 = true
  var switch3 = true
  var switch4 = true

  var fillColor = "black"

  var colorred
  var colororange
  var coloryellow
  var colorgreen
  var colorblue
  var colorpurple
  var colorwhite
  var colorblack

}

function setup() {
  createCanvas(600, 480)
  noStroke()

  //sprites
  if (true) {

    spaghetto = loadImage('Spaghetto.png');
    spaghettiHair = loadImage('SpaghettiHair.png');
    meatball = loadImage('Meatball.png');

  }

  //camera
  if (true) {

    capture = createCapture(VIDEO)
    capture.hide()

    poseNet = new ml5.poseNet(capture, function modelReady() {})

    poseNet.on('pose', function(results) {
      poses = results
    })

  }

  //buttons & sliders
  if (true) {
    
    buttonfilter1 = createButton("Posterize")
    buttonfilter1.position(620, 10)
    buttonfilter1.style('background-color', 'pink')
    buttonfilter1.style('font-size', '15px')
    buttonfilter1.mousePressed(runfilter1)

    buttonfilter2 = createButton("Invert")
    buttonfilter2.position(620, 40)
    buttonfilter2.style('background-color', 'pink')
    buttonfilter2.style('font-size', '15px')
    buttonfilter2.mousePressed(runfilter2)

    buttonfilter3 = createButton("Gray")
    buttonfilter3.position(620, 70)
    buttonfilter3.style('background-color', 'pink')
    buttonfilter3.style('font-size', '15px')
    buttonfilter3.mousePressed(runfilter3)

    buttonfilter4 = createButton("Threshold")
    buttonfilter4.position(620, 100)
    buttonfilter4.style('background-color', 'pink')
    buttonfilter4.style('font-size', '15px')
    buttonfilter4.mousePressed(runfilter4)

    clearbutton = createButton("Clear")
    clearbutton.position(620, 160)
    clearbutton.style('background-color', 'lightgreen')
    clearbutton.style('font-size', '15px')
    clearbutton.mousePressed(clearfield)

    spaghettibutton = createButton("Spaghetti Filter")
    spaghettibutton.position(620, 220)
    spaghettibutton.style('background-color', 'yellow')
    spaghettibutton.style('font-size', '15px')
    spaghettibutton.mousePressed(spaghettifilter)

    pixelatebutton = createButton("Pixelate")
    pixelatebutton.position(620, 280)
    pixelatebutton.style('background-color', 'lightblue')
    pixelatebutton.style('font-size', '15px')
    pixelatebutton.mousePressed(pixelatedon)
    
    pixelated = createSlider(3, 50, 50);
    pixelated.position(620, 310);
    pixelated.style('width', '80px');
    
    colorred = createButton("Red")
    colorred.position(20, 490)
    colorred.style('background-color', 'Orange')
    colorred.style('font-size', '15px')
    colorred.mousePressed(changeRed)

    colororange = createButton("Orange")
    colororange.position(72.5, 490)
    colororange.style('background-color', 'Orange')
    colororange.style('font-size', '15px')
    colororange.mousePressed(changeOrange)

    coloryellow = createButton("Yellow")
    coloryellow.position(150, 490)
    coloryellow.style('background-color', 'Orange')
    coloryellow.style('font-size', '15px')
    coloryellow.mousePressed(changeYellow)

    colorgreen = createButton("Green")
    colorgreen.position(217.5, 490)
    colorgreen.style('background-color', 'Orange')
    colorgreen.style('font-size', '15px')
    colorgreen.mousePressed(changeGreen)

    colorblue = createButton("Blue")
    colorblue.position(285, 490)
    colorblue.style('background-color', 'Orange')
    colorblue.style('font-size', '15px')
    colorblue.mousePressed(changeBlue)

    colorpurple = createButton("Purple")
    colorpurple.position(340, 490)
    colorpurple.style('background-color', 'Orange')
    colorpurple.style('font-size', '15px')
    colorpurple.mousePressed(changePurple)

    colorwhite = createButton("White")
    colorwhite.position(407.5, 490)
    colorwhite.style('background-color', 'Orange')
    colorwhite.style('font-size', '15px')
    colorwhite.mousePressed(changeWhite)

    colorblack = createButton("Black")
    colorblack.position(472.5, 490)
    colorblack.style('background-color', 'Orange')
    colorblack.style('font-size', '15px')
    colorblack.mousePressed(changeBlack)

  }

}

var xarray = []
var yarray = []
var colorarray = []

function draw() {

  image(capture, 0, 0, capture.width, capture.height)
  capture.loadPixels()
  blockify()
  
  //filter buttons
  if (true) {

    if (applyfilter1 && switch1) {
      filter(POSTERIZE, 2)
    }
    if (applyfilter2 && switch2) {
      filter(INVERT)
    }
    if (applyfilter3 && switch3) {
      filter(GRAY)
    }
    if (applyfilter4 && switch4) {
      filter(THRESHOLD)
    }

    if (mouseIsPressed) {
      xarray.push(mouseX)
      yarray.push(mouseY)
      colorarray.push(fillColor)
    }

    for (var i = 0; i < xarray.length; i++) {

      fill(colorarray[i])
      ellipse(xarray[i], yarray[i], 20, 20)

    }

  }

  drawShapes()

}

function spaghettifilter() {
  showSpaghetti = switchSpaghetti
  switchSpaghetti = !switchSpaghetti
}

function drawShapes() {
  if (showSpaghetti) {
    for (var i = 0; i < poses.length; i++) {
      var currentPose = poses[i].pose
      for (var j = 0; j < poses[i].pose.keypoints.length; j++) {
        var keypoint = poses[i].pose.keypoints[j]
        
          var noseX = currentPose.keypoints[0].position.x
          var noseY = currentPose.keypoints[0].position.y
          var eyeX = currentPose.keypoints[1].position.x
          var eyeY = currentPose.keypoints[1].position.y
          var d = dist(noseX, noseY, eyeX, eyeY) / 100
          //console.log(d)
          
        if (keypoint.part === "nose" && keypoint.score > 0.2) {
          scale(0.35)
          image(spaghettiHair, 2.85714285714*(keypoint.position.x-100), 2.85714285714*(keypoint.position.y-200));
          
        }
        
        if (keypoint.part === "leftEye" && keypoint.score > 0.2) {
          scale(4)
          image(meatball, 0.71428571428*(keypoint.position.x-50), 0.71428571428*(keypoint.position.y-80));
        } 
        if (keypoint.part === "rightEye" && keypoint.score > 0.2) {
          image(meatball, 0.71428571428*(keypoint.position.x-70), 0.71428571428*(keypoint.position.y-75));
        }
      }
    }
  }
}

function runfilter1() {
  if (switch1) {
    applyfilter1 = true
  }
  switch1 = !switch1
}

function runfilter2() {
  if (switch2) {
    applyfilter2 = true
  }
  switch2 = !switch2
}

function runfilter3() {
  if (switch3) {
    applyfilter3 = true
  }
  switch3 = !switch3
}

function runfilter4() {
  if (switch4) {
    applyfilter4 = true
  }
  switch4 = !switch4
}

function clearfield() {
  xarray = []
  yarray = []
  colorarray = []
  applyfilter1 = false
  applyfilter2 = false
  applyfilter3 = false
  applyfilter4 = false
  switch1 = true
  switch2 = true
  switch3 = true
  switch4 = true
}

function pixelatedon() {
  pixelatescreen = switchpixelated
  switchpixelated = !switchpixelated
}

function fget(x, y) {
  var d = pixelDensity()
  var idx = 4 * ((y * d) * width * d + (x * d))
  var r = pixels[idx]
  var g = pixels[idx+1]
  var b = pixels[idx+2]
  var a = pixels[idx+3]
  return [r, g, b]
}

function blockify() {
  
  if(pixelatescreen) {
    loadPixels()
    
    for(var i = 0; i <= 600; i+=pixelated.value()){
      for(var j = 0; j <= 480; j+=pixelated.value()){
  
        fillcolor = fget(i,j)
        
        fill(fillcolor)
        rect(i,j,pixelated.value(),pixelated.value())
        
      }
    }
  
  }   
}

function changeRed() {
  fillColor = "red"
}

function changeOrange() {
  fillColor = "orange"
}

function changeYellow() {
  fillColor = "yellow"
}

function changeGreen() {
  fillColor = "green"
}

function changeBlue() {
  fillColor = "blue"
}

function changePurple() {
  fillColor = "purple"
}

function changeWhite() {
  fillColor = "white"
}

function changeBlack() {
  fillColor = "black"
}