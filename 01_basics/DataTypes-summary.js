// Primitive data types

// 7 types : String, Number , Boolean, null, undefined, Symbol, 
// BigInt
// datatype of null is object
const score = 100

const id = Symbol('123') // this is how symbol is used. they are used to assign unique values 
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// Refernce / Non-Primitive DataType

//Array, Objects, Functions -> data type of all these non-primitive DataTypes is function

const heros = ["shaktiman", "naagraj", "doga"]; // array
let mObj = { // object
    name: "Aman",
    age: 22,
}


const myFunction = function(){
    console.log("Hello world");
}

