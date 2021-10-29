// A couple of the fundamental concept of pure functions are:
// 1. A pure function must only operate on the input it is given and nothing else.
// 2. That function must return the output of that operation.
// 3. No side effect.

let ships = [];

for (let i = 0; i < 1; i++) {
  if (i === 0) {
    ships[i] = new ship("Mothership1", 100, "mothership");
    console.log(ships[i].createShip());
  }
}

//     document.getElementById("mothership").innerHTML += ships[i].createShip();
//   } else if (i > 0 && i < 6) {
//     ships[i] = new ship("Defenceship" + y, 80, "defenceship");
//     document.getElementById("defenceship").innerHTML += ships[i].createShip();
//     y++;
//   } else {
//     ships[i] = new ship("Attackship" + z, 45, "attackship");
//     document.getElementById("attackship").innerHTML += ships[i].createShip();
//     z++;
//   }
// }
// console.log(ships);

/class to determine type of triangle

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isValid() {
    const [s1, s2, s3] = this.sides;
    //const [t1, t2, t3]= this.type;
    const sidesArePositive = s1 > 0 && s2 > 0 && s3 > 0; ///const type includes mothership
    const validatesTriangleInequality = //has points >50 etc.
      s1 + s2 >= s3 && s1 + s3 >= s2 && s3 + s2 >= s1;
    return sidesArePositive && validatesTriangleInequality;
  }

  get isEquilateral() {
    //get isMothership()
    if (!this.isValid) { //if this isn't isValid => return false
      return false;
      //return false;
    }
    //const [t1, t2, t3] = this.type;
    const [s1, s2, s3] = this.sides;
    return s1 === s2 && s2 === s3 && s1 === s3;
    return
  }

  get isIsoceles() {
    if (!this.isValid) {
      return false;
    }
    const [s1, s2, s3] = this.sides;
    return s1 === s2 || s1 === s3 || s2 === s3;
  }

  get isScalene() {
    if (!this.isValid) {
      return false;
    }
    return !this.isIsoceles;
  }
}

















// export const getName = (name,age) =>{
//     return `${name}, ${age} years old.`
// };

// export const getName = (name,age) =>{
//     return `${name}, ${age} years old.`
// };

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

let ships = [];

for (let i = 0; i < 1; i++) {
  if (i === 0) {
    ships[i] = new ship("Mothership1", 100, "mothership");
    console.log(ships[i].createShip());
  }
}

//     document.getElementById("mothership").innerHTML += ships[i].createShip();
//   } else if (i > 0 && i < 6) {
//     ships[i] = new ship("Defenceship" + y, 80, "defenceship");
//     document.getElementById("defenceship").innerHTML += ships[i].createShip();
//     y++;
//   } else {
//     ships[i] = new ship("Attackship" + z, 45, "attackship");
//     document.getElementById("attackship").innerHTML += ships[i].createShip();
//     z++;
//   }
// }
// console.log(ships);


// # 1. Use '.toContain' when you want to check that an item is in an array.
// # 2 '.toContain' can also check whether a string is a substring of another string.
// test('the flavor list contains lime', () => {
//   expect(['lime', 'mangle']).toContain('lime');
// });

// test('the flavor list contains lime', () => {
//   expect("lime juice").toContain('lime');
// });
