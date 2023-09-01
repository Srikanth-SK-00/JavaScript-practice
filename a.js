// const readline = require('readline');

// // Create an interface for reading lines from the terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask the user for input
// rl.question('Please enter your name: ', function(userInput) {
//   // Display the user input
//   console.log('Hello, ' + userInput + '!');

//   // Close the interface
//   rl.close();
// });


// class Ctor
// {
//   constructor()
//   {
    
//   }
//   of()
//   {
//     return "eicnrfuhv";
//   }
// }
// const inst = new Ctor();
// // console.log(i); // true
// console.log(inst.of()); // true

// console.log(Object.getPrototypeOf(inst) ); // true
// function containsDigits(inputString) {

//   const digitPattern = /\d/;
  

//   return digitPattern.test(inputString);
// }




// const a="a1b2ghi3";
// console.log(a.split("").filter((am=>containsDigits(am) )))

// var reverse = function(x) {
//   let str=x.toString();
//   console.log(str)
//   str=str.split("").reverse().join("");
 
//   return parseInt(str)
  
// };

// console.log(reverse(123));



arr=[101,9,8];
arr.sort((a,b)=> a-b);
console.log(arr);