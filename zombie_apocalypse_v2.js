var randomArray = []

function randomNum(start, end, numoftimes) {
  randomArray.splice(0, randomArray.length)
  for (var i = 0; i < numoftimes; i++) {
    var thisrandom = random(start, end)
    randomArray.push(thisrandom)
  }
}

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
}

/*
You are surrounded by zombies that want to kill you. They can only move along the diagonals and strait lines. You have to kill them with what ever weapons you can find.

- tutorial at the beginning
  - arrows pointing to where things are
- you can replay tutorial

- use mouse to aim

- have inventory where you an hold guns
- use numbers to switch between weapons

- interesting terrain: 
  - snow (slows you down)
  - water (to swim away from zombies)
  - trees (to climb away from zombies)

- you can build buildings to protect you
- they take resources to place
- they take time to build
- press a button and stand near it, and you will build it.
- You need materials to build them

Types of buildings:
- wall (quarter ellipse) (defense)
- healing station (healing)
- turret (damage)
- poison station (damage)
- launchpad (defense)
- nuke (damage)

Resources to gather:
  - wood (destroy trees)
  - stone (go to quarry)
  - healing gem (in gem mine)
  - poison gem (in gem mine)
  - plutonium (...) (to build nuke)

- you need specific weapons to gather specific resources
  - axe for wood
  - pickaxe for stone
  - hammer for metal

- good UI
- good backstory and ending

Types of zombies:
- regular zombies
- fast zombies (faster, less damage)
- Giant zombies (bigger, slower, more damage)
- Cold zombies (immune to cold gun, not slowed down by cold)
- Flaming zombies (immune to fire gun)
- zombies with lots of range
- climbing zombies (immune to walls)
- zombies with shields (immune to regular guns/turret)
- Boss fights

Types of weapons:
- fists (short range, low damage)
- knife (short range, medium damage)
- pistol (not automatic, medium damage)
- minigun (fast firing rate, low damage)
- assault rifle
- shotgun (slow firing rate, high damage)
- freeze gun (freezes zombies for 5 seconds)
- fire gun (sets zombies on fire, deals damage over time to zombies)
- rocket launcher (really slow reload, splash damage)

Types of powerups:
- extra speed
- extra health
- extra damage to current item
- extra range to certain building
- freeze all zombies

- different gamemodes
  - survive the longest
  - defend a safe
  - most kills in a certain time
  
- leaderboards for each gamemode

*/

//zombies occupy a square space, so their size is the length of one side of the square. 
function Zombie(Zx, Zy, Zdiameter, Zspeed, Zdamage, Zhealth, Zimmune, Zrange) {

  this.Zx = Zx
  this.Zy = Zy
  this.Zdiameter = Zdiameter
  this.Zspeed = Zspeed
  this.Zdamage = Zdamage
  this.Zhealth = Zhealth
  this.Zimmune = Zimmune
  this.Zrange = Zrange
  this.Zcandamage = true

}

var zombietypes = ["normal", "fast", "giant", "cold", "fire", "range", "climbing", "boss"]

var powerups = ["speed", "health", "damage", "freeze", "fire"]

var aliveZ = []
var allZ = []

setTimeout(function() {
  newStage("normal", 2000, 100000)
}, 1)

function spawnZombies(type, number, time) {
  var spawnrate = time / number
  for (var i = 0; i < number; i++) {

    setTimeout(function() {

      randomNum(0, 770, 2)

      if (type === "normal") {
        var newZombie = new Zombie(randomArray[0], randomArray[1], 30, 1.5, 50, 100, "none", 60)
      } else if (type === "fast") {
        var newZombie = new Zombie(randomArray[0], randomArray[1], 30, 3, 50, 100, "none", 60)
      }

      allZ.push(newZombie)
      aliveZ.push(newZombie)
    }, spawnrate * i)

  }
}

var Zopposite
var Zadjacent
var Zhypotenuse
var Zang

var beforeZ = []
var afterZ = []

//Human variables
var Hx = 400
var Hy = 400

var Hdiameter = 30
var Hspeed = 3
var Hhealth = 500

//Weapon variables
function Weapon(Wx, Wy, Wdamage, Wmagsize, Wattacktimedif, Wreloadtime, Wspecialty, Wsplash, Wname) {

  this.Wx = Wx
  this.Wy = Wy
  this.Wdamage = Wdamage
  this.Wmagsize = Wmagsize
  this.Wattacktimedif = Wattacktimedif
  this.Wreloadtime = Wreloadtime
  this.Wspecialty = Wspecialty
  this.Wsplash = Wsplash
  this.Wname = Wname

}

// isNaN(variable) returns true is variable is a number

