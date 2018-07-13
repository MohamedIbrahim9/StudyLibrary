// b();
// console.log(d);
// console.log(a);
// var a = 'hello world';
//  function b ()
//  {
//      console.log(' :D ');
//     this. d = "ahmed";
//  }
// Function excution context -- stackExcution 
//Reference to Outer Environment on the same level
//---------Scope Chain---------
//Scope chain  goes from small scope to outer scope if it's not  find the var in the current scopt
// it goes to the scope at the same  level, after that  it goes to the outer envirnemrnt 
// function b() {
//    var myvar;
//    console.log(myvar);
//     function c()
//     {
//         console.log(myvar+"c");
//     }
//     c();
// }
// function a() {
//     var myvar = 2;
//     console.log(myvar);
//     b();
// }
// var myvar = 5;
// console.log(myvar);
// a();
// ------- Video 18 -------   4/2/2018 
//Event queue , javascript runs all code then it goes to event queue , it start excution of the event 
// function waitthreesecond()
// {
//     var ms = 200000000+new Date().getTime;
//     while(new Date().getTime <ms){};
//     console.log("finished excution1");
// }
// function click()
// {
//     console.log("this is a click");
// }
// addEventListener("click",click);
// waitthreesecond();
// console.log("finishd excution");
//-------- video 24 ------- Coercion
// var a = 0 ; 
// var b= false;
// if (a==b)
// {
//     //it casts one type to another 
//     console.log("Coercion ");
// }
// if (a===b)
// {
//     console.log("Strict Equal");
// }
// else
// {
//     console.log("else");
// }
// ------ video 28 ------- default values using OR ||
// function greet(name)
// {
//     //if the name equals to 0 or undefined it ors to the default value 
//     name = name || "Default name "
//     console.log("ahmed "+name);
// }
// greet();
// greet("sayed");
//------- video 29 --------- // checking for global default values 
// var library= undefined;
// library = "sayed";
// window.library= window.library|| "sayed"
// console.log(library);
//------- video 30 -31 --------- object & dot operator 
// var person = new Object();
// person["firstname"]="ahmed";
// person.lastname="sayed";
// console.log(person.firstname +name+person.lastname);
// var Tony = {
//     firstName:"ahmed",
//     LastName:"alii",
//     address:{
//        street:"saedzagloul" ,
//        apartment:"6th.floor"
//     }
// } 
// console.log(Tony.address.street);
//------- video 32 --------- namespaces
// we create a literal object to contain the unqiue element like namespacing
// var english = {};
// var spanish={}
// english.greet= "hello";
// spanish.greet="Hola!";
//console.log(spanish.greet);
//--------- video 33 --------- JSON & ObjectLiteral
// var person = {
// firstName:"Mohamed",
// LastName:"ElShowel"
// }
// //from literal object to json 
// console.log(JSON.stringify(person));
// //from json object to literal 
// var JsonObject= JSON.parse('{"FirstNAme":"aMohamed", "Isprogrmmer":true}')
// console.log(JsonObject);
//--------- video 34 ------ functions & objects
// function greet()
// {
//     console.log("hi");
// }
// // functions are like objects you can add property into it 
// greet.langa="English";
// console.log(greet.langa);
//---------- video 35 -------------- functions startments & expersions; 
//assigning a function to a var , then the var has the location of the function in the memory and can be called with ()
// var a = function(){
//     console.log("hi");
// }
// a();
// function greet(a)
// {
//     console.log(a);
//     //running the function
//     a();
// }
// // functional programming , send a function to a fucntion as a parameter 
// greet(function a (){
//     console.log("hi");
// })
//---------- video 36 -------------- By value and by reference  , 
// var a= 3; 
// var b; 
// b= a; 
// // by value , is used with all primitive data types.
//  //here b is assigned by value , a new location in memeory being reserved for b with a value of "3"
//  //so when we change the value of a to "7" , b is not affacted by this change ; 
// a = 7;
// console.log(a);
// console.log(b);
// // by refercene , all object is assigned by reference , including functions too , 
// //if we send it as a parameter to function , for expamle we "Mutate" the the object 
// //all the linked objects are effected by this change.
// var c = {firstName :"ahmed "};
// var d;
// d=c;
// d.firstName="Sayed";
// console.log(c);
// console.log(d);
// function Greet(obj)
// {
//     obj.firstName="Mahmoud";
// }
// Greet(d);
// console.log(c);
// console.log(d);
// c={lastName:"Ali"};
// console.log(c);
//---------- video 38 ------------Arrays
// in javescript , you can create an array using either , new Array(), or simply using Array literal []
// Array is a collection of objects of any type ,JS identify the objects in the array dynamic "on the fly" in the run time
// for example [number, boolean, object litral, fucntion,string]
//we can use elements of the array using indexer [] , it starts counts from 0 to ++ ,
// var arr = [
//     1,
//     false,
//     function greet(name){
//         name= name||"Default";
//         console.log("hello  "+name);
//     },
//     {
//         name:"sayed",
//         address:"6th oct"
//     },
//     "hello"];
// arr[3](arr[2].name);
// arr[3]();
//---------- video 39 ------------ argumnts & spread
// arguments is being sent to function , if they are not sent they are hoisted in memory with undefined 
//function automatically creates arguments , which is like an array but doesn't have all the features of the array 
// simply you can use it , arguments[0] as indexing to access the elements , or to get arguments's length
// function greet(firstname, lastname, address) {
//     if (arguments.length === 0) {
//         console.log("missing Parameters");
//         console.log("------------");
//            return;
//     }
//     console.log(firstname);
//     console.log(lastname);
//     console.log(address);
//     console.log(arguments);
//     console.log("------------");
// }
// greet();
// greet("ahmed");
// greet("ahmed", "sayed");
// greet("ahmed", "sayed", "fayoum");
//---------- video 40 ------------ functions overloading 
//In JavaScript there no function overloading, but it can be replaced with first class function concept, 
//we can create a function that has the requried action, create a sub functions with the unqiue elements
//later you can call them as needed 
// function greet(first, last, lang) {
//     lang = lang || "en"; //default value
//     if (lang == "en") {
//         console.log("Hello! " + first + " " + last + " " + lang);
//     }
//     if (lang == "es") {
//         console.log("Hola! " + first + " " + last + " " + lang);
//     }
// }
// function greetEnglish(first, last) {
//     greet(first, last, "en");
// } 
// function greetSpanish(first, last) {
//     greet(first, last, "es");
// }
// greetEnglish("ahmed", "sayed");
// greetSpanish("ahmed", "sayed");
//---------- video 41 ------------ Dangerous Aside "automatic syntex parser"
// function getPerson(){
//     return{    // if syntex parser sees an "Enter" it considered to be semiColumn so it escapes the function 
//         firstNAme:"ahmed"
//     }
// }
// console.log(getPerson()); 
//---------- video 42 ------------ whiteSpaces
//JavaScript smiply ignores white spaces and comments 
// var 
// // the first name o f person
// firstname,
// //the last name 
//  lastName,
//  //the address
//  Address;
// var person ={
//     //the first name 
//     firstName:"ahmed",
//     //the last name 
//     LastName:"Sayed",
//     //the address
//     Address:"Fayoum"
// }
// console.log(person);
//---------- video 44 ------------functions
// //functions statments it's being reserved in memory as function 
// function greet(name) {
//     console.log("this is a statment fucntion");
// }
// //statment function invoke ();
// greet();
// //expression function : means it returns a value with a memory address that will be assigned to the var 
// var greetings = function (name) {
//     console.log("this is a Expression fucntion");
// }
// //Expression function invoke ();
// greetings();
// //IIFE "Immediatly Invoked Functions Expressions" , when you put a funtion inside a () this return a value means it will be accepted as a expression
// (function (name) {
//     console.log("this is a IIFE fucntion");
// })(name);   // (function(name)());
//---------- video 45 ------------ IIFE & Safe Code
//IIFE keeps it objects private in its excution , it prevents them from accessing the global excution context 
//so all the libraries puts all the fucntions in a IIFE
// var FirstName="ahmed";
// (function(name,global){
//     var greetings = "hello";
//     global.greetings="sayed";
//     console.log(greetings+" "+name);
// })(FirstName,window);
// console.log(greetings);
//---------- video 46----------- Closures]
// //what are closures, means that javascript after poping up the function from exctuion stack it keeps a link to the variables in
// // so other functions when it calls it can use it , it behaves like the parent of three childs , the all point to the same object in memory
// // to slove this we use IIFE to store the value in it so  , or we can use ES6 let function 
// function buildFs() {
//     //in this case they after finshing context of buildFs() , it returns the arr objects what hold object "functions"
//     //when we invok these functions the all look to same memory space which saves the last value of "i";    arr = [];
//     arr=[];
//     for (i = 0; i < 3; i++) {
//         arr.push(function(){
//             console.log(i);
//         })
//     }
//     return arr;
// }
// var a = buildFs();
// a[0]();
// a[1]();
// a[2]();
// function buildFs2() {
//     //to slove the clousre problem we need to use IIFE
//     // to save the given parameters inside it , but we need to return the required action to return as a function 
//     arr = [];
//     for (i = 0; i < 3; i++) {
//         arr.push(
//             (function (j) {
//                 return function () {
//                     console.log(j);
//                 }
//             })(i))
//     }
//     return arr;
// }
// var a2 = buildFs2();
// a2[0]();
// a2[1]();
// a2[2]();
// function buildFs3() {
//     //in this case we use let Variables have  their scope in the block in which they are defined, 
//     //so in this case let j =i , j  is linked to value of i in every loop and saved in memory
//     arr=[];
//     for (i = 0; i < 3; i++) {
//         let j = i;
//         arr.push(function(){
//             console.log(j);
//         })
//     }
//     return arr;
// }
// var a3 = buildFs3();
// a3[0]();
// a3[1]();
// a3[2]();
//---------- video 48----------- Function Factory
// //in this case we use closure to link the parameter of "langauage" to memory 
// //so in every time we create a excution context of the function makeGreetings it saves its value and link its parameters in  memory 
// //after invoking the function we don't need to pass the default paramters again
// function makeGreetings(langauage)
// {
//     return function(firstname, lastname)
//     {
//         if(lang==="en")
//         {
//             console.log("hello"+firstname+lastname);
//         }
//         if(lang==="es")
//         {
//             console.log("hola"+firstname+lastname);
//         }
//     }
// }
// // both of them has a unqiue excution in memory saved with its parameters
// var greetEnglish=makeGreetings("en");
// var greetSpanish=makeGreetings("es");
// greetEnglish("ahmed","sayed");
// greetSpanish("ahmed","sayed");
//---------- video 49----------- Callback function
// //Callback function , a fucntion that call a fucntion when it finishes
// function tellmewhenDone(callback)
// {
//     var a=1; 
//     var b=2;
//     callback();
// }
// tellmewhenDone(function(){
//     console.log("1");
// })
// tellmewhenDone(function(){
//     console.log("2");
// })
//---------- video 50----------- bind , call , apply
// //bind & call & apply 
// //function borrwing , function currying
// var person = {
//     firstName: "ahmed",
//     lastName: "sayed",
//     getFullName: function () {
//         var fullname=(this.firstName+" "+this.lastName);
//         return fullname;
//     }
// }
// function logName(ghost){
//     console.log("hello  "+ghost+" "+this.getFullName());
//     console.log("--------------")
// }
// //bind links the this to a object and makes a copy of the functions using the given object 
// var logPersonName=logName.bind(person);
// //this is the new function created , then we invoke it ;
// logPersonName();
// //call it's like bind except we don't use "()" to invoke the function, call invokes the function and links the object which is equalivent to this 
// //logName.Call(object,...) object and the paramters of the function 
// logName.call(person,"Civil");
// //apply similar to call takes the object to point at , except it takes the parameters as an array , it's widly used in mathmatical libraries 
// logName.apply(person,["CivilArray"]);
// //function borrwing , when a objects has properties like the current object and wants to access a function in it , 
// //we use call or apply to link the object which will point to this , 
// var person2={
//     firstName:"Mohamed",
//     lastName:"Ibrahim"
// }
// //using call 
// console.log(person.getFullName.call(person2));
// //using apply
// console.log(person.getFullName.apply(person2));
// //function currying , when we have a function that makes a certian task , and we want to make a new copy of it that do the exact same operation 
// //we use it to Prefix the parameters of function, used in math library 
// function muliply(a,b){
//     return a*b;
// }
// //multiplybytwo takes a copy of the fucntion and presfix the first parameter a with value of 2 .
// var multiplyByTwo = muliply.bind(this,2);
// console.log(multiplyByTwo(3));
//---------- video 51----------- functional progrmming
// //we use functional programming to pass down fucntions , functions that returns functions, that makes alot easier for us to write more simplified code 
// //in this function we accept arguments , array elements  , and a function , we create a new array at begining
// function mapForEach(arr, fn) {
//    var newArr=[];
//    for (let i = 0; i < arr.length; i++) {
//        newArr.push(fn(arr[i]));      
//    }
//    return newArr;
// }
// var arr = [1, 2, 3];
// console.log(arr);
// //old way of copying items from array 
// var arr2 = [];
// for (var i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] * 2);
// }
// console.log(arr2);
// //new method using fucntional programming
// var arr3=mapForEach(arr,function(item){return item*2});
// console.log(arr3);
// //now we are supposed to send a function already created to do a certain task checking if item of array are bigger than the limiter 
// function CheckLimit(limiter,item){
//     return limiter>item;
// }
// //here we use bind to prefix the limiter with value of 2 
// var arr4 = mapForEach(arr,CheckLimit.bind(this,2));
// console.log(arr4);
// //in this case we make a more simplifid code function tht returns a function , we give it 1 parameter , it returns a function that accepts two parameters 
// //we use bind in it to prefix the parameter given ,, ****bind**** don't forget it 
// function CheckLimitSimplifid(limiter){
//     return function(limiter,item){
//         return limiter>item
//     }.bind(this,limiter)
// }
// var arr5=mapForEach(arr,CheckLimitSimplifid(2));
// console.log(arr5);
// //in this function we don't need to use bind , because of closure divandce will always be stroed in memory
// function DivindSmpilifid(divdvenc){
//     return function(items){
//         return items/divdvenc;
//     }
// }
// var arr6= mapForEach(arr,DivindSmpilifid(2));
// console.log(arr6);
// //lodash & underscore both work with functionl programming to deal with array and collections 
// //undersocre.js filtering 
// var arr7 = _.filter([1,4,5,6,5,6,5],function(item){ return item% 2 ===0})
// console.log(arr7);
// //mappig using undersocre.js
// var arr8=_.map(arr,function(item){return item%2});
// console.log(arr8);
//---------- Chapter 5 video 54 ----------- Prototype Understanding 
//Prototype is special referece propterty that's used to search for properties and methods within the object
//(((it's like the fucntion prototype in C)))// &note to self &(prototype is he memory address of the property within a certain object),
//thus you can link object's prototype to another to all use it's functions 
// var person={
//     firstName:"Default",
//     lastName:"Default",
//     getfullName:function(){
//         return this.firstName+" "+this.lastName;
//     }
// }
// var person2 ={
//     firstName:"John",
//     lastName:"Walker"
// }
// //DON'T DO THIS EVER! for demo purposes only !!! 
// person2.__proto__=person;
// console.log(person2.getfullName());
// var person3={
//     firstName:"Jane"
// }
// person3.__proto__=person;
// console.log(person3.getfullName());
//---------- Chapter 5 video 54 ----------- Everything is a object
//every object is created has a prototype , whether it's a function or a array ,
//at the bottom of every prototype chain is an object , so everything is an object 
// var a = {};
// var b = function () { };
// var c = [];
//---------- Chapter 5 video 54 ----------- Reflection & Extend (undersocroe.js)
// //name/ value understading accessing values using name 
// // var a = {firstName:"sayed",lastName:"Mahmoud"}
// // console.log(a["firstName"]);
// var jack = {
//     firstName: "Default",
//     lastName: "Default",
//     getfullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// var john = {
//     firstName: "John",
//     lastName: "Walker"
// }
// var jane = {
//     firstName: "Jane",
//     GetlastName:function(){
//         return this.firstName;
//     }
// }
// john.__proto__=jack;
// //looping over every property in john ,  printing every prop in it , and using indexing to access it's values 
// // for(var prop in john) 
// // {
// //     console.log(prop+" : "+john[prop]);
// // }
// //.hasOwnProperty(takes the name of each property of and item and returns true or flase , means it goes through the objects and check if this property belongs the object not the prototype chanining 
// for(var prop in john)
// {
//     if(john.hasOwnProperty(prop))
//     {
//         console.log(prop+" : "+john[prop]);
//     }
// }
// //making object compositions using underscore.js library functions 
// //it compines all objects together in a new object 
// // internally it has two loops , one loops over elements given , and other over their property and assing them to the new object 
// var newComposedObject = _.extend(jack,jane,john);
// console.log(newComposedObject);



