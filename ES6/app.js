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



// ------------ video 22-23 ------------22- The for of loop &  23 - The for of Loop in Action

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




// ------------ video 24 ------------ 24 - Using for in with Objects


// //pure object created to test loops 
// const apple= {
//     color:'red',
//     size:'Medium',
//     weight:'50',
//     sugar:'10'
// };


// //iterating over object's properties, it's prefered to use (in) loops to access the key which is the index.
// for (const key in apple) {
//     debugger;
//     if (apple.hasOwnProperty(key)) {
//         const element = apple[key];
//         console.log(element);
//     }
// };

// //iterating over object with (of) looping we use Object.key(object) which returns an array with keys.
// for (const iterator of Object.keys(apple)) {
//     if(apple.hasOwnProperty(iterator)){
//         const element=apple[iterator];
//         console.log(element);
//     }
// };


// ------------ video 25 ------------ 25 - Array.from() and Array.of()


// //first method to convert array like objects to array, Array.from takes two arguments
// //the firsts is the array like , second is a map fucntions which we can use to return anything
// const elements = document.querySelectorAll('.people p');
// const elementsArray=Array.from(elements,item=>{
//     return item.textContent;
// });
// console.log(elementsArray);


// //second method to convert array like objects to array to use map.
// const element2=Array.from(document.querySelectorAll('.people p'));
// const elementArray2=element2.map(item=>item.textContent);
// console.log(elementArray2);

// //we use Array.from to with arguments to convert them into array in order to use reduce method 
// function sumAll(){
//     const nums= Array.from(arguments);
//     return nums.reduce((prev,next)=>prev+next,0);
// }

// const totalSum=sumAll(10,14,535,53);
// console.log(totalSum); //614


// //Array.of , takes any arguments and convert them into an array 
// const numbers= Array.of(10,14,'hello','bye');
// console.log(numbers); 





// ------------ video 26 ------------ 26 - Array. find() and .findIndex()

// const errorResponse= [
//     {
//       "status": "403",
//       "source": { "pointer": "/data/attributes/secret-powers" },
//       "detail": "Editing secret powers is not authorized on Sundays."
//     },
//     {
//       "status": "422",
//       "source": { "pointer": "/data/attributes/volume" },
//       "detail": "Volume does not, in fact, go to 11."
//     },
//     {
//       "status": "500",
//       "source": { "pointer": "/data/attributes/reputation" },
//       "title": "The backend responded with an error",
//       "detail": "Reputation service not responding after three requests."
//     }
//   ];

// //.find(), is a method which returns a call with one object filtered by the index we choose

//   const statusCode='500';
//   const errorStatus=errorResponse.find(error=>error.status===statusCode);
//   console.log(errorStatus);


//   //.filter(), is a method which returns a callback function with an array of elemnts 
//   const errorStatusFilterdIndex= errorResponse.filter(error=>error.status===statusCode);
//   console.log(errorStatusFilterdIndex);

//   //findIndex(), is a method which returns a callback function with index of first object found
//   const errorStatusIndex=errorResponse.findIndex(error=>error.status===statusCode);

// console.log(errorStatusIndex)



// ------------ video 27 ------------ 27 - Array .some() and .every() 

// const ages =[10,15,16,29];

// //.some() method accepts an array, and search for the specifc item, once it finds it,
// //it returns a boolean.it can be used with strings or numbers, search for specfic element in an array
// const AdultPrsent = ages.some(age=>age>=20);
// console.log(AdultPrsent);


// //.every() method accepts an array, search in the enitre array.it  returns a boolean 
// const ages2= [20,25,61,53];
// const AllAdults= ages2.every(age=>age>=10);


// console.log(AllAdults);




// ------------ video 28 ------------ 28 - Spread Operator Introduction


// //if we want to join two array, we can use concat Method, which returns new array of the combined arrays
// const vegPizza=["Deepdish",'Peperoni','Hawaiann'];
// const meatPizza=['Meatzea','Spicy Mama','Margherita'];
// const pizzazConcat=vegPizza.concat(meatPizza);

// //we can use Array Spreading which disjoin each element of the array or a string, we can any elements 
// //at any location in the fresh new array.

// //P.s array is a refernce type is js, so becareful when you change the object, as all linked var will aslo change
// const pizzazSpread=[...vegPizza,'NewDeapDish',...meatPizza]

// console.log(pizzazConcat); // 6 element array 
// console.log(pizzazSpread); //7 element array with new element in the middle 


// ------------ video 29 ------------ 29 - Spread Exercise

// //in this examples we choosed an element from the dom, we wraped its text content 
// //using spread to return span of each letter, we used css transorm to add animation.
// const headingItem=document.querySelector('#h2');
// const wrapElments=WrapWords(headingItem.textContent);
// headingItem.innerHTML=wrapElments;

