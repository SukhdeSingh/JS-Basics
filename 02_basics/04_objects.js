// const tinderUser = new Object() -> This is how a singleton object is generated

const tinderUser = {} // This is how non-singleton object is generated

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser); 


//nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
           firstname: "Aman",
           lastname: "yadav"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.lastname) // This is how to access nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2)

const obj3  = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "aman@244gmail.com",
    },
    {
id: 2,
email: "rahul@34324gmail.com"
    },
    {
        id: 3,
        email: "akash@345gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "92345",
    courseInstructor: "hitesh"
}

// Destructuring of objects
const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);
