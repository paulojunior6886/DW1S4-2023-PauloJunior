let number1;
let number2;
let operator;
let result;

function calculate(){

 if(operator === "+"){
    result = number1 + number2;
 }
 else if(operator === "-"){
    result = number1 - number2;
 }
 else if(operator === "*"){
    result = number1 * number2;
 }
 else if(operator === "/"){
    result = number1 / number2;
 }
 else{
    console.log("Invalid operator");
 }

 console.log("Result: ", result);
}

// Exemplo:

number1 = 5;
number2 = 10;
operator = "+";

calculate();