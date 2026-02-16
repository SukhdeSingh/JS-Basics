// singleton
//object.create

// object literals

// how to declare a symbol  object
const mySym = Symbol("key1")

const JsUser = {
    name: "Aman",
    [mySym]: "mykey1",//this is the syntax for declaring the symbol object
    age: 18,
    location: "Jaipur",
    email: "Aman@gmail.com",
    isLoggedIn: false,
}

//How to access objects
console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser[mySym]);

// JsUser.email = "hitesh@fsfs.com"
// Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



