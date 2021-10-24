//PSEUDO CODE HOSTILE ALIEN GAME
//Set out HTML and CSS. ONLY 3 Divs!
//Make class of ship with properties= Ship name, total points, remaining points
//Make objects of ship class eg. Defence Ship 1...Attack Ship 2...Mother Ship
//
// When you click on the 'Shoot!'button => calls function(or method) to randomly
//select (or shoot) defence ship/ attack ship/ or Mother Ship.
//Once ship has been selected, points deducted depending on ship type and
//remaining points counter updated (innerHTML).
//If remaining points= 0, then hide ship!
//If all ships are hidden => alert game over!
//Game over alert=> gives option to restart game.

// // so you have some object where the keys are your monsters
// var monsters = { ghost: "..", skeleton: "..", donald_trump: ".." };

// // grab your monsters above as an array
// var monsterArray = Object.keys(monsters);

// // pick your monster at random
// var randomKey = Math.floor(Math.random() * monsterArray.length);

// console.log("holy crap we found a " + monsterArray[randomKey]);

class ship {
  constructor(name, totalPoints, remainingPoints) {
    this._name = name;
    this._points = totalPoints;
    this._remainingPoints = remainingPoints;
  }

  get name() {
    return this._name;
  }
  get totalPoints() {
    return this._totalPoints;
  }
  get remainingPoints() {
    return this._remainingPoints;
  }
}

class mothership extends ship {
  constructor(name, points) {
    super(name, points);
  }
}

const mothership1 = new mothership("Mothership", 100);

class defenceship extends ship {
  constructor(name, points) {
    super(name, points);
  }
}

const defenceship1 = new defenceship("Defenceship 1", 80);

class attackship extends ship {
  constructor(name, points) {
    super(name, points);
  }
}

const attackship1 = new attackship("Attackship 1", 45);
// methodUpdateMotherRemainingPoints();
//if Mothership is hit
// {return this._points -9;
//if all other ships are hit, hide mothership and update remaining points
//to 0
// }

// methodUpdateDefenceRemainingPoints();
//if defenseship is hit, return this._points -10;
// {
// }

// methodUpdateAttackRemainingPoints();
//if attackship is hit, return this._points -12.
// {
// }

//function startGame()

//function gameOver()

//function destroyShips()
//if remainingPoints== 0; hide ship
//if all remainingPoints === 0; hide mothership and alert game over.
