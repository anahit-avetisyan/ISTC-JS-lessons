//task 1:created a function with array and number
function array(param1,param2){
           
    if(Array.isArray(param1)==true && typeof param2 === "number" ){
        return param1.slice(0,param2) 
    }
    return "please input array and number";
}
var fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(array(fruits,5));
//task 2 
var arr = [7, 'a', 'a', 'a', 2, 7, 'a', 7, 'a', 2, 4, 9, 7]
var max=1;
var iteam;
var count=0;
for(var i=0;i<arr.length;i++){
 for(var j=i;j<arr.length;j++){
 if (arr[j]==arr[i]){
      count++;
      if(max<count){
          max=count;
          iteam=arr[i];
      }
 }

 }
 count=0
}
console.log(iteam,max)
//task 3 found the sum of array which numbers are integer
var number=[3,2.3,4.2,6,8,2,5]
;   
var mult= 1
var sum = 0;
for(i=0;i<number.length;i++){
if(typeof number[i] ==="number" && Number.isInteger(number[i])===true)
sum= sum+number[i],
mult= mult*number[i];
}
console.log(sum)
console.log(mult)
//Task 4 i tried to create new array and add unique numbers and sorted
points = [0, 1, 2, 22,3, 4, 5,4,5,5,3, 6, 7, 8, 9,12,22];
function duplicate(param){
var uniqeArray = []
for(var i=0;i<param.length;i++){
if(uniqeArray.indexOf(param[i])==-1){
uniqeArray.push(param[i])
}
}
return uniqeArray;
}

console.log(duplicate(points).sort(function(a,b){return a-b}))
//Task 5 Sorting an Array in Random Order
var points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
;

console.log(points.sort(function(a, b){

return a- Math.random()*points.length}))