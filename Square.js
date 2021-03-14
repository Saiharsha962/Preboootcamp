Square of a number
----------------------------
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var Num1= userInput[0];
    var Num2= userInput[1];
    var Square =console.log(+Num1 * +Num2)
  //start-here
  //Your code goes here … replace the below line with your code logic 

   

  //end-here
});
    
 
