

// 1.How to connect Js and Html?
// A: For connecting JS to HTML , at 1st we have to create a (Name).html file and generate a HTML boilerplate by typing ! and enter.Then in body rag we have to create a tag (script).The format of script tag is <script scr="./(name).js"></script>.Now The JS will bee Connected to HTML.



// 2.How to Write Variables in Javascript? Write at least 3 Variables.
// A: For writing variables we use var .
// Syntax of var is var Reza = "WebDev" .
// var means variable there is 2 part in syntax 1st a name and 2nd value it could be a string or object or any data type.

var Reza = "WebDev" ;

// 1st We have to remember that there should be no number before name , Insted we can use number after name.

var Wasif1 = true ;

// 2nd we can use camel casing in name.
// Ex:

var KamalHosein = 13 ;

// Here we can see Kamals K capital and Hoseins H capital in single word.




// 3.What is the difference between let, var, and const variables?
// A: var means variable and let is the upgraded version of var , other hand const means constant.
// When we have to change the value many times and use same name in many places we use var.When we want to use var like constant but still we can use it many times we use let and const is use for a constant value so we cant use it only once.



// 4.Suppose you want to print your name on the console. How do you write that?
// A: we can write our name with var/let/const with 2 syntax like var (any name) = "your name",let (any name) = "your name",const (any name) = "your name".Note yoy can't use smaller case just name.
// wrong = [const name = "your name"].

const Name = "Reza Tahseen" ;

// Now we have to use console.log(name) and it will show on console.

console.log(Name) ;

// 5.Suppose you want to print your name on the alert box. How do you write that?
// A: We can print our name 2 ways .
// 1st by making a const/let/var .
// 2nd alert("your name") .

alert(Name) ;

alert("My Name") ;




// 6.Take- two variables, the first number, and the second number, and then print their sum on the console.

// A: We can do it in 2 ways 

// 1st way:

var FirstNumber = 10 ;

var SecontNumber = 10 ;

console.log(FirstNumber+SecontNumber) ;

// 2nd way:

var Sum = FirstNumber+SecontNumber ;

console.log(Sum)
