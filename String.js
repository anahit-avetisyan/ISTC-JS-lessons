       //task 1 convert string to Propper Case
    function y(param){
        var res = " ";
        var x = param.toLowerCase().split(" ")
        for(var i = 0; i < x.length; i++){
        res = res + x[i].substring(0,1).toUpperCase() + x[i].substring(1)+ " ";
        }
        return res;
        }
        console.log(y("i am anahit"));
       // Task 2 found the longest word
        function y(param){
            var x = param.split(" ");
            var word = x[0]
             for(var i = 1; i < x.length;i++){
             if(word.length < x[i].length ){
          word = x[i];
             }   
}
return  word;
}
 console.log(y("my name is Anahit")) ;       
 //Task 3 
 function y(param){
     var list = "AaEeUuIioO";
     var count = 0;
     for(var i = 0; i < param.length ; i++){
         if (list.indexOf(param[i])!==-1){
             count += 1;
         }
     }
 
     return count;
 }
 console.log(y("My name is Anahit"));