//---------- Chapter 6 video 57 ----------- building objects, Function constructors
//basically function construactor : it's a normal function that's used to construct objects , the "this" point to a new empty objects and maps all property to it and rturned when the function is done with excution 
//you can add parameters to the function  

// function Person(firstname,lastname)
// {
//     console.log(this);
//     this.firstName=firstname||"Default";
//     this.lastName=lastname||"Default";
//     console.log("The function is Invoked")
// }
// //new makes a new empty object , function returns all this property to the empty object
// var jack = new Person("jack","Doe");
// console.log(jack);

// //example of classes in ES6 , 
// class person{
//     constructor(firstname,lastname){
//         this.firstName=firstname||"Default";
//         this.lastName=lastname||"Default";
//         console.log("The function is Invoked");
//     }
// }

// var jane = new person("jane","Doe");
// console.log(jane);


//---------- Chapter 6 video 58 -----------function constructors And Prototypes
// function Person(firstname,lastname)
// {
//     console.log(this);
//     this.firstName=firstname||"Default";
//     this.lastName=lastname||"Default";
//     console.log("The function is Invoked")
// }

// //all object that's created using functional constructor have access to prototype 
// //we put all the methods in prototype so that all objects created can access to a single method
// //instead of making new copies of it to increase the performance and reduce memeory space for every object
// //further more, we can add any method later to all of objects using "Person.prototype".
// Person.prototype.getfullName=function(){
//     return this.firstName+" " +this.lastName;
// }
// //new makes a new empty object , function returns all this property to the empty object
// var jack = new Person("jack","Doe");
// console.log(jack);
// console.log(jack.getfullName());