// console.log(wrapElments);


// function WrapWords(word) { 
//     return [...word].map(letter=>`<span>${letter}</span>`).join('');
//  }




// ------------ video 30 ------------ 30 - More Spread Examples

// // if you an object, and you want to take an array out of it, we use array spreading 
// //to unbox them to single elments.
// const resturant = {
//     name: 'Rosto',
//     dishes: ['Shawrma', 'Krispy', 'Spiacy Chicken'],
// }
// const newResturantDishes = ['Spicy Shawrman', ...resturant.dishes];
// console.log(newResturantDishes);


// //if you want to get elements from he dom, and convert them to an array,
// //we can use Array.From() method, but instead we can use array spreading to convert Nodelist 
// //to an array, thus, we can access the map functionality.
// const paragraphDiv = [...document.querySelectorAll('.people p')];

// console.log(paragraphDiv);

// console.log(paragraphDiv.map((map, i) => {
//     return `The element says : ${map.textContent} and his number is ${i+1}`;
// }));


// //if we have an array of comments, and we want to delete a specefic item,
// //we use findIndex() method to first get the id , then we used slice() method
// //which takes two arguments the first and the start, but this will actually returns 
// //an array of an array, thus we use array spreading to return single elements.


// const comments = [{id: 101,text: 'hi, iam here1'},
//                   {id: 102,text: 'hi, iam here2'},
//                   {id: 103,text: 'hi, iam here3'},
//                   {id: 104,text: 'hi, iam here4'},
// ];

// const commentCode=103;
// const commentIndex=comments.findIndex(comment=>comment.id===commentCode);
// console.log(commentIndex);

// const newComments=[...comments.slice(0,commentIndex),...comments.slice(commentIndex+1)];
// console.log(newComments);



// ------------ video 31 ------------ 31 - Spreading into a function

// //if we hava an array, and we want to add another array to it, we can use .push() mehtod,
// //but it will add them as an array. thus, we need to spread them into single element. so we use array spreading 
// // this means we can spread arrays or strings into a method.
// const names=['ahmed','ali','sayed'];
// const names2=['mahmoud','Mohamed'];
// names.push(...names2);
// console.log(names);


// //an example of mapping and template string, in action :D 
// const fullNames=names.map(name=>{
//     return `${name} el Safa7`;
// });
// console.log(fullNames);


// //following the same concept, we have a method which accepts two arguments, we used array 
// //spreading to make single elements of the array. instead of using personName[0], personName[1]
// //array spreading solve that automatically.
// const personName=['wes','bos'];
// function sayHi(first,last){
//     console.log(`the person's FirstName is : ${first} and lastName is :  ${last}`);
// };
// sayHi(...personName);


// ------------ video 32 ------------ 32 - The ...rest param in Functions and destructuring

// //convert the sent arguments with ...rest paramenters into an array 
// function convertCurrency(rate,...amounts){
//     console.log(rate,amounts);
//     const total= amounts.map(amount=>amount*rate);
//     return total.reduce((first,prev)=>first+prev,0);
// }
// const moneyConverted = convertCurrency(10,20,14,4,51)
// console.log(moneyConverted);

// //using rest parameters to attach the rest of the array elements into a single array.
// const team = ['ahmed','ali','mahoud','showel'];
// const [captin,assistant,...players]=team;
// console.log(captin,assistant,players);




// ------------ video 33 ------------ 33 - Object Literal Upgrades



// const first = 'ahmed';
// const last = 'ali';
// const age = 15;


// //object literals upgrades, if value is equal to key name, you can simply use the variable 
// //or you can change it as requried. new method synatx, instead of typing hey: function(){}
// //we just write hey(){};
// const person = {
//     firstName: first,
//     last,
//     age,
//     social: {
//         instagram: 'www.instagram.com',
//     },
//     //new method syntax 
//     hey() {
//         // debugger;
//         console.log(`${this.firstName}`);
//     }
// };
// person.hey();
// console.log(person);


// function convertColor(color) {
//     return `${color}1f`;
// }

// const colorKey = 'pocketcolor';
// const colorValue = '#fffddr';

// //you can use [colorKey]; to access the value of an item and assign it to key value 
// //or simply you can use the string templates to add to it. thus, in the value you can call 
// //a function. 
// const tShirt = {
//     colorKey:colorV1alue, //colorkey:#fffddr
//     [colorKey]: colorValue, //pocketcolor:#fffddr
//     [`${colorKey}inverse`]: convertColor(colorValue), //pocketcolorinverse:#fffddr1f
// };

// console.log(tShirt);



// ------------ video 34 ------------ 34 - Promises

