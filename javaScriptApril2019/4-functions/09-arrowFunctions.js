/* 
ARROW FUNCTIONS
*/

//normal function declaration
function coffee(){
    return 'coffee is good';
}

//normal function expression
//unnamed variable

let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());
 

//arrow functions always anonymous
//arrow function expression
let hotChocolate = ()=> {
    return 'hot chocolate is king';
}
console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s).`};
console.log(animals(3,4));

//concise vs. block body
//concise - a single argument means you can exclude the parens
//can also use one line, keep out without the use of return keyword and curlies
let apples = x => `there are ${x} apples`;
console.log(apples(10));

//block body
let bananas = (x) => {
    return `there are ${x} bananas`;
}
console.log(bananas(5));

//works the same as concise except - is a couple lines, need curlies and return keyword
//but did not have to use the parens around the variables. 

let func = () => 'hi';
console.log(func());

let secondFunc = ()=>
'hi';
console.log(secondFunc());