//---------- Chapter 6 video 59 -----------Dangerous Aside
//when we are using functions as function constructor , 
//1-never forget to use "new" .. 2- Function constructor begins with a captial letter 
// if we forgot to do though all objects created will be set to undfined , and will not access any property 


//---------- Chapter 6 video 60-62-----------build IN function constuctor
// //there are build in function constructors like 1- Number , 2- string , 3-Array, 4- Date
// //they are not primitives , they are object that are wrapped up as numbers and adds new features 

// //adding function to prototype inhertance
// String.prototype.IsLengthGreaterThan=function(limit){
//     return this.length>limit;
// }
// console.log(String("John").IsLengthGreaterThan(3));


// var a = 3 ;
// var b=new Number("3");

// //a==b true  because of coercion it converts types 
// //a===b are not equal because this is a primitve and b is an object
// //Moment.js is used to deal with dates

// // here we don't create an object it's a regular function  it converts 3 to a number
// var c = Number("3"); 

// //dealing with Array objects , the array is indexing where 0,1,3 are the name , and values are [jack ,john , soe]
// //thus, if we add a method to the proto type it will apper in array 
// // so it's prefered to normal looping instead of for (var prop in arr)
// //in this case it will be added as a property
// Array.prototype.NewFunction="cool!";
// var arr= ["john","jack","soe"];
// for(var prop in arr){
//     console.log(prop+" "+arr[prop]);
// }

