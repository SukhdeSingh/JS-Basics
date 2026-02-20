const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key}  is shortcut  for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming) {
//    console.log(programming[key]);
// }

//some inbuilt functions
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
     {
        languageName: "java",
        languageFileName: "java"
    },
     {
        languageName: "python",
        languageFileName: "py"
    },
     {
        languageName: "c++",
        languageFileName: "cpp"
    },
]
//this is how we can access the value from a array of objects
myCoding.forEach((item) => {
    console.log(item.languageName);
});