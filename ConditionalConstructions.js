 // If,else and else if  statements: I present all that statements in one example
 var score = 65;//i take score 
 var info;// information about result
 if(score >=70 ){
     info = "good"
 }
else if (score < 70 && score > 50){
    info = "medium"
}
  else {  info = "bad"
  };
 console.log(info); //my score is 65 so it is medium score

 /*example with switch
  i like football very much,so i took footbal team and showed which Lega this team was belong to*/
 var team = "Manchester United";//it is Armenian Football Team
 var liga;
 switch (team) 
 {
 case "Real Madrid" :
 case "Barcelona":
 case "Atletiko Madrid":
    liga =  "LaLiga";
   break;
 case "Arsenal":
 case "Chelsea":
 case "Manchester United":
     liga = "Primier Liga";
   break;
 case "Juventus":
 case "Roma":
 case "Milan":
     liga =  "A seria";
   break;
 case "Pyunik" :
     liga =  "Armenian Team";
    break;
 default:
     liga = "other"
     break;
         
 }
 console.log(liga);
 //Loops for
 for (var k = 12; k>5; k--){
console.log(k); 
}
 for (var k = 12; k>5; k--){
 if (k == 8) {
     break;
     }
     console.log(k); 
}
for (var x = 12; x < 33; x ++) {
 if (x == 27) {
     continue;
 }
 console.log(x);
}  
var x= 7
while(x<12){
console.log(x);
x++;
}
function sum(x,y,z) {
console.log(x*y+z);

}
sum(2,15,4);
var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
text += person[x];
}
console.log(x);