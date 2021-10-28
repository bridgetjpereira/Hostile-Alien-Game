"use strict";

var _index = require("./index.js");

//import function from index.js file
//Assertion using it keyword
//First parameter is string that we expect function to return.
//Second call back function 
it("Should return the string 'Sam, 22 years old.'", function () {
  var output = (0, _index.getName)("Sam", 22);
  expect(output).toBe("Sam, 22 years old.");
});
it("Should return the name, followed by the age", function () {
  var output = (0, _index.getName)('Ollie', 27);
  expect(output).toBe('Ollie, 27 years old.');
});