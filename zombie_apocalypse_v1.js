// work on different weapons/bullets
// make more levels
// make different kinds of zombies
// make zombies be able to attack you
// work on buildings and armor (maybe need a materials class?)

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
- wall (defense)
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

- the shotgun fires 5 shells, each doing 25 damage. The shells with vary in direction by a little.
- the freeze gun freezes all enemies it hits for 5 seconds
- each flamethrower attack spews a flame of fire for 3 seconds, setting any enemies it hits on fire for 5 seconds. Each second, it deals 20 damage.
- the rocket launcher has a splash radius that blows up any zombies inside it. It can also deal damage to you.

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

// classes
function Zombie(name, x, y, size, speed, damage, health, immune, range) {

  this.name = name
  this.x = x
  this.y = y
  this.size = size
  this.speed = speed
  this.damage = damage
  this.health = health
  this.immune = immune
  this.range = range
  this.candamage = true

  this.drawAndMove = function(i, player) {
    
    if (this.health > 0) {
          
      fill("red")
      ellipse(this.x, this.y, this.size)
      noFill()

      stroke("black")
      ellipse(this.x, this.y, this.range)
      noStroke()
                      
      fill("black")
      textAlign(CENTER)
      textSize(20)
      text(this.health, this.x, this.y - 50)

      var zombieOpposite = dist(this.x, this.y, this.x, player.y)
      var zombieHypotenuse = dist(player.x, player.y, this.x, this.y)
      var zombieAngle = asin(zombieOpposite / zombieHypotenuse)

      if (this.x < player.x) {
        this.x += this.speed * cos(zombieAngle)
      }

      if (this.x > player.x) {
        this.x -= this.speed * cos(zombieAngle)
      }

      if (this.y < player.y) {
        this.y += this.speed * sin(zombieAngle)
      }

      if (this.y > player.y) {
        this.y -= this.speed * sin(zombieAngle)
      }
      
    } else {
      existingZombies.splice(i, 1)
    }
  
  }
  
  this.separate = function(otherZombie) {

    if (this != otherZombie) {
    
      var distance = dist(this.x, this.y, otherZombie.x, otherZombie.y)
      var avgSize = (this.size + otherZombie.size) / 2

      if (distance < avgSize) {

        if (this.x < otherZombie.x) {
          this.x -= this.speed
          otherZombie.x += otherZombie.speed
        }

        if (this.x > otherZombie.x) {
          this.x += this.speed
          otherZombie.x -= otherZombie.speed
        }

        if (this.y < otherZombie.y) {
          this.y -= this.speed
          otherZombie.y += otherZombie.speed
        }

        if (this.y > otherZombie.y) {
          this.y += this.speed
          otherZombie.y -= otherZombie.speed
        }

      }
      
    }
    
  }
  
}

function Player(name, x, y, size, speed, initialHealth, weapon, aimHelper) {
  
  this.name = name
  this.x = x
  this.y = y
  this.size = size
  this.speed = speed
  this.initialHealth = initialHealth
  this.aimHelper = aimHelper
  
  this.weapon = createWeapon(weapon, this.x, this.y)
  
  this.inventory = [this.weapon]
  this.diagonalSpeed = this.speed * 0.707106781
  this.health = this.initialHealth

  this.drawAndMove = function() {
    
    fill("black")
    ellipse(this.x, this.y, this.size)
    
    fill("black")
    textAlign(CENTER)
    textSize(15)
    text(this.name, this.x, this.y - this.size)
    
    var up    = keyIsDown(87)
    var down  = keyIsDown(83)
    var left  = keyIsDown(65)
    var right = keyIsDown(68)
        
    var upLeft    = up && left
    var upRight   = up && right
    var downLeft  = down && left
    var downRight = down && right
        
    if (upLeft) {
      this.x -= this.diagonalSpeed
      this.y -= this.diagonalSpeed
    } 
    else if (upRight) {
      this.x += this.diagonalSpeed
      this.y -= this.diagonalSpeed
    } 
    else if (downLeft) {
      this.x -= this.diagonalSpeed
      this.y += this.diagonalSpeed
    } 
    else if (downRight) {
      this.x += this.diagonalSpeed
      this.y += this.diagonalSpeed
    } 
    else if (up) {
      this.y -= this.speed
    } 
    else if (down) {
      this.y += this.speed
    } 
    else if (left) {
      this.x -= this.speed
    }
    else if (right) {
      this.x += this.speed
    }
    
    if (this.x < this.size / 2) {
      this.x = this.size / 2
    }
    else if (this.x > (width - this.size / 2)) {
      this.x = width - this.size / 2
    }
    else if (this.y < this.size / 2) {
      this.y = this.size / 2
    }
    else if (this.y > (height - this.size / 2)) {
      this.y = height - this.size / 2
    }
          
    var v1 = createVector(mouseX - p1.x, mouseY - p1.y)
  
    if (!this.aimHelper) {
      v1 = v1.limit(50)
    }

    stroke("black")
    strokeWeight(1)
    push()
    translate(p1.x, p1.y);  
    line(0, 0, v1.x, v1.y)
    translate(-p1.x, -p1.y);
    pop()
    noStroke()
    
  }
  
  this.pickup = function() {
    
    for (var weapon of existingWeapons){
      
      var distance = dist(weapon.x, weapon.y, this.x, this.y)
      
      if (weapon.location == 'ground' && distance <= 50 && !this.inventory.includes(weapon)) {
        
        weaponInInventory = false
        
        for (var weapon2 of existingWeapons) {
          if (weapon2.location == 'inventory' && weapon.name == weapon2.name) {
            weaponInInventory = true
          }
        }
        
        if (!weaponInInventory) {
          this.inventory.push(weapon)
          weapon.location = 'inventory'
        } else {
          weapon.location = 'nonexistent'
        }
      
      }
    
    }
  
  }
  
  this.heal = function() {}
  
}

