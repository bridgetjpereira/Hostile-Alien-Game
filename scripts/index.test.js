import { Ship } from "./index.js";
import { TestWatcher } from "@jest/core";

describe("Tests to make sure ship object is created successfully", () => {
  describe("Test to make sure name is a string", () => {
    test("name is a string", () => {
      const ship = new Ship("mothership1", 80, "mothership");
      expect(typeof ship.name).toContain("string");
    });

    test("points is a number", () => {
      const ship = new Ship("mothership1", 80, "mothership");
      expect(typeof ship.points).toContain("number");
    });

    test("type is a string", () => {
      const ship = new Ship("mothership1", 80, "mothership");
      expect(typeof ship.name).toContain("string");
    });
  });
});

// import {randomKey} from './index.js';
// describe('randomKey', async assert => {
//   const start = 0;
//   const end = 14;
//   const numbers = Array.from({ length: 14 }, () => randomKey(start, end));
// assert({
//     given: 'start, end',
//     should: 'generate a random number greater than or equal to start',
//     actual: numbers.every(n => n >= start),
//     expected: true
//   });
// assert({
//     given: 'start, end',
//     should: 'generate a random number less than or equal to end',
//     actual: numbers.every(n => n <= end),
//     expected: true
//   });
// });
