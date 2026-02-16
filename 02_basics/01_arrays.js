// array

const myArr = [0, 1, 2, 4, 5];

const myArr2 = new Array(1, 2, 3, 4);
//console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

//console.log(myArr.includes(6))

//console.log(myArr);

const newArr = myArr.join() // .join method change the
//  typeof of array to string and jin the array

//console.log(myArr)
//console.log(typeof newArr);

// slice, splice in array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//slice is used to a portion of an array
//  without changing the original 

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 4);
console.log(myn2);//splice is used to remove, add, 
// or replace elments
console.log(myArr);

