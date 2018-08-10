console.log("Exercise 1 - Maybe use an Arrow Function?"); 
let double: (val:number) => number  = (value:number) => value * 2;
console.log(double(10));
 
console.log("Exercise 2 - If only we could provide some default values...");
let greet = (name: string = "Max") => {    
    console.log("Hello, " + name);
};

greet();
greet("Anna");
 
console.log("Exercise 3 - Isn't there a shorter way to get all these Values?");
let numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
 
console.log("Exercise 4 - I have to think about Exercise 3 ...");
let newArray: number[] = [55, 20];
newArray.push(...numbers);
console.log(newArray);
 
console.log("Exercise 5 - That's a well-constructed array.");
let testResults: number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
 
console.log("Exercise 6 - And a well-constructed object!");
let scientist = {firstName: "Will", experience: 12};
let {firstName, experience} = scientist;
console.log(firstName, experience);

let studentName: string ='Alvaro Hernandez';
let messageTemplate=`Well it's done, thanks God it is.
Student: ${studentName}`;
console.log(messageTemplate);