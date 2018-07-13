;(function (global, $) {

    //here we create a function that accepts three parameters , and returns a new object from function constructor 
    //Greeter.init , borrowed form jQuery
    var Greeter = function (firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    }

    //supported language array of langugae supported to use indexing
    var supportedLanguages = ["en", "es"];

    //object literal of greetings we used it to accses using name value property greetings[this.language]
    var greetings = {
        en: "Hello!",
        es: "Hola!"
    };
    //object literal of formalgreetings we used it to accses using name value property greetings[this.language]
    var formalGreeting = {
        en: "Greetings",
        es: "Saludos"
    }
    //object literal of logmassages we used it to accses using name value property greetings[this.language]
    var logMassages = {
        en: "logged in",
        es: "Inicio sesion"
    };

    //adding functions to the prototype which all object have access to it 
    Greeter.prototype = {
        //return full name function
        fullName: function () {
            return this.firstName + " " + this.lastName
        },
        //validate function of language
        validate: function () {
            //check if this.language is elemet if array if it's out range then it's not suppr
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Invaild Arguments";
            }
        },
        //function greetings 
        greeting: function () {
            return greetings[this.language] + " " + this.fullName();
        },
        formalgretings: function () {
            return formalGreeting[this.language] + " " + this.fullName();
        },
        setlang: function (language) {
            this.language = language;
            this.validate();
            return this;
        },
        log: function () {
            if (console) {
                console.log(logMassages[this.language] + " " + this.fullName());
            }
            return this;
        },
        greet: function (formal) {
            var msg;
            if (formal) {
                msg = this.formalgretings();
            }
            else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }
            //"this" refers to the calling object at exctuion time 
            //it makes the method chainable
            return this;
        },
        //adding method that accepts selector then uses jQuery
        HTMLGreeting: function (selector, formal) {
            //checks if jQuery exsists in context
            if (!$) {
                throw "jQuery not found";
            }
            //checks if selector is given             
            if (!selector) {
                throw "no selector";
            }
            var msg;
            if (formal) {
                msg = this.formalgretings();
            }
            else {
                msg = this.greeting();
            }
            //uses jQuery functions 
            $(selector).html(msg);
            return this;
        }
    };

    //function constructr of objects borrowed from jQuery
    Greeter.init = function (firstName, lastName, language) {
        //var self = this;
        this.firstName = firstName || "";
        this.lastName = lastName || "";
        this.language = language || "en";
        this.validate();
    };

    //assigning the prototype of every object created to the prototype of Greeter, to make sure all objects have it 
    Greeter.init.prototype = Greeter.prototype;

    //exposing our framework to global context borrowed from jQuery 
    //exposing function
    global.Greeter = global.G$ = Greeter;
}(window, jQuery))