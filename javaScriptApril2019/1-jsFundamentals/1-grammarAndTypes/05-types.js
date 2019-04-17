/* 
types 
1-grammarAndTypes
 05-types.js
 */

 //Boolean

 var on = true;
 console.log(on);

 let off = false;
 console.log(off);

 //boolean can represent: true/false, yes/no, on/off, 0/1

//undefined

/* undefined - variable has been declared but has not been assigned a value
*/

let grass;
console.log(grass);

var undef = 'undefined';
console.log(undef);

//null

/* 
null means a variable has been declared and assigned a value of null
*/

var empty = null;
console.log(empty);

/* 
null and undefined both represent variables with no value inside
think of it this way:
null values are for gag gifts that are boxes intentially given with nothing inside because that's the gag
undefined values are gifts given when the person has forgotten to put the gift inside.
*/
//numbers

let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999
console.log(precise);

let rounded = 9999999999999999
console.log(rounded);

let notQuite = 0.2 + 0.1; // this brings back 0.3000000000004 or so. LOTS of zeros
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; //0.3 because we lose a decimal form in the parens, but then converts to a decimal. JS is weird. Use an outside open source for numbers IOW. 
console.log(numbersAreHard);

//strings

/* strings are any value within quotes
spits out value within quotes */

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//js doesn't care if you store single or double. 

//string concatenation vs addition

let first = 1050 + 100; //adds when numbers
let second = '1050' + '100'; //combines when number, or concatenates
console.log(first);
console.log(second);

let third = 1050 + '100'; //treats the number as a string - type coercion
console.log(third);
console.log(typeof third);

//interpolation
//lets you use string with dynamic content require backticks

//example 1
let age = 32;
let string = `my age is: ${age}`;
console.log(string);

//objects

/* 
what is an object?

an object is a container that stores property names and values
it can old multiple data types
denoted by curly braces
have keys and values
color = key / blue = value

name the thing being stored then store it
objects can store many things.
keys & values separated with colon and each key is separated by a comma.
key/value pairs
*/

let hulk =  {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);

console.log(hulk.age);
console.log(hulk.color);
console.log(typeof hulk);

//arrays
//store multiple values in an ordered way.
//they, too, hold multiple data types.
//denoted by square brackets.
//have values

var stepsToBrushTeeth =['uncap toothpaste', 'squeeze toothpaste', 'put water on brush', 'brush', 'clean toothbrush'];
//console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]);
console.log(typeof stepsToBrushTeeth);
