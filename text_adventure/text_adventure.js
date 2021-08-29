// note: assets (images) are not in replit yet.

document.getElementById("usercommand").addEventListener("keyup", runCommand);

var textarea = document.getElementById("adventuretext");

var rooms = []; // this is the list of rooms
var chest = []; // this is your inventory of things!

var game1again = false;
var game2again = false;
var runfavoragain = false;
var owelarry = 0;
var isdrunk = 0;
var opencloset = false;
var openphone = false;
var light = false;
var useflashdrive = false;
var usebat = false;
var status = true;

/***** Constructor functions *****/

textarea.innerHTML +=
  'You are a detective working for a well known, important company. You go on a "vacation" to the Nova Resort, a resort in the middle of a desert. Your company has sent you to investigate this resort, because they think something suspicious is going on. Be on the lookout for secret rooms and suspicious behavior, and gather as much information as possible and destory anything potentially harmful. </br></br>';

// ROOM object
function Room(name, description, n, s, e, w) {
  this.name = name;
  this.description = description;
  this.n = n;
  this.s = s;
  this.e = e;
  this.w = w;
  this.things = [];

  // this method displays a description of the room
  this.showDescription = function() {
    if (currentRoom.name == "closet") {
      if (opencloset == true) {
        textarea.innerHTML +=
          "You are in the " + this.name + ". " + this.description + "</br>";
      } else if (opencloset == false) {
      }
      scrollSmoothToBottom();
    } else {
      textarea.innerHTML +=
        "You are in the " + this.name + ". " + this.description + "</br>";
      scrollSmoothToBottom();
    }

    if (currentRoom.name == "laboratory" && light == false) {
      textarea.innerHTML +=
        "You cannot see into the laboratory, for it is pitch black. </br>";
    }

    if (this.n != null) {
      textarea.innerHTML += "To the north is the " + this.n + ". </br>";
    }
    if (this.s != null) {
      textarea.innerHTML += "To the south is the " + this.s + ". </br>";
    }
    if (this.e != null) {
      textarea.innerHTML += "To the east is the " + this.e + ". </br>";
    }
    if (this.w != null) {
      textarea.innerHTML += "To the west is the " + this.w + ". </br>";
    }

    this.showThings();
    scrollSmoothToBottom();
  };

  // this method adds a Thing object to the room's array of things
  this.addThing = function(thing) {
    this.things.push(thing);
  };

  // this method displays all of the Thing object that this room contains
  this.showThings = function() {
    var tempString = "";

    if (this.things.length == 1) {
      for (var t of this.things) {
        tempString += t.name + ", ";
      }
      tempString =
        "</br> There is a  " +
        tempString.substring(0, tempString.length - 2) +
        " in this room. </br>";
      textarea.innerHTML += tempString;
    } else if (this.things.length == 2) {
      for (var t of this.things) {
        tempString += t.name + " and a ";
      }
      tempString =
        "There is a  " +
        tempString.substring(0, tempString.length - 6) +
        " in this room. </br>";
      textarea.innerHTML += tempString;
    } else if (this.things.length == 0) {
      if (currentRoom.name == "closet" && opencloset == false) {
      } else
        textarea.innerHTML +=
          " </br> There are no items for you to take in this room.</br>";
    }

    scrollSmoothToBottom();
  };
}

