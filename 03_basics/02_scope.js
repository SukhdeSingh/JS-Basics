//var c = 323 -> var has Function scope (not block scope) 
//it ignores { } blocks like if, for, etc and it allows Re-declaration which can overwrite the values
let a = 433;

if (true) {
   let a = 324;
const b = 423;
 //console.log("Inner: ", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one() {
   const username = "Aman"

   function two() {
      const website = "Youtube"
      console.log(username);
   }
   //console.log(website);
   two();
}
 
//one();

if (true) {
   const username = "Aman"
   if(username === "Aman") {
      const website = " Youtube"
     // console.log(username + website);
   }
   //console.log(website); // can't be accessed outside the scope
}

//++++++++++++++++ interesting ++++++++++++++++
//these both are the way of declaring a function and the 
//2nd one is also called as expression


addone(5); //this is correct but,
function addone(num){
   return num + 1
}

addTwo(5); // this is incorrect b/c the way of declaration of function

const addTwo = function(num){
   return num + 2
}