//---------- Chapter 6 video 63-----------Prototype Pure Inheritance

// //if the old browser don't supprot Object.create , we can simply add it, 
// // make a function that accepts only one argument , 
// //1-make a a empty function  f() , 2- point f,prototype to the given object
// //3-return new function (); new will create new object and adds what's insdie f(); in it ;
// if (!Object.create) {
//     Object.create = function (obj) {
//         if (arguments.length > 1) {
//             throw new Error("object creates takes only accepts one object");
//         }
//         function f() { };
//         f.prototype = obj;
//         return new f();
//     };
// }


// //in this case we use pure prototype inheritance where we create new object it's prototype points to an exsisting object
// //thus, you can add method and properties in the parent that will be added to all childs
// var person = {
//     firtstName: "default",
//     lastName: "default",
//     getFullName: function () {
//         return "Hi " + this.firtstName + " " + this.lastName
//     }
// }
// var john = Object.create(person);
// john.firtstName = "John";
// john.lastName = "Doe";
// console.log(john);
// console.log(john.getFullName());



//---------- Chapter 6 video 64-----------ES6 And Classes

// //class person , has constructor , everty fucntion outside it , it's added to it's prototype 
// //for performance wise 
// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     greet(){
//         return this.firstName+" "+this.lastName;
//     }
// }

