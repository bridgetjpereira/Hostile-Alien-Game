class ship {
  constructor(name, points, type) {
    this._name = name;
    this._points = points;
    this._type = type;
  }

  get name() {
    return this._name;
  }
  get points() {
    return this._points;
  }
  get type() {
    return this._type;
  }

  createShip() {
    return (
      '<div id="' +
      this.name +
      '" class="' +
      this.type +
      '">' +
      this.name +
      " <div>Remaining Points: <span id=" +
      this.name +
      "points>" +
      this.points +
      "</span></div></div>"
    );
  }
}

let y = 1;
let z = 1;

let ships = [];

for (let i = 0; i < 14; i++) {
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
  let randomKey = Math.floor(Math.random() * ships.length);
  if (ships[randomKey].type === "mothership") {
    if (ships[randomKey]._points > 9) {
      ships[randomKey]._points = ships[randomKey].points - 9;
      // console.log("New Points = " + ships[randomKey].points);
      document.getElementById("Mothership1points").innerHTML =
        ships[randomKey].points;
    } else {
      ships[randomKey]._points = 0 || ships.length === 0;
      document.getElementById("Mothership1points").innerHTML =
        ships[randomKey].points;
      document.getElementById("ships").classList.add("ships-hidden");
      document.getElementById("ships").classList.remove("ships");
      document.getElementById("game-btn").classList.add("game-btn-orange-hidden"); ///only works with this!
      document.getElementById("game-btn").classList.remove("game-btn-orange"); ///NOT WORKING!!
      document.getElementById("overlay-gameover").style.display = "block";
    }
  } else if (ships[randomKey].type === "defenceship") {
    if (ships[randomKey]._points > 10) {
      ships[randomKey]._points = ships[randomKey].points - 10;
      // console.log("New Points = " + ships[randomKey].points);
      document.getElementById(ships[randomKey].name + "points").innerHTML =
        ships[randomKey].points;
    } else {
      ships[randomKey]._points = 0;
      document.getElementById(ships[randomKey].name + "points").innerHTML =
        ships[randomKey].points;

      document
        .getElementById(ships[randomKey].name)
        .classList.remove("defenceship");
      document
        .getElementById(ships[randomKey].name)
        .classList.add("defenceship-hidden");
      ships.splice(randomKey, 1);
    }
  } else {
    if (ships[randomKey]._points > 12) {
      ships[randomKey]._points = ships[randomKey].points - 12;
      // console.log("New Points = " + ships[randomKey].points);
      document.getElementById(ships[randomKey].name + "points").innerHTML =
        ships[randomKey].points;
    } else {
      ships[randomKey]._points = 0;
      document.getElementById(ships[randomKey].name + "points").innerHTML =
        ships[randomKey]._points;
      document
        .getElementById(ships[randomKey].name)
        .classList.add("attackship-hidden");
      document
        .getElementById(ships[randomKey].name)
        .classList.remove("attackship");
      ships.splice(randomKey, 1);
    }
  }
}

const randomHit = document.getElementById("game-btn");
console.log(randomHit);
randomHit.addEventListener("click", shoot);

// if (ships.length === 0 || ships[0].points === 0) {
//   document.getElementById("ships").classList.add("ships-hidden"); ///only works with this!
//   document.getElementById("ships").classList.remove("ships");
//   document
//     .getElementById("button-container")
//     .classList.add("game-btn-hidden"); ///only works with this!
//   document.getElementById("button-container").classList.remove("game-btn");
//   document.getElementById("overlay-gameover").style.display = "block";
// }

// removeItemOnce = (ships, randomKey) => {
//   let index = ships.indexOf(ships[randomKey]);
//   if (index > -1) {
//     ships.splice(index, 1);
//   }
//   return ships;
// };

//if target.event
//.if mothership= 0 => hide all 'ships' and display gameover

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

//Single quotes mean literal string...
//Syntax to autocreate a string that is populated by properties of the object. This allows
//us to create infinite number of unique HTML object within limit of 150 lines of code.
