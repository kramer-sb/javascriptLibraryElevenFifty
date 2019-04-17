// // for (let i = 0; i < 10; i++){
// //     console.log(i);
// // }

// // let parentThing = [1, 'Tracy', false, {key: 'playing'}];
// // for (let thing in parentThing){ //enumerable collection
// //     console.log(thing);
// // }

// // let parentThing = [1, 'Tracy', false, {key: 'playing'}];
// // for (let thing in parentThing){ //enumerable collection
// //     console.log(parentThing[thing]);
// // }

// // //for-in example 3

// // let obj = {keyA:true, keyB: 'Alan', keyC:1,2,3]};
// // for (let placehder in obj){
// //     consoleog(obj.placeholder);
// // } //three undefined because

// // let obj = {keyA: true, keyB: 'Alan', keyC: [1,2,3]};
// // for (let placeholder in obj){
// //     console.log(obj[placeholder]);
// //     console.log(obj['keyA']);
// // } 



// let obj2 = {first: '1150 Academy', second: 1150, third: false};
//     for (let placeholder in obj2){
//         console.log(obj2[placeholder]);
//     }





//     /*
// Challenge 1:
// Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.  The function should console.log a random number between 5 and 7.  Once you've completed the challenge with a for-loop, see if you can make this work with a for-of loop.  If you can solve that problem, see if you can solve this with a for-each loop.  Note that for-of and for-each loops require slightly different conditions to work than
// a for loop requires. */

// // for (let i = 0; i < 10; i++){
// //     randNumber();
// // }   

// // function randNumber(){
// //     console.log(Math.random());
// // }

// function faveFood (dinner, dessert){
//     return console.log(`My favorite foods are ${dinner} and ${dessert}`);
// }
// faveFood('salmon', 'tiramisu');
// faveFood('chinese','chocolate');

// //function composition

// function first(inputFunction){
//     inputFunction();
// }

// function second(){
//     console.log('functions are amazing but also hard!')
// }

// first(second);

// //challenge 2
// /*Challenge 2:
// Let's compose functions!  Your first function should take a function as input and return that function with a function call.  Your second function should take a string as input and return that string with extra stuff added to that string.  Console.log the results of your function calls.  Additional information is below to help clarify what you're doing (the below is just an example):first function: input-secondFunc output-secondFunc('coding is great!'second function: input-'coding is great!' output-'coding is great!  pie is, too!'*/


// function firstFunc(funcParam){
//     return funcParam('Coding is great!');
// }

// function secondFunc(str){
//     return str + ' Pie is too!'
// }

// console.log(firstFunc(secondFunc));




// // console.log(secondFunc('coding is great'));

// function first (num){
//     return num(2);
// }

// function secondFunc(num2){
//     return num2 + ' this is the number 2';
// }
// console.log(first(secondFunc));

let arr = [1,10,8,5,7,11];

for (let i = 0; i <= 5 ; i++){
  if (arr[i] % 2 === 0){
    console.log('your number is even');
} else {
  console.log('your number is odd.');
}}

let arr = [1,10,8,5,7,11];