function Thing(name, description, room, action) {
  this.name = name;
  this.description = description;
  this.room = room;
  this.action = action;

  this.showDescription = function() {
    textarea.innerHTML +=
      "The " + this.name + " is " + this.description + "</br>";
    this.showThings();
    scrollSmoothToBottom();
  };

  this.use = function() {
    if (this.room === currentRoom.name) {
      if (this.name == "shirt") {
      } else if (this.name == "key") {
        opencloset = true;
        currentRoom.addThing(
          new Thing(
            "flashlight",
            "A normal flashight, useful for illuminating a dark room or telling ghost stories.",
            "laboratory",
            "You can now see the laboratory. You are at a giant machine that resembles a portal."
          )
        );
        remove(chest, this);
        textarea.innerHTML += this.action + " </br>";
        currentRoom.showDescription();
        showInventory();
      } else if (this.name == "favor") {
        for (var a of chest) {
          if (a.name == "phone") {
            runfavoragain = true;
            openphone = true;
          }
        }
        if (runfavoragain) {
          remove(chest, this);
          showInventory();
          textarea.innerHTML += this.action + "</br>";
        } else {
          textarea.innerHTML +=
            " You cannot use your favor if you have nothing for Larry to hack.</br>";
        }
      } else if (this.name == "phone") {
        if (opencloset == true) {
          if (openphone == true) {
            remove(chest, this);
            showInventory();
            textarea.innerHTML += this.action + "</br>";
          } else if (openphone == false) {
            textarea.innerHTML +=
              "You cannot use the phone until you unlock it. </br>";
          }
        } else if (opencloset == false) {
          textarea.innerHTML += " You cannot use the phone in this room </br>";
        }
      } else if (this.name == "beer") {
        isdrunk += 1;
        showInventory();
        if (isdrunk != 2) {
          textarea.innerHTML += this.action + "</br>";
        }
        if (isdrunk == 2) {
          textarea.innerHTML +=
            " You are so drunk, you fall unconcious. While you are unconcious, you are robbed and beaten up. When you wake, you cannot move without feeling unbearable pain. You die shortly after. </br></br> You Lose. </br>";
        }
      } else if (this.name == "hat") {
        remove(chest, this);
        showInventory();
        textarea.innerHTML += this.action + "</br>";
      } else if (this.name == "flashlight") {
        light = true;
        remove(chest, this);
        showInventory();
        textarea.innerHTML += this.action + "</br>";
      } else if (this.name == "flashdrive") {
        if (light == true) {
          useflashdrive = true;
          remove(chest, this);
          showInventory();
          textarea.innerHTML += this.action + "</br>";
        } else {
          textarea.innerHTML +=
            "You cannot see, therefore you cannot do anything. </br>";
        }
      } else if (this.name == "bat") {
        if (light == true) {
          usebat = true;
          remove(chest, this);
          showInventory();
          textarea.innerHTML += this.action + "</br>";
        } else {
          textarea.innerHTML +=
            "You cannot see, therefore you cannot do anything. </br>";
        }
      }
    } else {
      textarea.innerHTML +=
        "You cannot use the " + this.name + " in this room. </br>";
    }

    scrollSmoothToBottom();
  };
}

/*** Initialize the rooms / game ***/
function makeRooms() {
  //make rooms

  var cartext = "This is your car, outside of the Nova Resort.";

  var car = new Room(
    "car",
    "This is your car, outside of the Nova Resort.",
    "lobby",
    null,
    null,
    null
  );

  var lobby = new Room(
    "lobby",
    "It is the lobby to the Nova Resort.",
    "casino",
    "car",
    null,
    null
  );

  var casino = new Room(
    "casino",
    "The money maker of the Nova Resort, the casino has many fun games. This room has 2 games you can play: game 1 and game 2.",
    "bar",
    "lobby",
    "closet",
    "hallway"
  );

  var bar = new Room("bar", "It is a normal bar.", null, "casino", null, null);

  var hallway = new Room(
    "hallway",
    "A regular hallway connecting the casino to the pool, with hotel rooms inbetween",
    null,
    "hotel room",
    "casino",
    "pool"
  );

  var hotelroom = new Room(
    "hotel room",
    "It is a normal hotel room.",
    "hallway",
    null,
    null,
    null
  );

  var pool = new Room(
    "pool",
    "A giant pool with many fun activities throughout the day.",
    "lost and found",
    null,
    "hallway",
    null
  );

  var lostandfound = new Room(
    "lost and found",
    "It is the place where the lost items go.",
    null,
    "pool",
    null,
    null
  );

  var closet = new Room(
    "closet",
    "It is a normal supply closet. You see a sign with words written in another language, and a finger pointing north.",
    null,
    null,
    null,
    "casino"
  );

  //things

  var flashdrive = new Thing(
    "flashdrive",
    "a flashdrive for anything you may need",
    "laboratory",
    "You plug the flashdrive into the master computer, downloading the program to be decoded later."
  );

  var shirt = new Thing(
    "shirt",
    "a new shirt, if you need it.",
    "hotel room",
    "You put on a new shirt."
  );

  var phone = new Thing(
    "phone",
    "a strange phone, different that all the rest, with an language unknown to man.",
    "closet",
    "You look at the map on the phone, and it shows a secret underground laboratory to the north."
  );

  var beer = new Thing(
    "beer",
    "a corona beer, possibly infected with the Coronavirus.",
    "bar",
    "You are now partially drunk. Be careful!"
  );

  var hat = new Thing(
    "hat",
    "a black baseball cap",
    "lost and found",
    "You now have a hat on your head."
  );

  var bat = new Thing(
    "bat",
    "a baseball bat, useful for playing baseball or destroying stuff.",
    "laboratory",
    "You swing the bat at the machine multiple times, damaging the portal beyond repair."
  );

  car.addThing(flashdrive);
  car.addThing(shirt);
  pool.addThing(phone);
  bar.addThing(beer);
  lostandfound.addThing(hat);
  lostandfound.addThing(bat);

  rooms.push(car);
  rooms.push(lobby);
  rooms.push(casino);
  rooms.push(bar);
  rooms.push(hallway);
  rooms.push(hotelroom);
  rooms.push(pool);
  rooms.push(lostandfound);
  rooms.push(closet);

  scrollSmoothToBottom();
}

