// Wes-Bos ES6 
// Date created 7-9-2018 
// created by : Mohamed Ibrahim 



// ------------ video 1 ------------ 01 - var Scoping Refresher
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


// ------------ video 2 ------------ 02 - let VS const

// const key ="abc123";
// let points= 50; 
// let winner= false;

// // let can be declared once and then can be changed more than once 
// //const can be declared and assigned its value once 
// // thus, in const if you have an object, you can't change the whole structure of the object 
// // you can only update its properties like age and name, take as a person you can update your age ,
// //salary but you can't change who you are (Life is hard :D but we can only keep up changing few things ;)

// const perosn={
//     name:"ahmed",
//     age:15
// }

// //you can use object. freeze to stop from updating that object's proprties 
// const wes = Object.freeze(perosn);




// ------------ video 3 ------------ 03 - let and const in the Real World

// //when we use var , if the variable name is already defined in the Dom it will be overwriterd,
// //thus we need to use IIFE to save it from leaking to global scope 
// (function () {
//     var name = "ahmed";
//     console.log(name);
// })();

// //thus in ES6, we don't need to use IIFE, because let & const are scope block 
// {
//     let name = "ali"
//     console.log(name);
// }

// //when it comes to loops if you have an iteration over a variable and in each loop you want a certain 
// //operation to be done in each. previousal, we needed IIFE, now we don't 

// //old example using IIFE

// for (var i = 0; i < 10; i++) {
//     ((j) => {
//         setTimeout(() => {
//             console.log("the number is #IIFE: " + j)
//         }, 1000);
//     })(i);
// }

// //new example using let 

// for (let index = 0; index < 10; index++) {

//     setTimeout(() => {
//         console.log("the number is #ES6 : " + index)
//     }, 2000);
// }



// ------------ video 4 ------------ 04 - Temporal Dead Zone

//talks about varaible declartion "undefined issue", thus if we used const it will make an error 



// ------------ video 5 ------------ 05 - Is var Dead. What should I use

//use const by default 
//only use let if rebinding is needed 
//var shouldn't be used in ES6



// ------------ video 6 ------------ 06 - Arrow Functions Introduction

// const names = ["ahmed", "ali", "sayed"];

// //old way using function 
// const fullnames = names.map(function (name) {
//     return name + " Boss";
// });

// //using arrow function 
// const fullnames1= names.map((name)=>{
//     return name + " Boss";
// });

// //arrow function can be used without () if it's one parameter 
// const fullnames2= names.map(name=>{
//     return name + " Boss";
// });

// //arrow function with implect return 
// const fullnames3= names.map(name =>name + " Boss");

// console.log(fullnames3);

// //assigning an anonymous function's location in memory to a const, so it can be invoked 
// const SayName = (name)=>{
//     name = name || "ali";
//     console.log(name);
// };
// SayName("mahmoud");


// ------------ video 7 ------------ 07 - More Arrow Function Examples

// //if we hava seprate data, and we want to construct an object of them
// //we use map with anonymous function to return an object.
// const race="100m Dash";
// const winners=["ahmed","ali","sayed"];


// //here if we want to make an implect return we use (), in es6 we can write property as key & value 
// //as race : race, or simply we can write race it will accept it 
// const win=winners.map((winner,i)=>({
//  name:winner,
//  race: race,
//  //race:race or race is accepted in es6 syntax
//  place:i+1
// }));

// console.table(win);
// console.log(win);

// //if we have data, and we to use filter opetation, we use filter propety with arrow function
// //thus, if true it will be returnd to the array, if not it will be disqualified 

// const ages =[120,15,12,62,43,65];
// const filterdAges = ages.filter(age=> age>=60);

// console.log(filterdAges);



// ------------ video 8 ------------08 - Arrow Functions and this

// //with addevent listener, if we used arrow function, (this) will inherit the window
// //thus we must use function() so it can bind to the box element selected
// const box =document.querySelector("#box");
// box.addEventListener("click",function(){

//     let xl="width-xl";
//     let lg="width-lg";
//     console.log(this);
//     this.classList.toggle(lg) //yellow
//     this.classList.toggle(xl) //red

//     //if we want to swap two varaibles with each other we can use ES6 option 
//     //[first, second] = [second,first]. they will be switched 
//     if(this.classList.contains(xl)){
//         [xl,lg]=[lg,xl];
//         console.log(xl); //width-lg - yellow
//         console.log(lg); //width-xl - red
//     }
    
//     //in set time out if we used function() it will bind to the window becasue function
//     //need to be binded with something such as box.addeventlistener
//     //thus in the case we must use arrow function because it doesn't change the value 
//     //of (this) it inherits it from the parent which in that case is the box
//     setTimeout(()=> {
//         console.log(this); 
//         this.classList.toggle(xl);
//     }, 2000);
// });


// ------------ video 9 ------------09 - Default Function Arguments


