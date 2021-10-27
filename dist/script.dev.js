"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// //PSEUDO CODE HOSTILE ALIEN GAME
// //Set out HTML and CSS. ONLY 3 Divs!x
// //Make class of ship with properties= Ship name, total points x
// //Make objects of ship class eg. Defence Ship 1...Attack Ship 2...Mother Shipx
// // When you click on the 'Shoot!'button => calls function(or method) to randomly
// //select (or shoot) defence ship/ attack ship/ or Mother Ship.
// //Once ship has been selected, points deducted depending on ship type and
// //remaining points counter updated (innerHTML).
// //If remaining points= 0, then hide ship!
// //If all ships are hidden => alert game over!
// //Game over alert=> gives option to restart game.
var ship =
/*#__PURE__*/
function () {
  function ship(name, points, type) {
    _classCallCheck(this, ship);

    this._name = name;
    this._points = points;
    this._type = type;
  } //   //1. Make class of ship


  _createClass(ship, [{
    key: "createShip",
    //   //2. Method to create ship div in HTML
    value: function createShip() {
      //Single quotes mean literal string...
      //Syntax to autocreate a string that is populated by properties of the object. This allows
      //us to create infinite number of unique HTML object within limit of 150 lines of code.
      return '<div id="' + this.name + '" class="' + this.type + '">' + this.name + " <div>Remaining Points: <span id=" + this.name + "points>" + this.points + "</span></div></div>";
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "points",
    get: function get() {
      return this._points;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }]);

  return ship;
}(); // // //incremental loop


var y = 1;
var z = 1;
var ships = [];

for (var i = 0; i < 14; i++) {
  if (i === 0) {
    ships[i] = new ship("Mothership1", 100, "mothership");
    console.log(ships[i].createShip());
    document.getElementById("mothership").innerHTML += ships[i].createShip();
  } else if (i > 0 && i < 6) {
    ships[i] = new ship("Defenceship" + y, 80, "defenceship");
    document.getElementById("defenceship").innerHTML += ships[i].createShip();
    y++;
  } else {
    ships[i] = new ship("Attackship" + z, 45, "attackship");
    document.getElementById("attackship").innerHTML += ships[i].createShip();
    z++;
  }
}

console.log(ships);

function shoot() {
  //target random member of array
  var randomKey = Math.floor(Math.random() * ships.length); //.if mothership= 0 => hide all 'ships' and display gameover

  if (ships[randomKey].type === "mothership") {
    if (ships[randomKey]._points > 9) {
      ships[randomKey]._points = ships[randomKey].points - 9;
      console.log("New Points = " + ships[randomKey].points);
      document.getElementById("Mothership1points").innerHTML = ships[randomKey].points;
    } else {
      ships[randomKey]._points = 0;
      document.getElementById("Mothership1points").innerHTML = ships[randomKey].points;
      document.getElementById("ships").classList.add("hidden");
      document.getElementById("ships").classList.remove("visible");
      ships.splice(randomKey, 1); //Need to remove object from array ie. make ship disappear if = 0;
    }
  } else if (ships[randomKey].type === "defenceship") {
    if (ships[randomKey]._points > 10) {
      ships[randomKey]._points = ships[randomKey].points - 10;
      console.log("New Points = " + ships[randomKey].points);
      document.getElementById(ships[randomKey].name + "points").innerHTML = ships[randomKey].points;
    } else {
      ships[randomKey]._points = 0;
      document.getElementById(ships[randomKey].name + "points").innerHTML = ships[randomKey].points;
      document.getElementById("ships").classList.add("hidden");
      document.getElementById("ships").classList.remove("visible");
      ships.splice(randomKey, 1);
    }
  } else {
    if (ships[randomKey]._points > 12) {
      ships[randomKey]._points = ships[randomKey].points - 12;
      console.log("New Points = " + ships[randomKey].points);
      document.getElementById(ships[randomKey].name + "points").innerHTML = //Don't understand this bit! Where is this ID??
      ships[randomKey].points;
    } else {
      ships[randomKey]._points = 0;
      document.getElementById(ships[randomKey].name + "points").innerHTML = ships[randomKey].points;
      document.getElementById("ships").classList.add("hidden");
      document.getElementById("ships").classList.remove("visible");
      ships.splice(randomKey, 1);
    }
  }

  if (ships.length === 0 || ships[0].points === 0) {
    document.getElementById("overlay-gameover").style.display = "block";
    document.getElementById("ships").classList.add("hidden");
    document.getElementById("ships").classList.remove("visible");
  }
}

var randomHit = document.getElementById("game-btn");
console.log(randomHit);
randomHit.addEventListener("click", shoot);