"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// A couple of the fundamental concept of pure functions are:
// 1. A pure function must only operate on the input it is given and nothing else.
// 2. That function must return the output of that operation.
// 3. No side effect.
// export const getName = (name,age) =>{
//     return `${name}, ${age} years old.`
// };
// export const getName = (name,age) =>{
//     return `${name}, ${age} years old.`
// };
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


var ships = [];

for (var i = 0; i < 1; i++) {
  if (i === 0) {
    ships[i] = new ship("Mothership1", 100, "mothership");
    console.log(ships[i].createShip());
  }
} //     document.getElementById("mothership").innerHTML += ships[i].createShip();
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