// var john=new Person("John","Doe");
// console.log(john);

// //here we create a new class that sets's object's prototype to an object "Class"
// //we use "extends" to set prototype an constructor , "super" to call base object's constructor 
// //Pure prototype inheritance usage 
// class InformalPerson extends Person{
//     constructor(firstName,lastName){
//         super(firstName,lastName);
//     }
//     greet(){
//         return "Hola"+this.firstName;
//     }
// }
// var jack = new InformalPerson("jack","Doe");
// console.log(jack);



//---------- Chapter 7 video 65-----------Initialization

// var person=[
//     {
//         //this is john object
//         firstName:"John",
//         lastName:"Doe",
//         address:[
//             "11.Mstreet",
//             "NYC"
//         ]
//     },
//     {
//         //this is jane object
//         firstName:"Jane",
//         lastName:"Doe",
//         address:[
//             "12.Mstreet",
//             "NYC"
//         ],
//         greet:function(){
//             return "hi";
//         }
//     }
// ];
// console.log(person);


//---------- Chapter 7 video 66-----------Typeof , instaceof , 

// var a = 3 ; 
// console.log(typeof a );

// var b = "Hello" ; 
// console.log(typeof b);


// var c = {}; 
// console.log(typeof c);

// var d = [] ; 
// console.log(typeof b);   //bad way 
// console.log(Object.prototype.toString.call(d));  //betterway

