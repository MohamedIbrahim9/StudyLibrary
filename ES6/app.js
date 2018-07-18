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

// //with addeventlistener, if we used arrow function, (this) will inherit the window
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
//         this.classList.toggle(xl); //width-lg- yellow
//     }, 2000);
// });


// ------------ video 9 ------------09 - Default Function Arguments

// //Normmaly if you want to make default arguments , we use ||. In Es6 we can simply 
// //thus, it's assigned when it's calling value is equal to undefined 

// function calculateBill(total, tax=0.13, tip=0.15) {
//     //tax= tax||0.13; 
//     // if(tax===undefined){tax=0.13};
//     return total + (total * tax) + (total * tip);
// }

// const TotalBill= calculateBill(100,undefined,0.25);
// console.log(TotalBill);


// ------------ video 10 ------------10 - When NOT to use an Arrow Function


// //Case 1: when we have an element from the html we don't use arrow function, beccaue it will
// //inherit the window. thus we use the normal function which will bind to the object 
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//     console.log(this);
//     this.classlist.toggle("on");
// })


// //Case 2 : when you have an object, and you to use one of its property , we can't use this either 
// //because it will inherit the window's object. thus we use normal function as follow 
// //in ES6, you can write the function as follows : score(){this.points++;} == score:fucntion(){this.point++;} 

// const person = {
//     points: 23,
//     score() {
//         this.points++;
//     }
// }
// person.score();
// console.log(person.points);




// //Case 3 : if you hava a class, and you want to add method to the prototype to allow object to use it 
// //we can't use the arrow fucntion because it won't bind to the object as it inherits the window 
// //thus, we have to use normal function.


// class car {
//     constructor(model,color){
//         this.model=model;
//         this.color=color;
//     }
// }


// const bmw= new car("bmw","blue");
// const kia= new car("kia","green");

// car.prototype.summary=function(){
//     return "this car model is : "+this.model+ "  and the color is : " + this.color;
// }


// //Case 4 : if we have a function and we want to access its arguments list. we can't use arrow function either
// //we need to use the normal function.


// const listArguments=function(){
//     //array from convert them into an array object 
//     const argumentslist = Array.from(arguments);
//     return argumentslist.map((args,i)=>{
//         return args +"was created " +(i+1) 
//     })
// }
// console.log(listArguments("ahmed","ali","sayed"));



// ------------ video 11 ------------11 - Arrow Functions Exercises

// //Exercise 1
// //fisrt we use querySelectAll to select all elements with data attribute [data-time];
// const items = Array.from(document.querySelectorAll("[data-time]"));


// //we start filterting to get only the "ReduxVideo", thus it returns an arrar of object 
// const filtrItems = items.filter(item => item.textContent.includes("ReduxVideo"))
//     //we need to extract the time property from dataset, we use map it returns an array of strings ["6.24","2.25"]
//     .map(item => item.dataset.time)
//     //we need to extract minutes and seconds from the time, so we use split method which converts into 
//     // an array [["6","24"],["2","25"]] thus we use map to convert from string to float using parseFloat
//     //the return her is now the parts [0]*60 + part[1]
//     .map(timecodeTotal => {
//         const parts = timecodeTotal.split(":")
//             .map(part => parseFloat(part));
//         return (parts[0] * 60) + parts[1];
//     })

//     //we use the reduce mmethod which takes two parmeters, firtst is callback function which returns the total value of array 
//     //second arugument is number intial value to be added to the total

//     //in this case the function to be sent first arguments represents the index of the array, total time is the timecodetotal
//     //to return the total we must add them in the method together
//     // reduce function needs to be studied more to understant how it actually works 
//     .reduce((index, totalTime) => index + totalTime, 2000); //7410

// console.log(filtrItems);

// //Exercise 2 
// //filtering an array of numbers to return all numbers which are greater than 70 , then get total
// const numbers = [10,29,69,232,434,23];

// const fileternumbers= numbers.filter(num=>num>70).reduce((index,totalsum)=> index+totalsum);

// console.log(fileternumbers);



// ------------ video 12 ------------12 - Template Strings Introduction

// //we can use (``) which is back text, it allow us to use other varaibles with ${variable} inside string

// const firtname="ahmed";
// const lastname="sayed";
// const fullnames=`This Person's Name is ${firtname} and its last name is ${lastname}`;
// console.log(fullnames);




// ------------ video 13 ------------13 - Creating HTML fragments with Template Literals

// // we can use template strings to add elemnts to the documents 

// const drinks = {
//     name: 'CokaCola',
//     County: 'Egypt',
//     keywords: ['hot', 'soft', 'cloudy', 'spicy'],
//     condition:'good'
// };


