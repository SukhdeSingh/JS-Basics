// falsey values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//except these all are truthy values
// truthy values
// "0", 'false', " ",[], {}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 33
// ?? is specially made for null and undeined values

console.log(val1);

// Ternairy Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");