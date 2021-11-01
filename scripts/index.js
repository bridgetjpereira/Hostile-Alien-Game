export class Ship {
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

let ships = [
  "Mothership1",
  "Defenceship1",
  "Defenceship2",
  "Defenceship3",
  "Defenceship4",
  "Defenceship5",
  "Attackship1",
  "Attackship2",
  "Attackship3",
  "Attackship4",
  "Attackship5",
  "Attackship6",
  "Attackship7",
  "Attackship8",
];
let randomKey = Math.floor(Math.random() * ships.length);