// //this function is called throw a template string, and returns a list of items
// const renderword = (keywords) => {
//     return `
//         <ul>
//             ${keywords.map(keyword=>`<li>${keyword}</li>`).join('')}
//         </ul>
//         `;
// }

// //this is an html markup, we can call a function , use tinary operators to make if statuments 
// const markup = `
//     <div class="xl">
//         <h2>${drinks.name}</h2>
//         <h2>${drinks.County}</h2>
//         <h2>${drinks.condition?`${drinks.condition}`:'' }</h2>
//         ${renderword(drinks.keywords)}
//     </div>
//     `;

//     document.body.innerHTML=markup;




// ------------ video 14 ------------14 - Tagged Template Literals

// // in tagged template literals, you can simply call a method with `` , by typing the method's name 
// // highligh``, it calls a functions which sends the strings and values of ${items} in the backtext (``) 
// //thus, the function takes input (strings,...values) > ...values converts them into an array.

// const Person = {
//     name: 'ahmed',
//     age: 25
// };

// const sentence = highLight `Person name is : ${Person.name} and his age is : ${Person.age}`;

// //this is the fucntion that we explained earlier, we use .map or .forEach method to make iterations 
// // it will return a backtext which contains html tags 
// function highLight(strings, ...values) {
//     debugger;
//     let str = '';
//     // we need to use values[i] || '', because the number of strings is always bigger by one than values
//     strings.map((items, i) => {
//         str += ` ${items} <span contenteditable>${values[i] ||''}</span> `
//     })
// return str;
// }
// document.body.innerHTML=sentence;
// console.log(sentence);



// ------------ video 15 ------------15 - Tagged Templates Exercise



// //this is a dictionary we use to create hovering text of certain values 
// const dict = {
//     Html: 'html5',
//     Css: 'Css 3'
// }

// const Person = {
//     name: 'ahmed',
//     age: 25
// };

// //here we use tagged templates, we called a fucntion with that will use the values. 

// const sentence = AddAbbrivation `Person name is : ${Person.name}
//  and his age is : ${Person.age} and i love to code ${'Html'} and ${'Css'}`;



//  //in this function we looped over the values to check if there a defination in the dictionary 
//  // else it will return the value 

//  //we used reduce Method it works as let str='', it will return an backtext.
// function AddAbbrivation(strings, ...values) {
// // debugger;
//     const abbrivated = values.map(value => {
//         if (dict[value]) {
//             return `<abbr title="${dict[value]}">${value}</abbr>`
//         }
//         return value;
//     })
    
//     return strings.reduce((sentence, string, i) => {
//         console.log(string);
//         debugger;
//         return `${sentence} ${string} ${abbrivated[i] ||''}`;
//     },"")
// };

// //we add to div inside the Html 
// const div = document.querySelector("#div");
// const pdata = document.createElement('p');
// pdata.innerHTML = sentence;

// div.appendChild(pdata);




// ------------ video 16 ------------16 - Santizing User Data with Tagged Templates

// // to prevent xss : which is running javascript code inside strings, we need to use 
// //DomPurify.js which cleans the strings, it can be done as follows, 
// //you can add the fucntion before the stings, or just before the const html
// //or before assigning it inside the div element.


// function sanitize(strings,...values){

//   const dirty=  strings.reduce((sentence,string,i)=>{
//         return `${sentence} ${string} ${values[i]||''}`
//     },'')

//     return DOMPurify.sanitize(dirty);
// }
// const name = 'ahmed';
// //first location to use sanitize function
// const bio=sanitize`<div onload="alert('hi')"></div>`;

// //second location to use sanitize function
// const Html=sanitize`
//     <h2>${name}</h2>
//     <div>${bio}</div>
// `;

// const div= document.querySelector('#div');
// //third location to use sanitize function
// div.innerHTML=sanitize`Html`;




// ------------ video 17 ------------ 17 - New String Methods


// //operations on strings 
// // .startWith() , .endsWith() , .includes() , .repeat()
// const name = 'AC-DC105213';


// console.log(name.startsWith('A'));      //starts with 
// console.log(name.startsWith('C1',4));   //escape 4 digits  from start
// console.log(name.endsWith('3'));        //end with 
// console.log(name.endsWith('D',4));      //escapes 4 digits from start
// console.log(name.includes('DC'));       //search inside strings 
// console.log(name.repeat(10));           //repeats strings with numbers




// ------------ video 18 ------------ 18 - Destructuring Objects

//desconstructing object is used to create variables nested inside object
//easier way to write, also you can set a default value if it's equal undefined or not found 
//you can also change its name as follow  const{facebook:fb="hi"} rename & default value.