// function Person(name){
//     this.name=name;
// };
// var e = new Person("jack");
// console.log(typeof e);
// //instacneof returns true of false if this object is found in proto type chain 
// console.log(e instanceof Person);

// console.log(typeof undefined);
// console.log(typeof null);


//---------- Chapter 7 video 67---------- Strict Mode 
//can be used in first line or inside fucntion 
// "use strict";
// var person;
// persom={};
// console.log(persom);

// function hi(){
//   //  "use strict";
//     var person1;
//     persom1={};
//     console.log(persom1);
    
// }
// hi();



// //---------- Chapter 8 video 70---------- Open Source Education 
// //we don't use new , $ or jQuery returns a new jQuery.fn.init it's easier
// // then it creates a new object from it and return it as an array 
// //later on it add it's prototype to every object of jQuery 
// var a = $("ul.people li");
// console.log(a);

// //Big word ALERT!
// //Method chaining: calling one method after another, and each method effects the parent object
// //basiclly the addClass Method return this , this here referce to object of the jQuery "Parent"
// //after it finish the add class it becomes $("ul.people").removeClass("people")
// var q= $("ul.people").addClass("context").removeClass("people");





//---------- Chapter 9 video 73---------- build our own framework

// var a = G$("john","Doe","es");
// console.log(a.fullName());
// a.log();
// a.greet(true);
 //a.HTMLGreeting(greeting,false);

