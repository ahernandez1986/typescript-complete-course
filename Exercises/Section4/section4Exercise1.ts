console.log("Exercise 1 - Arrow functions"); 
const double: (val:number) => number  = (value:number) => value * 2;
console.log(double(10));
 
console.log("Exercise 2 - Default parameters");
const greet = (name: string = "Max") => {    
    console.log(`Hello, ${name}`);
};

greet();
greet("Anna");
 
console.log("Exercise 3 - Spread Operator");
let numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
 
console.log("Exercise 4 - Spread Operator");
let newArray: number[] = [55, 20];
newArray.push(...numbers);
console.log(newArray);
 
console.log("Exercise 5 - Destructuring Arrays");
let testResults: number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
 
console.log("Exercise 6 - Destructuring Objects");
let scientist = {firstName: "Will", experience: 12};
let {firstName, experience} = scientist;
console.log(firstName, experience);

console.log("Template Literals");
let studentName: string ='Alvaro Hernandez';
let messageTemplate=`Well it's done, thanks God it is.
Student: ${studentName}`;
console.log(messageTemplate);