var Wchoosefrom = ["pistol", "pistol", "pistol", "knife", "knife", "knife", "minigun", "minigun", "ar", "ar", "shotgun", "freezegun", "flamethrower", "rocket"]

//the fists have a short range
var fists = new Weapon(Hx, Hy, 25, 1, 0, 100, "lessrange", false, "fists")

var Wonground = []
var Winventory = [fists]
var Wcurrent = Winventory[0]

function Wspawn() {
  //there is a chance a weapon will spawn. Once a weapon will spawn, it is decided (using odds) which weapon will spawn. This weapon spawns in a random x and y coordinate. When the player alks over the weapon and pressed a button, the gun will go into your inventory. You can press a button (e) to equip the gun, and a button (r) to reload it. You need ammo to reload it. 

  randomNum(0, Wchoosefrom.length - 1, 1)

  var Wchance = Math.round(randomArray[0])

  randomNum(30, 770, 2)

  if (Wchance <= 2) {
    var pistol = new Weapon(randomArray[0], randomArray[1], 25, 15, 1, 1500, "none", false, "pistol")
    Wonground.push(pistol)
  } else if (Wchance > 2 && Wchance <= 5) {
    //the knife has short range, and does splash damage
    var knife = new Weapon(randomArray[0], randomArray[1], 50, 1, 0, 750, "lessrange", true, "knife")
    Wonground.push(knife)
  } else if (Wchance > 5 && Wchance <= 7) {
    var minigun = new Weapon(randomArray[0], randomArray[1], 20, 3000, 20, 5000, "none", false, "minigun")
    Wonground.push(minigun)
  } else if (Wchance > 7 && Wchance <= 9) {
    var ar = new Weapon(randomArray[0], randomArray[1], 34, 30, 100, 2000, "none", false, "ar")
  } else if (Wchance === 10) {
    //the shotgun fires 5 shells, each doing 25 damage. The shells with vary in direction by a little.
    var shotgun = new Weapon(randomArray[0], randomArray[1], 25, 5, 750, 2500, "spread", false, "shotgun")
    Wonground.push(shotgun)
  } else if (Wchance === 11) {
    //the freeze gun freezes all enemies it hits for 5 seconds
    var freezegun = new Weapon(randomArray[0], randomArray[1], 0, 3, 500, 2000, "freeze", true, "freezegun")
    Wonground.push(freezegun)
  } else if (Wchance === 12) {
    //each flamethrower attack spews a flame of fire for 3 seconds, setting any enemies it hits on fire for 5 seconds. Each second, it deals 20 damage.
    var flamethrower = new Weapon(randomArray[0], randomArray[1], 20, 1, 0, 4000, "fire", true, "flamethrower")
    Wonground.push(flamethrower)
  } else if (Wchance === 13) {
    //the rocket launcher has a splash radius that blows up any zombies inside it. It can also deal damage to you.
    var rocket = new Weapon(randomArray[0], randomArray[1], 150, 1, 0, 5000, "none", true, "rocket")
    Wonground.push(rocket)
  } else {
    console.log("didn't run")
    console.log(Wchance)
  }

}

function Building(Bx, By, Bdiameter, Bname, Bbuildtime, Bresources, Bspecialty, Bhealth) {

  this.Bx = Bx
  this.By = By
  this.Bdiameter = Bdiameter
  this.Bname = Bname
  this.Bbuildtime = Bbuildtime
  this.Bresources = Bresources
  this.Bspecialty = Bspecialty
  this.Bhealth = Bhealth

}

var powerups = ["speed", "health", "damage", "range", "freeze", "fire"]

var stage = 0
var textsize = 30
var textX = 765
var textY = 50
var score = 0

var Wspawnswitch = true

var beforeW = []
var afterW = []

var bulletPos = false
var Wshoot = false
var bulletX
var bulletY

var Bpastdist
var bulletXdir
var bulletYdir

var beforeB = []
var afterB = []

var bulletarray = []
var dealdamage = true