////---------- Chapter 9 video 79---------- testing our framework
//adding event to button , which creates an object of our framework 
//hide the div of login , set the language value from options of the <select><option></select>
//use our object HTMLGreetings which takess a selector and and formal and select using jQuery
//$("greeting").html(msg) , msg = this.greeting();
// $('#login').click(function () { 
//     var John=G$("john","doe");
//      $('#logindiv').hide();
//      John.setlang($('#lang').val()).HTMLGreeting(greeting,true).log();
// });




//*************** Greeter.js library ***************
// ;(function (global, $) {

//     //here we create a function that accepts three parameters , and returns a new object from function constructor 
//     //Greeter.init , borrowed form jQuery
//     var Greeter = function (firstName, lastName, language) {
//         return new Greeter.init(firstName, lastName, language);
//     }

//     //supported language array of langugae supported to use indexing
//     var supportedLanguages = ["en", "es"];

//     //object literal of greetings we used it to accses using name value property greetings[this.language]
//     var greetings = {
//         en: "Hello!",
//         es: "Hola!"
//     };
//     //object literal of formalgreetings we used it to accses using name value property greetings[this.language]
//     var formalGreeting = {
//         en: "Greetings",
//         es: "Saludos"
//     }
//     //object literal of logmassages we used it to accses using name value property greetings[this.language]
//     var logMassages = {
//         en: "logged in",
//         es: "Inicio sesion"
//     };

//     //adding functions to the prototype which all object have access to it 
//     Greeter.prototype = {
//         //return full name function
//         fullName: function () {
//             return this.firstName + " " + this.lastName
//         },
//         //validate function of language
//         validate: function () {
//             //check if this.language is elemet if array if it's out range then it's not suppr
//             if (supportedLanguages.indexOf(this.language) === -1) {
//                 throw "Invaild Arguments";
//             }
//         },
//         //function greetings 
//         greeting: function () {
//             return greetings[this.language] + " " + this.fullName();
//         },
//         formalgretings: function () {
//             return formalGreeting[this.language] + " " + this.fullName();
//         },
//         setlang: function (language) {
//             this.language = language;
//             this.validate();
//             return this;
//         },
//         log: function () {
//             if (console) {
//                 console.log(logMassages[this.language] + " " + this.fullName());
//             }
//             return this;
//         },
//         greet: function (formal) {
//             var msg;
//             if (formal) {
//                 msg = this.formalgretings();
//             }
//             else {
//                 msg = this.greeting();
//             }
//             if (console) {
//                 console.log(msg);
//             }
//             //"this" refers to the calling object at exctuion time 
//             //it makes the method chainable
//             return this;
//         },
//         //adding method that accepts selector then uses jQuery
//         HTMLGreeting: function (selector, formal) {
//             //checks if jQuery exsists in context
//             if (!$) {
//                 throw "jQuery not found";
//             }
//             //checks if selector is given             
//             if (!selector) {
//                 throw "no selector";
//             }
//             var msg;
//             if (formal) {
//                 msg = this.formalgretings();
//             }
//             else {
//                 msg = this.greeting();
//             }
//             //uses jQuery functions 
//             $(selector).html(msg);
//             return this;
//         }
//     };

//     //function constructr of objects borrowed from jQuery
//     Greeter.init = function (firstName, lastName, language) {
//         var self = this;
//         this.firstName = firstName || "";
//         this.lastName = lastName || "";
//         this.language = language || "en";
//         this.validate();
//     };

//     //assigning the prototype of every object created to the prototype of Greeter, to make sure all objects have it 
//     Greeter.init.prototype = Greeter.prototype;

//     //exposing our framework to global context borrowed from jQuery 
//     //exposing function
//     global.Greeter = global.G$ = Greeter;
// }(window, jQuery))



//4-9-2018 **Mohamed Ibrahim 