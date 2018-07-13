// Wes-Bos ES6 
// Date created 7-9-2018 
// created by : Mohamed Ibrahim 



// ------------ video 1 ------------var & let & const 
// //var is function scope so it can't be accessed outside it 

// function setWidth(){
//     var width= 200;
//     console.log(width);
// }
// setWidth();
// //thus you can't access the width here - it will print an error 
// //console.log(width);


// //if statement are block so var can leak to global  scope.
// var age = 20; 
// if(age>12){
//     var personage= age*10;
//     console.log("This perosn age is  : "+personage)
// }

// console.log(personage);

// //thus, we use let or const, because they are block scope, they won't leak to global scope 
// var age = 20; 
// if(age>12){
//     let personage1=age*12
//     const personage2= age*10;
//     console.log("This perosn age is  : "+personage1)
//     console.log("This perosn age is  : "+personage2)
// }
// //it will produce an error : not defined  in case of let or const
// //console.log(personage1);
// //console.log(personage2);


// ------------ video 2 ------------ let vs const 

const key ="abc123";
let points= 50; 
let winner= false;

// let can be declared once and then can be changed more than once 
//const can be declared and assigned its value once 
// thus, in const if you have an object, you can't change the whole structure of the object 
// you can only update its properties like age and name, take as a person you can update your age ,
//salary but you can't change who you are (Life is hard :D but we can only keep up changing few things ;)

const perosn={
    name:"ahmed",
    age:15
}

//you can use object. freeze to stop from updating that object's proprties 
const wes = Object.freeze(perosn);

    