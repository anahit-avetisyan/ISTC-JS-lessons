//task 1/2 i created calculator where i added <<+>>,<<->>,<<*>>,<</>> and persent Arithmetic Operators
        
function calculator(number1,operator,number2){

    switch (operator) {
            case "+":
            return    number1 + number2;
            case "-":
            return   number1 - number2;
            case "*":
            return  number1 * number2;
            case "/":
            return  number1 / number2;
            case "%":
            return  number1*number2/100;
        default:
            return "not mats";
    }
}
console.log(calculator(100,"%", 200));
      //task 3/ i tried to show the types  of parametrs of function
function shop(product4 , product5 , product6){
    return typeof product4 + typeof product5 + typeof product6;
}
console.log(shop( 13,"food", 1));

//task 4 Added conditions for present the result ,what would be when parametrs were numbers or string

function shop(product1 , product2 , product3){

if (typeof product1 == "number" && typeof product2 == "number" && typeof product3 == "number"){
    console.log(product1 + product2 + product3);
}
if(typeof product1 == "string" && typeof product2 == "string" && typeof product3 == "string"){
console.log(product1 + product2 + product3);
}
else{
console.log("conditions don't satisfy");

}
}
   shop("HI ","World ",":)");