//task 1: i wrote function which have shown that number was prime number or  composite number
        /* The prime numbers are the natural numbers greater than one that are not products of two
         smaller numbers.*/
         function primeNumber(num){
            if(num === 1)
            {
                return false;
            }
           else if(num === 2){
                return "prime number"
            }
            else
            {
            for(var i = 2; i < num; i++){
                if(num % i === 0){
                    return " composite number";
                }
        }
            return "prime number";
        }
            }  
          console.log(primeNumber(15));   
        
        //task 3:wrote function which had several parametrs and returnes and returned arguments as object
        function shop(meat,fruit,sweety,grocery,quantity){
            var market={
        partA:meat,
        partB:fruit,
        partC:sweety,
        partD:grocery,
        partG:quantity,
        }
        return market
            }
        console.log(shop("bison","apple","cake","source cream",100));
        
                //task 4 I wrote  function which returned square
                function result(number){
                    if(typeof number == "number"){
                        return number*number;
                    }
                     else{
                         return false}
        }
                console.log(result(3));
              //Task 2
                   var obj = {
                       Number: "number",
                       String: "string",
                       Boolean: "boolean",
                       Undefined: "undifined",
                       Null: "null",
                   };
                   function type(something){
                       for(var key in obj){
                           if(typeof something===obj[key]){
                           return obj[key]
                       }
                       else {
                           continue;
                   }
                   }
                   return false;
                   }
                  
                console.log(type(true)) ; 