// const person= {
//     name:'ahmed',
//     social:{
//         facebook:'www.facebook.com',
//         twitter:'www.twitter.com',
//         other:{
//             instagram:'www.instagram.com',
//             pinterest:'www.pinterest.com'
//         }
//     },
//     credit:'123C'
// };

// const {twitter:tweet, facebook:fb,instagram:insta=300} = person.social;



// ------------ video 19 ------------ 19 - Destructing Arrays
 

// //desconstructing arrays into elements by index 
// //if you choose only 2 indcies of the array, and you need to grad what is left 
// // you can you the 'Rest operator ...' it convert them into a smaller array 


// const team =['ahmed','ali','sarah','mahmoud','wes']
// const [captin,assitant,...players]=team;

// console.log(captin,assitant,players);


// // if you want to de-consruct an strings perfectly splited with comma (,) 
// //we can use .split(','), as it returns array of items.
// const name ="ahmed,sayed,12,15,abc";

// const [firstname, lastname, id,...data]=name.split(',');

// console.log(firstname,lastname,id,data);




// ------------ video 20 ------------ 20 - Swapping Variables with Destructuring


// // you can swap varaibles by using array desconstruction, first you create any array of them
// //second it's assigned to them
// let inRing='Hulk';
// let onSide='Rock';

// console.log(inRing,onSide);
// [inRing,onSide]=[onSide,inRing];
// console.log(inRing,onSide);


// ------------ video 21 ------------ 21 - Destructuring Functions - Multiple returns and named defaults


// //when we have a fucntion and it returns an object, you can deconstruct to object 
// //when the fucntion is being called.
// const convertCurrency=(amount=300)=>{
//     const converted={
//         USD:amount*10,
//         EPG:amount*0.5,
//         EUR:amount*12,
//     }
//     return converted;
// }

// //an example of deconstruction on a function which returns an object 
// const {USD:Dollar=200,EPG:Pound=20,EUR:Euro=250}=convertCurrency(200);
// console.log(Dollar,Pound,Euro);


// //we can used it with functions, the arguments to be send as an object 
// //which allows to change to order,not pass down if it has a default value 
// //but if you want to call with no arguments in the fuction it must also accept an empty object
// // as follows, ({total=200,tax=0.13,tip=0.12}={} ) , here it accepts an empty object 

// const totalBill=({total=200,tax=0.13,tip=0.12}={})=>{
//     return total +(total*tax)+(tip*tax);
// }

// const bill=totalBill({total:200,tip:0.13,tax:0.14});

// console.log(bill);



// ------------ video 22 ------------22 - The for of loop &  22 - The for of Loop in Action

// //the power of looping with (of) is that you iterate over array and break at a certin element
// //and aslo you can skip an item in the array, unline forEach you can't do that 

// //if we added method to the array prototype Array.prototype.Shuffle,
// //it will produce an errors in the array, you can follow the video if you wanna check the added method 

// //the normal loops are not well used now because it's miss guide us (for let i=0;i<cuts.length;i++){}
// // it's not prefered to use becasue to accees the value you need to write cuts[i] 

// //the for(const cut in cuts ) {console.log(cuts[cut])}, it also need to write like this 
// // so the best practise is to use for(const cut of cuts){console.log(cut)}
// const cuts =['wes','bos','shank','shoti'];

// for (const cut of cuts) {
//     if (cut==='wes') continue;  //break; ends the loop, while continue skips one iteration
//     console.log(cut);
// } 


// //cuts > when looping over it with of it will print the value at the index,
// //unlike for (in) it prints the index. thus, at watch we use cuts[cut] to get the value


// //entries is the a method that hold array iterator,which hold the whole object [0,'wes'] , [1,'bos']
// //thus as it converted to an elemets each is an array of 2 items 
// for(const [i,cut] of cuts.entries()){
//    console.log(`the index is ${i+1} and the value is ${cut}`);
// }



// //functions that adds any numbers of arguments using of looping 
// function addNumbers(){
//     let total=0;
//     for( const number of arguments){
//         total+=number;
//     }
//     console.log(total);
//     return total;
// }

// const totalNumber=addNumbers(10,29,41,124);
// console.log(totalNumber);


// // looping over a name and print the chars using (of) loops
// const name ='wesbos';
// for(const char of name){
//     console.log(char);
// }




// //adding an event listener to array of dom elements  using (of) loops
//it's like JQuery $("p").click(function(){}), but we used ES6
// const p= document.querySelectorAll('p');
// for(const para of p){
//     para.addEventListener('click',function(){
//         console.log(this.textContent);
//     })
// }




// ------------ video 22 ------------ 22 - The for of loop





