/*
FUNCTIONS
*/

//general ideas : at their broadest level, functions do the following
//1) take come input which the function will handle/process
//2) process the input given to them
//3) usually but not always return some value
//4) can be invoked/used as many times as we want cutting down on reps

//example 1

function newFunc(num) {
    return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//can call the function over and over. 
//example 2
function sentence(firstName, lastName) {
    return `My first name is ${firstName} and my last name is ${lastName}`
}
console.log(sentence('Tyler', 'Shelton'));
console.log(sentence('Brie', 'Kramer'))
console.log(sentence('Jonathan', 'Huer'));

let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);

//example3

//let's build a function that takes a complex type -- an array in this case
//and console.logs each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null],'heya!'];
let arr2 =- [5,6,7,8,9,10];

function iteratorFunc(inputArr) {
    for (let element of inputArr){
        console.log(element)
    }
}
iteratorFunc(arr);