function Weapon(name, x, y, damage, maxMagSize, attackDelay, reloadTime, ability) {

  this.name = name
  this.x = x
  this.y = y
  this.damage = damage
  this.maxMagSize = maxMagSize
  this.attackDelay = attackDelay
  this.reloadTime = reloadTime
  this.ability = ability

  this.magSize = this.maxMagSize
  this.location = 'nonexistent'
  
  this.draw = function() {
    
    if (this.location == 'ground') {
         
      fill("green")
      ellipse(this.x, this.y, 100)

      fill("black")
      textAlign(CENTER)
      textSize(20)
      text(this.name, this.x, this.y + 5)
      
    }
    
  }
    
  this.shoot = function() {}
  
  this.reload = function() {
    
    setTimeout(
      function() {this.magSize = this.maxMagSize},
      this.reloadTime
    )
    
  }
  
}

function Bullet(weapon) {
  
  this.weapon = weapon
  
  this.x = p1.x
  this.y = p1.y
  this.size = 10
  this.speed = 10
  this.spashRadius = 0
  
  // fitting the bullet
  var bulletAng = asin(dist(mouseX, mouseY, mouseX, this.y) / dist(this.x, this.y, mouseX, mouseY))
    
  if (this.x < mouseX) {
    this.xDir = 1 * this.speed * cos(bulletAng)
  }
  if (this.x > mouseX) {
    this.xDir = -1 * this.speed * cos(bulletAng)
  }
  if (this.y < mouseY) {
    this.yDir = 1 * this.speed * sin(bulletAng)
  }
  if (this.y > mouseY) {
    this.yDir = -1 * this.speed * sin(bulletAng)
  }
    
  existingBullets.push(this)
  fitBullet = false
  
  this.drawAndMove = function(i) {
    
    var XonScreen = -50 < this.x && this.x < 850
    var YonScreen = -50 < this.y && this.y < 850
    
    if (XonScreen && YonScreen) {
      
      fill("orange")
      circle(this.x, this.y, this.size)
      
      this.x += this.xDir
      this.y += this.yDir
      
    } else {
      existingBullets.splice(i, 1)
    }
    
  }
  
  this.attack = function() {
    
    for (var zombie of existingZombies) {
      
      var XinZombieX = zombie.x - 15 < this.x && this.x < zombie.x + 15
      var YinZombieY = zombie.y - 15 < this.y && this.y < zombie.y + 15
      
      if (XinZombieX && YinZombieY) {
        zombie.health -= this.damage
      }
      
    }
    
  }
  
}
  
function Building(name, x, y, size, buildtime, resources, specialty, health) {

  this.name = name
  this.x = x
  this.y = y
  this.size = size
  this.buildtime = buildtime
  this.resources = resources
  this.specialty = specialty
  this.health = health

}

function Armor(name, x, y) {
  
  this.name = name
  this.x = x
  this.y = y
  
  this.material = this.name.split(" ")[0]
  this.type = this.name.split(" ")[1]
  
}
 
// functions
function randomNum(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start
}

function spawnZombies(type, number, time) {
  var spawnrate = time / number
  for (var i = 0; i < number; i++) {

    setTimeout(function() {

      var randomX = randomNum(0, 800)
      var randomY = randomNum(0, 800)
      var newZombie

      if (type == "normal") {
        newZombie = new Zombie("normal", randomX, randomY, 30, 1.5, 50, 100, "none", 60)
      } else if (type == "fast") {
        newZombie = new Zombie("fast", randomX, randomY, 30, 3, 50, 100, "none", 60)
      }

      existingZombies.push(newZombie)
      
    }, spawnrate * i)

  }
}

