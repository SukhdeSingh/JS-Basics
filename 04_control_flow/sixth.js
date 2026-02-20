// some more methods in js

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  const newNums = myNumbers.map( (num) => num + 10);
// console.log(newNums);

//method chaining

// const newNums = myNumbers
//               .map((num) => num * 10)
//               .map((num) => num + 1)
//               .filter((num) => num >= 40)

//   console.log(newNums);        

  //reduce() method -> it is used to Reduce an array to a single value(number, string, object, etc)
  const array1 = [1, 2, 3, 4];

  //using simple approach
//   const myTotal = array1.reduce(function (acc, currval) {
// console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
//   }, 0)

//   console.log(myTotal)

  //0 + 1 + 2 + 3 + 4  => using arrow fxn
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  //console.log(sumWithInitial);

//example
const shoppingCart = [
    {
        itemName: "javascript course",
        price: 3423
    },
     {
        itemName: "cpp course",
        price: 13423
    },
     {
        itemName: "java course",
        price: 7423
    },
     {
        itemName: "python course",
        price: 3423
    }
]

 const priceToPay = shoppingCart.reduce((acc, item) => acc +  item.price, 0)

 console.log(priceToPay);