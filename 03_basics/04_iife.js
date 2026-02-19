// Immediately Invoked Function Expressions (IIFE)

//iife is used to prevent the pollution occurs by global scope 

(function chai(){
//named iife b/c this have name chai
    console.log(`DB CONNECTED`);
}) (); // here ()function is used to execute the function

( (name) => {

    console.log(`DB CONNECTED TWO ${name}`);
}) ('Aman')