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

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.lastname)