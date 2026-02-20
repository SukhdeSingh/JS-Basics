const coding = ["js", "ruby", "java", "python", "cpp"];


//  const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//filter() -> This method is used to create a new array containing only the elements that pass a certain condition.
//it does not modify the original array.

//  const newNums = myNums.filter((num) => {
//      return num > 4;
// }) 
// console.log(newNums);


// using forEach method creatng array with some condition
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num);
    }
})

console.log(newNums);