/****** Game Interaction *******/

function runCommand(e) {
  if (e.keyCode === 13) {
    // checks if the "return" key has been pressed

    // gets the user's input and then sets text field to blank
    var userinput = document
      .getElementById("usercommand")
      .value.toLowerCase()
      .trim();
    document.getElementById("usercommand").value = "";

    // splits up the user's command
    var inputArray = userinput.split(" ");
    var firstWord = inputArray[0];
    if (inputArray.length > 1) {
      var nextWords = userinput
        .slice(userinput.indexOf(" "), userinput.length)
        .trim();
    } else {
      var nextWords = "";
    }

    showCommand(userinput);

    var laboratory = new Room(
      "laboratory",
      '"This is the secret laboratory of the Nova people, an evil alien species. We are going to destroy the earth!", says the sign at the entrance.',
      null,
      "closet",
      null,
      null
    );

    rooms.push(laboratory);

    if (useflashdrive == true && usebat == true && currentRoom == laboratory) {
      textarea.innerHTML +=
        "Good job! You destroyed their portal and stole their code, but the alarms go off. You must escape before they catch you! Hurry! </br>";
    }

    if (useflashdrive == true && currentRoom.name == "car") {
      textarea.innerHTML +=
        "Congratulations! You escaped the Nova Resort with valuable information, and destroyed their portal. They can no longer continue their work on the portal, and your team can continue your work in saftey. Good Job! </br> </br> You Win! </br>";
      scrollSmoothToBottom();
    }

    // show room description
    if (firstWord == "d" || firstWord == "description") {
      currentRoom.showDescription();
    }

    // go some direction
    else if (firstWord == "go") {
      var d = "x";
      if (nextWords === "s" || nextWords === "south") {
        d = "s";
      } else if (nextWords === "n" || nextWords === "north") {
        d = "n";
      } else if (nextWords === "e" || nextWords === "east") {
        d = "e";
      } else if (nextWords === "w" || nextWords === "west") {
        d = "w";
      }

      if (
        currentRoom.name == "closet" &&
        d == "n" &&
        opencloset == true &&
        openphone == true
      ) {
        currentRoom = laboratory;
        currentRoom.showDescription();
      }

      var result = findElementInArray(rooms, "name", currentRoom[d]);

      if (result != null) {
        if (
          d == "e" &&
          opencloset == false &&
          (currentRoom.name == "casino" || currentRoom.name == "closet")
        ) {
          textarea.innerHTML +=
            "The closet is locked. You cannot enter it without unlocking the door. </br>";
        }
        currentRoom = result;
        currentRoom.showDescription();
      } else if (currentRoom == laboratory) {
      } else {
        textarea.innerHTML += "You cannot go that way.</br>";
      }
    } else if (userinput == "things") {
      currentRoom.showThings();
      scrollSmoothToBottom();
    } else if (firstWord == "look" || firstWord == "l") {
      if (inputArray.length > 1) {
        scrollSmoothToBottom();
        var result = findElementInArray(currentRoom.things, "name", nextWords);
        if (result != null) {
          result.showDescription();
          scrollSmoothToBottom();
        } else {
          textarea.innerHTML += "Look at what?</br>";
          scrollSmoothToBottom();
        }
      } else {
        textarea.innerHTML += "Look at what?</br>";
        scrollSmoothToBottom();
      }
    } else if (firstWord == "take" || firstWord == "t") {
      if (inputArray.length > 1) {
        var result = findElementInArray(currentRoom.things, "name", nextWords);
        if (result != null && chest.length < 4) {
          chest.push(result);
          remove(currentRoom.things, result);
          showInventory();
          textarea.innerHTML +=
            "You have added the " + result.name + " to your inventory.</br>";
          scrollSmoothToBottom();
        } else if (result != null && chest.length >= 4) {
          textarea.innerHTML +=
            "Your inventory if too full to carry a " + result.name + " </br>";
        } else {
          textarea.innerHTML += "Take what?</br>";
          scrollSmoothToBottom();
        }
      } else {
        textarea.innerHTML += "Take what?</br>";
        scrollSmoothToBottom();
      }
    } else if (firstWord == "remove" || firstWord == "r") {
      if (inputArray.length > 1) {
        var result = findElementInArray(chest, "name", nextWords);
        if (result != null) {
          remove(chest, result);
          currentRoom.addThing(result);
          showInventory();
          textarea.innerHTML +=
            "You have removed the " +
            result.name +
            " from your inventory.</br>";
          scrollSmoothToBottom();
        } else {
          textarea.innerHTML +=
            "You cannot remove something from your inventory that is not currently in your inventory </br>";
          scrollSmoothToBottom();
        }
      } else {
        textarea.innerHTML +=
          "You cannot remove something from your inventory that is not currently in your inventory </br>";
        scrollSmoothToBottom();
      }
    } else if (firstWord == "use" || firstWord == "u") {
      if (inputArray.length > 1) {
        var result = findElementInArray(chest, "name", nextWords);
        if (result != null) {
          result.use();
        } else {
          textarea.innerHTML += "Use what?</br>";
          scrollSmoothToBottom();
        }
      } else {
        textarea.innerHTML += "Use what?</br>";
        scrollSmoothToBottom();
      }
    } else if (firstWord == "give" || firstWord == "g") {
      if (inputArray.length > 1) {
        var result = findElementInArray(chest, "name", nextWords);
        if (result != null) {
          remove(chest, result);
          owelarry = 0;
          showInventory();
          textarea.innerHTML +=
            "You gave the " +
            result.name +
            " to Larry, and he is pleased.</br>";
          scrollSmoothToBottom();
        } else {
          textarea.innerHTML +=
            "You cannot give something to Larry if it is not currently in your inventory </br>";
          scrollSmoothToBottom();
        }
      } else {
        textarea.innerHTML +=
          "You cannot give something to Larry if it is not currently in your inventory </br>";
        scrollSmoothToBottom();
      }
    } else if (firstWord == "play" || firstWord == "p") {
      if (inputArray.length > 1) {
        var number;
        if (nextWords == "1") {
          if (game1again == false) {
            if (currentRoom.name == "casino") {
              var result = Math.random();
              if (result <= 0.5) {
                number = 0;
              } else if (result > 0.5) {
                number = 1;
              }
              textarea.innerHTML += "The dice rolls, and... ";
              if (number === 0) {
                textarea.innerHTML += "you lost. Better luck next time! </br>";
                scrollSmoothToBottom();
              } else if (number === 1) {
                textarea.innerHTML +=
                  "You won! Congrats! You prize is a key. </br>";
                game1again = true;
                currentRoom.addThing(
                  new Thing(
                    "key",
                    "a key deemed 'useless' by its previous owner, who found it in the casino.",
                    "closet",
                    "The closet door is now unlocked."
                  )
                );
                currentRoom.showThings();
                scrollSmoothToBottom();
              }
            } else {
              textarea.innerHTML +=
                "You are not in the casino, so you cannot play this game. </br>";
              scrollSmoothToBottom();
            }
          } else {
            textarea.innerHTML +=
              "You have already beat this game. You cannot play it again. </br>";
            scrollSmoothToBottom();
          }
        } else if (nextWords == "2") {
          if (game2again == false) {
            if (currentRoom.name == "casino") {
              if (owelarry == 0) {
                textarea.innerHTML +=
                  "You step up to play Game 2, and you are up against a turtle named Larry. </br> Larry: Hey, bud. If you win this round, I'll owe you a favor. I'll hack anything you want, no charge. But if I win, you have to give me something. </br> The dice rolls, and... </br>";
                var result = Math.random();
                if (result <= 0.5) {
                  number = 0;
                } else if (result > 0.5) {
                  number = 1;
                }

                if (number == 0) {
                  textarea.innerHTML +=
                    "You lost. You now owe larry an item. Be careful what you give him, as you cannot get it back. </br>";
                  owelarry = 1;
                  scrollSmoothToBottom();
                } else if (number == 1) {
                  scrollSmoothToBottom();
                  textarea.innerHTML +=
                    "You won! Congrats! </br> </br> There is a favor for you in this room. </br>";
                  scrollSmoothToBottom();
                  currentRoom.addThing(
                    new Thing(
                      "favor",
                      "anything you want Larry to do, but ony if it is hacking something.",
                      "casino",
                      "Larry hacks into the phone, and it shows the true map of the resort."
                    )
                  );
                  scrollSmoothToBottom();
                  game2again = true;
                  this.showThings();
                  scrollSmoothToBottom();
                }
              } else {
                textarea.innerHTML +=
                  "You cannot play this game again until you pay off your debt with Larry. </br>";
                scrollSmoothToBottom();
              }
            } else {
              textarea.innerHTML +=
                "You are not in the casino, so you cannot play this game. </br>";
              scrollSmoothToBottom();
            }
          } else {
            textarea.innerHTML +=
              "You have already beat this game. You cannot play it again. </br>";
            scrollSmoothToBottom();
          }
          scrollSmoothToBottom();
        } else {
          textarea.innerHTML += "Play what? </br>";
          scrollSmoothToBottom();
        }
      } else {
        textarea.innerHTML += "Play what? </br>";
        scrollSmoothToBottom();
      }
    } else {
      textarea.innerHTML += "Can you repeat that? </br>";
      scrollSmoothToBottom();
    }
    scrollSmoothToBottom();
  }
}

/******* DO NOT TOUCH THE CODE BELOW THIS LINE **********/

// this initalizes your rooms and
// shows the description of your first room!
makeRooms();
var currentRoom = rooms[0];
currentRoom.showDescription();

/****** Helper functions *******/

function scrollSmoothToBottom() {
  var div = document.getElementById("adventuretext");
  $("#adventuretext").animate(
    {
      scrollTop: div.scrollHeight - div.clientHeight
    },
    100
  );
}

function remove(array, element) {
  var index = array.indexOf(element);
  array.splice(index, 1);
}

function findElementInArray(array, property, val) {
  return array.find(thing => thing[property] === val);
}

function showInventory() {
  var tempString = "<ul>";
  for (var i of chest) {
    tempString += "<li>" + i.name + "</li>";
  }
  tempString += "</ul>";
  document.getElementById("chesttext").innerHTML = tempString;
}

function showCommand(command) {
  textarea.innerHTML +=
    "<span class='commandtext'>>> " + command + "</span></br>";
  scrollSmoothToBottom();
}