function Saymyname()  {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

//Saymyname();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

let result = number1 + number2
return result;
}

 const result =  addTwoNumbers(4, 5);
 //console.log("Result: ", result );


 function loginUserMessage(username = "ram"){
    if(!undefined){
   console.log("Please enter a username");
   return;
    }
    return `${username} just logged in`

 }

//console.log(loginUserMessage("amit"));

//funtion using rest -> ... are rest operator and
//  use to pass data as an array
function calculateCartPrice(...num1){
    return num1;
}
//console.log(calculateCartPrice(200 , 443, 343));

//function as an object

const user = {
    username: "hitesh",
    price: 343,
}

//passing object into function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "sam",
    price: 435
});

//passing array into function
const myNewArray = [32, 232, 533, 334];

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([23, 25, 45, 32]));