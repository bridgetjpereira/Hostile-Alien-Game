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

class ship {
  constructor(name, points, type) {
    this._name = name;
    this._points = points;
    this._type = type;
  }
  //   //1. Make class of ship
  get name() {
    return this._name;
  }
  get points() {
    return this._points;
  }
  get type() {
    return this._type;
  }

  //   //2. Method to create ship div in HTML
  createShip() {
    //Single quotes mean literal string...
    //Syntax to autocreate a string that is populated by properties of the object. This allows
    //us to create infinite number of unique HTML object within limit of 150 lines of code.
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

// // //incremental loop
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
  const randomKey = Math.floor(Math.random() * ships.length);

  //.if mothership= 0 => hide all 'ships' and display gameover

  if (ships[randomKey].type === "mothership") {
    if (ships[randomKey]._points > 9) {
      ships[randomKey]._points = ships[randomKey].points - 9;
      console.log("New Points = " + ships[randomKey].points);
      document.getElementById("Mothership1points").innerHTML =
        ships[randomKey].points;
    } else {
      ships[randomKey]._points = 0;
      document.getElementById("Mothership1points").innerHTML =
        ships[randomKey].points;
      document.getElementById("ships").classList.add("hidden");
      document.getElementById("ships").classList.remove("visible");
      ships.splice(randomKey, 1); //Need to remove object from array ie. make ship disappear if = 0;
    }
  } else if (ships[randomKey].type === "defenceship") {
    if (ships[randomKey]._points > 10) {
      ships[randomKey]._points = ships[randomKey].points - 10;
      console.log("New Points = " + ships[randomKey].points);
      document.getElementById(ships[randomKey].name + "points").innerHTML =
        ships[randomKey].points;
    } else {
      ships[randomKey]._points = 0;
      document.getElementById(ships[randomKey].name + "points").innerHTML =
        ships[randomKey].points;
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
      document.getElementById(ships[randomKey].name + "points").innerHTML =
        ships[randomKey].points;
      document.getElementById("ships").classList.add("hidden");
      document.getElementById("ships").classList.remove("visible");
      ships.splice(randomKey, 1);
    }
  }

  if (ships.length === 0 || ships[0].points === 0) {
    document.getElementById("overlay-gameover").style.display = "block";
    document.getElementById("ships").classList.add("hidden");
    document.getElementById("ships").classList.remove("visible");
    ships.splice(randomKey, 15);
  }
}

const randomHit = document.getElementById("game-btn");
console.log(randomHit);
randomHit.addEventListener("click", shoot);
