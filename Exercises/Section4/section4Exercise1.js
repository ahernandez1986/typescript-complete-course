"use strict";
console.log("Exercise 1 - Maybe use an Arrow Function?");
var double = function (value) { return value * 2; };
console.log(double(10));
console.log("Exercise 2 - If only we could provide some default values...");
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
console.log("Exercise 3 - Isn't there a shorter way to get all these Values?");
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
console.log("Exercise 4 - I have to think about Exercise 3 ...");
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
console.log("Exercise 5 - That's a well-constructed array.");
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
console.log("Exercise 6 - And a well-constructed object!");
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
var studentName = 'Alvaro Hernandez';
var messageTemplate = "Well it's done, thanks God it is.\nStudent: " + studentName;
console.log(messageTemplate);
//# sourceMappingURL=section4Exercise1.js.map