function createWeapon(name, x, y) {
  
  if (name == "fists") {
    
    return new Weapon(name, x, y, 25, 1, 0, 100, "melee")
    
  } else if (name == "pistol") {
    
    return new Weapon(name, x, y, 25, 15, 1, 1500, "none")
    
  } else if (name == "knife") {
    
    return new Weapon(name, x, y, 50, 1, 0, 750, "melee")
    
  } else if (name == "minigun") {
    
    return new Weapon(name, x, y, 25, 3000, 20, 5000, "none")
    
  } else if (name == "ar") {
    
    return new Weapon(name, x, y, 50, 30, 100, 2000, "none")
    
  } else if (name == "shotgun") {
    
    return new Weapon(name, x, y, 25, 5, 750, 2500, "spread")
    
  } else if (name == "freezegun") {
    
    return new Weapon(name, x, y, 0, 3, 500, 2000, "freeze")
    
  } else if (name == "flamethrower") {

    return new Weapon(name, x, y, 25, 1, 0, 4000, "fire")
    
  } else if (name == "rocket") {
    
    return new Weapon(name, x, y, 150, 1, 0, 5000, "none")
    
  } else {
    
    return 'not a weapon'
    
  }

}
  
function spawnWeapon() {
  
  // there is a chance a weapon will spawn. Once a weapon will spawn, it is decided (using odds) which weapon will spawn. This weapon spawns in a random x and y coordinate. When the player alks over the weapon and pressed a button, the gun will go into your inventory. You can press a button (e) to equip the gun, and a button (r) to reload it. You need ammo to reload it. 

  var chance = randomNum(0, 13)
  var weaponName

  if (chance <= 2) {
    
    weaponName = weaponsList[1]
    
  } else if (chance > 2 && chance <= 5) {
  
    weaponName = weaponsList[2]
  
  } else if (chance > 5 && chance <= 7) {
  
    weaponName = weaponsList[3]
  
  } else if (chance > 7 && chance <= 9) {
  
    weaponName = weaponsList[4]
    
  } else if (chance == 10) {
    
    weaponName = weaponsList[5]
  
  } else if (chance == 11) {
    
    weaponName = weaponsList[6]
  
  } else if (chance == 12) {
    
    weaponName = weaponsList[7]
  
  } else if (chance == 13) {
    
    weaponName = weaponsList[8]
  
  }

  var randomX = randomNum(30, 770)
  var randomY = randomNum(30, 770)
  var weaponToSpawn = createWeapon(weaponName, randomX, randomY)
  weaponToSpawn.location = 'ground'
  existingWeapons.push(weaponToSpawn)
  
}

function display() {
  
  fill("black")
  textAlign(RIGHT)
  textSize(textsize)
  text("Stage: " + stage, textX, textY)
  textSize(30)
  text("Score: " + score, 765, 100)
  text("Health: " + p1.health, 765, 150)
  text("Weapon: " + p1.weapon.name, 765, 200)

  var inventorystring = ""
  for (var a = 0; a < p1.inventory.length; a++) {
    inventorystring += p1.inventory[a].name
    if (a != p1.inventory.length - 1) {
      inventorystring += ", "
    }
  }

  textAlign(LEFT)
  text("Inventory: " + inventorystring, 25, 765)
  
}

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

// variables
let fitBullet = false,
    spawnWeapons = true,
    aimHelper = true,
    
    p1 = new Player('Charlie', 400, 400, 30, 3, 500, "fists", aimHelper),
    
    existingZombies = [],
    existingWeapons = [],
    existingBullets = [],
    
    // zombietypes = ["normal", "fast", "giant", "cold", "fire", "range", "climbing", "boss"],
    // powerups = ["speed", "health", "damage", "freeze", "fire"],
    weaponsList = ["fists", "pistol", "knife", "minigun", "ar", "shotgun", "freezegun", "flamethrower", "rocket"],
    
    stage = 0,
    textsize = 30,
    textX = 765,
    textY = 50,
    score = 0,
    
    i

// spawning zombies
newStage("normal", 10, 100)
  
function draw() {
  background("lightblue");
  noStroke();

  if (spawnWeapons) {
    spawnWeapon()
    spawnWeapon()
    spawnWeapon()
    spawnWeapons = false
  }

  p1.drawAndMove()

  for (var weapon of existingWeapons) {
    weapon.draw()
  }
  
  for (i = 0; i < existingZombies.length; i++) {
    
    existingZombies[i].drawAndMove(i, p1)
    
    for (var zombie2 of existingZombies) {
      if (existingZombies[i] != undefined) {
        existingZombies[i].separate(zombie2)
      }
    }
    
  }
  
  display()
  
  fitBullet2 = mouseIsPressed && ["minigun", "ar", "flamethrower"].includes(p1.weapon.name)
  if (fitBullet || fitBullet2) {
    new Bullet()
  }
  
  for (i = 0; i < existingBullets.length; i++) {
    existingBullets[i].drawAndMove(i)
  }
  
  for (var bullet of existingBullets) {
    bullet.attack()
  }

}
  
function mouseClicked() {
  fitBullet = ["fists", "pistol", "knife", "shotgun", "freezegun", "rocket"].includes(p1.weapon.name)
}
  
function keyPressed() {
    
  for (var i = 0; i < p1.inventory.length; i++) {
    if (keyCode == i + 49) {
      p1.weapon = p1.inventory[i]
    }
  }
  
  // e = 69
  if (keyCode == 69) {
    p1.pickup()
  }
  
  // r = 82
  if (keyCode == 82) {
    p1.weapon.reload()
  }
  
  // h = 72
  if (keyCode == 72) {
    p1.heal()
  }
  
}