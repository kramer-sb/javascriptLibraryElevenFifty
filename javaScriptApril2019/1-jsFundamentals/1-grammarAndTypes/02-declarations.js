/*
Variables

1-grammarAndTypes
    02-declarations.js
    */

//what is a variable?
var a = 1;
var b = 2;
console.log(a + b);


//notes on naming variables
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above charactes, but cannot come first
//3) javaScript is case senstive--'Hello' and 'hello' are different variables. pay attention to case. 

/* 
DECLARATIONS, INITIALIZATIONS, AND ASSIGNMENT
*/

/*
declarations refer to when we 'declare' a variable.  . That's the left side of the above var examples

initializations refer to when a variable is assigned a value. values are equal to one and two above

assignment refers to giving a varialbe a value. This can be after initalization. 
*/

var x;
console.log('declaration1:', x); //undefined
x = 10;
console.log('initialization1:', x); //10

x = 33;
console.log('assignment1:',  x); //33

var y;
console.log(y); //undefined

y = 'hello';
console.log(y); //hello

y = 'you are my friend';
console.log(y); //you are my friend
/* 
var, let & const

var = 'old' keyword for variables
let = 'new' keyword for variables (intro with es6)
const = also 'new', declares unchangeable variables - has a lid. 
*/ 

let tonight = 'great';
const elevenFifty = 'amazing';
console.log(tonight, elevenFifty);

tonight = 'lovely';
console.log(tonight, elevenFifty);

//elevenFifty = 'super!'; //cannot change the constant variable of elevenFifty. See tempCodeRunnerFile for detail. 
