// import { getName } from "./index.js";
// //import function from index.js file
// //Assertion using it keyword
// //First parameter is string that we expect function to return.
// //Second call back function 
// it("Should return the string 'Sam, 22 years old.'", () => {
//   const output = getName("Sam", 22);
//   expect(output).toBe("Sam, 22 years old.");
// });


// it ("Should return the name, followed by the age", () => {
//     const output = getName ('Ollie' , 27);
//     expect(output).toBe('Ollie, 27 years old.')
// })


// export class Ship {
//   constructor(type) {
//
//         this._type = type;
//   }

//   get isValid() {
//     const [mothership, defenceship, attackship] = this.type;
       
//     const sidesArePositive = s1 > 0 && s2 > 0 && s3 > 0;
//     const validatesTriangleInequality =
//       s1 + s2 >= s3 && s1 + s3 >= s2 && s3 + s2 >= s1;
//     return sidesArePositive && validatesTriangleInequality;
//   }

//   get isMothership() {
//     if (!this.isValid) {
//       return false;
//     }
//     const [s1, s2, s3] = this.sides;
//     return s1 === s2 && s2 === s3 && s1 === s3;
//   }

//   get isDefenceship() {
//     if (!this.isValid) {
//       return false;
//     }
//     const [s1, s2, s3] = this.sides;
//     return s1 === s2 || s1 === s3 || s2 === s3;
//   }

//   get isAttackship() {
//     if (!this.isValid) {
//       return false;
//     }
//     return !this.isIsoceles;
//   }
// }


describe("Tests to determine whether or not target object is mothership, defenceship or attackship", () => {
  describe("mothership", () => {
    test("counter is less than zero", () => {
      const ship = new ship("Mothership1", 100, "mothership");
      expect(ship.isMothership).toBe(true);
    });

//     test("no sides are equal", () => {
//       const triangle = new Triangle(5, 4, 6);
//       expect(triangle.isEquilateral).toBe(false);
//     });
//   });