function draw() {
  background("lightblue");
  noStroke();

  //spawn weapon
  if (Wspawnswitch) {
    setTimeout(Wspawn, 3000)
    setTimeout(Wspawn, 3000)
    setTimeout(Wspawn, 3000)
    Wspawnswitch = false
  }

  for (var m = 0; m < Wonground.length; m++) {

    //draws weapon
    fill("green")
    ellipse(Wonground[m].Wx, Wonground[m].Wy, 100)

    fill("black")
    textAlign(CENTER)
    textSize(20)
    text(Wonground[m].Wname, Wonground[m].Wx, Wonground[m].Wy + 5)

    //you can pick up weapon
    if ((dist(Wonground[m].Wx, Wonground[m].Wy, Hx, Hy)) < (Hdiameter / 2 + 50)) {
      beforeW = Wonground.slice(0, m)
      afterW = Wonground.slice(m + 1, Wonground.length)
      Winventory.push(Wonground[m])
      Wonground = beforeW.concat(afterW);
    }

  }

  //you
  fill("black")
  ellipse(Hx, Hy, Hdiameter)

  //your movement
  if (keyIsDown(65)) {
    Hx -= Hspeed;
  }
  if (keyIsDown(68)) {
    Hx += Hspeed
  }
  if (keyIsDown(87)) {
    Hy -= Hspeed;
  }
  if (keyIsDown(83)) {
    Hy += Hspeed;
  }

  //bounds to keep you on the canvas
  if (Hx < (Hdiameter / 2)) {
    Hx = (Hdiameter / 2)
  }
  if (Hx > (width - Hdiameter / 2)) {
    Hx = (width - Hdiameter / 2)
  }
  if (Hy < (Hdiameter / 2)) {
    Hy = (Hdiameter / 2)
  }
  if (Hy > (height - Hdiameter / 2)) {
    Hy = (height - Hdiameter / 2)
  }

  for (var i = 0; i < aliveZ.length; i++) {

    if (aliveZ.length != 0) {

      //draws zombies
      for (var j = 0; j < allZ.length; j++) {
        if (aliveZ[i] === allZ[j]) {
          fill("red")
          ellipse(aliveZ[i].Zx, aliveZ[i].Zy, aliveZ[i].Zdiameter)
          noFill()
          stroke("black")
          ellipse(aliveZ[i].Zx, aliveZ[i].Zy, aliveZ[i].Zrange)
          noStroke()
          if (aliveZ[i].Zhealth > 0) {
            fill("black")
            textAlign(CENTER)
            textSize(20)
            text(aliveZ[i].Zhealth, aliveZ[i].Zx, aliveZ[i].Zy - 50)
          }
        }
      }

      Zadjacent = dist(Hx, Hy, aliveZ[i].Zx, Hy)
      Zopposite = dist(aliveZ[i].Zx, aliveZ[i].Zy, aliveZ[i].Zx, Hy)
      Zhypotenuse = dist(Hx, Hy, aliveZ[i].Zx, aliveZ[i].Zy)

      Zang = asin(Zopposite / Zhypotenuse)

      if (Hx > aliveZ[i].Zx) {
        aliveZ[i].Zx += aliveZ[i].Zspeed * cos(Zang)
      }
      if (Hx < aliveZ[i].Zx) {
        aliveZ[i].Zx -= aliveZ[i].Zspeed * cos(Zang)
      }
      if (Hy > aliveZ[i].Zy) {
        aliveZ[i].Zy += aliveZ[i].Zspeed * sin(Zang)
      }
      if (Hy < aliveZ[i].Zy) {
        aliveZ[i].Zy -= aliveZ[i].Zspeed * sin(Zang)
      }

      //if a zombie dies, it removes the zombie from the array
      if (aliveZ[i].Zhealth <= 0) {
        beforeZ = aliveZ.slice(0, i)
        afterZ = aliveZ.slice(i + 1, aliveZ.length)
        aliveZ = beforeZ.concat(afterZ);
      }

    }

  }

  //text on right of screen
  fill("black")
  textAlign(RIGHT)
  textSize(textsize)
  text("Stage: " + stage, textX, textY)
  textSize(30)
  text("Score: " + score, 765, 100)
  text("Health: " + Hhealth, 765, 150)
  text("Weapon: " + Wcurrent.Wname, 765, 200)

  //text on bottom of screen  
  var inventorystring = ""
  for (var a = 0; a < Winventory.length; a++) {
    inventorystring += Winventory[a].Wname
    if (a != Winventory.length - 1) {
      inventorystring += ", "
    }
  }

  textAlign(LEFT)
  text("Inventory: " + inventorystring, 25, 765)

  //keeping the zombies from going into each other
  for (var k = 0; k < aliveZ.length; k++) {
    for (var l = 0; l < aliveZ.length; l++) {

      if (aliveZ[k] != aliveZ[l]) {
        if ((dist(aliveZ[k].Zx, aliveZ[k].Zy, aliveZ[l].Zx, aliveZ[l].Zy)) < ((aliveZ[k].Zdiameter / 2) + (aliveZ[l].Zdiameter / 2))) {

          if (aliveZ[k].Zx < aliveZ[l].Zx) {
            aliveZ[k].Zx -= aliveZ[k].Zspeed
            aliveZ[l].Zx += aliveZ[l].Zspeed
          }
          if (aliveZ[k].Zx > aliveZ[l].Zx) {
            aliveZ[k].Zx += aliveZ[k].Zspeed
            aliveZ[l].Zx -= aliveZ[l].Zspeed
          }
          if (aliveZ[k].Zy < aliveZ[l].Zy) {
            aliveZ[k].Zy -= aliveZ[k].Zspeed
            aliveZ[l].Zy += aliveZ[l].Zspeed
          }
          if (aliveZ[k].Zy > aliveZ[l].Zy) {
            aliveZ[k].Zy += aliveZ[k].Zspeed
            aliveZ[l].Zy -= aliveZ[l].Zspeed
          }

        }
      }

    }
  }

  var v1 = createVector(mouseX - Hx, mouseY - Hy);
  push();
  stroke("black")
  strokeWeight(1)
  translate(Hx, Hy);
  if ((Wcurrent.Wname != "fists") && (Wcurrent.Wname != "knife")) {
    line(0, 0, v1.x, v1.y);
  }
  if ((Wcurrent.Wname == "fists") || (Wcurrent.Wname == "knife")) {
    line(0, 0, v1.limit(50).x, v1.limit(50).y);
  }
  translate(-Hx, -Hy);
  pop();
  noStroke()

  var Bspeed = 10
  var Bopposite = dist(mouseX, mouseY, mouseX, Hy)
  var Bhypotenuse = dist(Hx, Hy, mouseX, mouseY)
  
  if (bulletPos) {

    bulletX = Hx
    bulletY = Hy

    var Bang = asin(Bopposite / Bhypotenuse)

    Bpastdist = dist(Hx, Hy, mouseX, mouseY)

    if (bulletX < mouseX) {
      bulletXdir = 1 * Bspeed * cos(Bang)
    }
    if (bulletX > mouseX) {
      bulletXdir = -1 * Bspeed * cos(Bang)
    }
    if (bulletY < mouseY) {
      bulletYdir = 1 * Bspeed * sin(Bang)
    }
    if (bulletY > mouseY) {
      bulletYdir = -1 * Bspeed * sin(Bang)
    }

    bulletarray.push({
      x: Hx,
      y: Hy,
      Xdir: bulletXdir,
      Ydir: bulletYdir
    })

    Wshoot = true
    bulletPos = false

  }
  
  if (Wshoot) {

    for (var m = 0; m < bulletarray.length; m++) {

      fill("orange")
      circle(bulletarray[m].x, bulletarray[m].y, 10)

      bulletarray[m].x += bulletarray[m].Xdir
      bulletarray[m].y += bulletarray[m].Ydir

      if (bulletarray[m].x < -50 || bulletarray[m].x > 850 || bulletarray[m].y < -50 || bulletarray[m].y > 850) {
        beforeB = bulletarray.slice(0, m)
        afterB = bulletarray.slice(m + 1, bulletarray.length)
        bulletarray = beforeB.concat(afterB);
      }

    }

  }

  for (var n = 0; n < bulletarray.length; n++) {
    dealdamage = true
    for (var o = 0; o < aliveZ.length; o++) {
      if (aliveZ.length != 0) {
        
        if((bulletarray[n].x > (aliveZ[o].Zx - 15)) && (bulletarray[n].x < (aliveZ[o].Zx + 15)) && (bulletarray[n].y > (aliveZ[o].Zy - 15)) && (bulletarray[n].y < (aliveZ[o].Zy + 15))) {
          
          if(dealdamage) {
            aliveZ[o].Zhealth-=Wcurrent.Wdamage
            dealdamage = false
          }
          
        }
        
      }
    }
  }

}

//making a new stage
function newStage(type, number, time) {
  setTimeout(function() {
    spawnZombies(type, number, time)
  }, 3000)

  stage++

  if (score != 0) {
    score += 50
  }

  textX = 475
  textY = 100
  textsize = 40

  setTimeout(function() {
    textX = 765;
    textY = 50;
    textsize = 30;
  }, 1000);

}

function mouseClicked() {
  if ((Wcurrent.Wname == "fists") || (Wcurrent.Wname == "pistol") || (Wcurrent.Wname == "knife") || (Wcurrent.Wname == "shotgun") || (Wcurrent.Wname == "freezegun") || (Wcurrent.Wname == "rocket")) {
    bulletPos = true
  }
}

function mouseDragged() {
  if ((Wcurrent.Wname == "minigun") || (Wcurrent.Wname == "ar") || (Wcurrent.Wname == "flamethrower")) {
    bulletPos = true
  }
}

//switches gun
function keyPressed() {
  for (var i = 0; i < 9; i++) {
    if (keyCode === (i + 49) && Winventory[i] != undefined) {
      Wcurrent = Winventory[i]
    }
  }
}