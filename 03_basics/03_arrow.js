const user = {
    username: "Aman",
    price: 999,

    welcomeMessage: function() {
       // console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()

//console.log(this);//In node environment it gives empty object but in browser it gieve window object

// function Tea(){
//     console.log(this);
// }

// Tea();

// const chai = function () {
//     let username = "Sachin"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Aman"
    console.log(this.username);
}

//chai()

// arrow => function

//this is the basic arrow fxn, known as explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


//this is the implicit return arrow function
const addTwo = (num1, num2) =>   (num1 + num2);
// also declared as
const addingTwo = (num1, num2) => num1 + num2

console.log(addTwo(3, 5))