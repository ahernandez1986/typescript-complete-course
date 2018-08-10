"use strict";
console.log("Exercise 1 - Arrow functions");
var double = function (value) { return value * 2; };
console.log(double(10));
console.log("Exercise 2 - Default parameters");
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
console.log("Exercise 3 - Spread Operator");
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
console.log("Exercise 4 - Spread Operator");
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
console.log("Exercise 5 - Destructuring Arrays");
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
console.log("Exercise 6 - Destructuring Objects");
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
console.log("Template Literals");
var studentName = 'Alvaro Hernandez';
var messageTemplate = "Well it's done, thanks God it is.\nStudent: " + studentName;
console.log(messageTemplate);
//# sourceMappingURL=section4Exercise1.js.map