/* repl 02-01
--Using the array [1, 10, 8, 5, 7, 11], write a for loop that console.logs 'your number is even' if the number is even and 'your number is odd' if your number is odd.
--Once you've solved this with a for loop, solve this with a for-of loop.
--Finally, solve this challenge with a for-in loop. */


//
/* 
Use the function 'objectChecker' to accept the object {name: 'Batman', age: 42, isVillain: false}.  Your function should return an array that has three elements inside: a)  an array of all the keys in the object,
b)  an array of all the values in the object, c)  the number of key-value pairs in the object.  Make sure the array has items a, b, and c in order. Be sure to console.log what your function returns so you can see it!
*/


let bruceWayne ={
    name: 'Batman',
    age: 42,
    isVillain: false
}

function iAmBatman () {
    return console.log(Object.keys(bruceWayne), (Object.keys(bruceWayne).length),(Object.values(bruceWayne)));
}

iAmBatman();

// console.log(Object.keys(bruceWayne).toString());
// console.log(typeof bruceWayne.name, typeof bruceWayne.age, typeof bruceWayne.isVillain); //gives us type of each key
// console.log(Object.keys(bruceWayne)); //this gives us an arry of the keys for the object ['name','age', 'villain']
// console.log(Object.keys(bruceWayne).length); //this gives the number keys in the object  - 3
// console.log(Object.values(bruceWayne)); //this gives us the array with the key values ['Batman', 42, 'false']

/* Write a first function which takes a function as a parameter and the first function runs a loop inside.  This loop should run 10 times and call the second function.  Every time the second function is called, it should add 5 more to a variable (initialized to 3) passed to it from the first function.  Once the loop is finished, return the increased variable within the first function.

Here's a hint to get you started:

Inside first function:
  make a variable
  start the loop
    call the second function which adds to the variable
    call the second function again
    ...
  end the loop
  return the variable

Outside first function:
  grab the result of the first function call
  console.log the grabbed result 
  */