// //if you have an api, we can use fetch method the get the data, the operation on data can be done 
// //only with .then() method, because until it done it's just a promised value 
// //we use catch method, if all the .then() failed, catch will print the output.
// const postPromises = 
// fetch('https://jsonplaceholder.typicode.com/posts/')
//   .then(response => response.json())
//   .then(json =>{
//     const data=json.find(value=>value.id===5);
//     console.log(data);
//   } )
//   .catch(err=>{
//       console.log(err);
//   });

// const promisedValue=fetch('https://jsonplaceholder.typicode.com/posts/1');
// console.log(promisedValue);   //promise{<pending>} 


// ------------ video 35  ------------ 35 - Building your own Promises

// // we can build our own promise by creating new object, which accepts call back function
// //which has two parameters, resolve, reject. we wrap the reject in Error to exactly determine 
// //the error line.
// const promise =new Promise((resovle,reject)=>{
//   setTimeout(() => {
//    resovle('sucess');
//    reject(Error('Error'))
//   }, 1000);
// });

// promise.then(data=>console.log(data))
// .catch(err=>console.log(err));



// ------------ video 36  ------------ 36 - Chaining Promises + Flow Control 


// //this example to simulate the database behavior where you have post, you want to return
// //he the user object, so we use promises.
// const posts = [
//   { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
//   { title: 'CSS!', author: 'Chris Coyier', id: 2 },
//   { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
// ];

// const authors = [
//   { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
//   { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
//   { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
// ];

// function getPost(id) {
//   //make new promise 
//   return new Promise((resolve, reject) => {
//     //set time out to be like database 
//     setTimeout(() => {
//       const post = posts.find(post => post.id === id);
//       //if found return post
//       if (post) {
//         resolve(post);
//       }
//       //else returns an error
//       else {
//         reject(Error('post Cannot be found'));
//       }
//     }, 1000);
//   });
// };

// function hydratePost(post) {
//   //new promise 
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const author = authors.find(author => author.name = post.author);
//       //if found the author 
//       if (author) {
//         //set property post.author with an object author 
//         post.author = author;
//         //return the new post object
//         resolve(post);
//       } else {
//         reject(Error('no user found'));
//       }
//     }, 1000);
//   });
// }

// //calling the method  to find the post 
// const foundPost=getPost(3).
// then(post => {
//   console.log(post);
//   //here we returns a function which returns a promise too, so we can use .then()
//   return hydratePost(post);
// }).then(author => {
//   console.log(author);
// }).catch(err => console.log(err));



// ------------ video 37  ------------ 37 - Working with Multiple Promises

// //dealing with muliple promises, we use Promise.All(), which accepts an array or promises
// //we return new Promise.all() to convert the data to json by using .map method
// //followed by then method to log the data.

// //promise.all waits for all the promise to return, it time measured by the longest request time 

// const postPromises= fetch('https://jsonplaceholder.typicode.com/posts/');
// const pagesPromises=fetch('https://jsonplaceholder.typicode.com/posts/');

// Promise.all([postPromises,pagesPromises])
// .then(responses=>{
//   //we used another promsie because it returns a readable data, must be converted to json 
//   //thus we used array.map method 
//   return Promise.all(responses.map(response=>response.json()))
// })
//   .then(responses=>console.log(responses));




 // ------------ video 38  ------------ 38 - Symbols
 
//  //primtives in javascrip Number,String,Boolean,Null,undefined,object,symbol
//  //symbols are unique values like GUID, the value inside is called discriptor.
//  const wes = Symbol('wes');
//  const person= Symbol('wes');

// const classRoom={
//     [Symbol('Mark')]:{id:1,name:'sayed'},
//     [Symbol('Mark')]:{id:2,name:'mahmoud'},
//     [Symbol('Mark')]:{id:3,name:'ali'},
// };
// console.log(classRoom);

// //we can iterate over symbol. so this will not run, the other solution is to use the following 
// // for (const key in classRoom) {
// //     if (object.hasOwnProperty(key)) {
// //         const element = object[key];
// //         console.log(element);
// //     }
// // }   // can't use this 

// //we use getOwnPropertyMethodSymbols to return an array of symbols, we can use map to return 
// //classRoom[symbol], this is a workaround to access the object data when using symbols as keys 
// const data = Object.getOwnPropertySymbols(classRoom);
// const dataOfClass=data.map(symbol=>classRoom[symbol]);
// console.log(dataOfClass);


 // ------------ video 39  ------------ 39 - Code Quality with ESLint -44 - Only Allow ESLint Passing Code into your git repos

//eslint session is very important with debugging, good for improving code quality 
//skiped fro, 39 to 45 
//to be watched later 


 // ------------ video 45  ------------ 45 - JavaScript Modules and WebPack 2 Tooling Setup






