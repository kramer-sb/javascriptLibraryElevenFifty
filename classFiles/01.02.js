//arrays
let newArr =['Brie', 17, true, {ketchup: true, pickles: false, meat: true}];
//arrays have numbered elements. the numbers are indexes and the values are the elements 

// console.log(newArr[3]); //shows the first

// newArr[3] = 'Zach is one bad dude with styling';

// console.log(newArr[3]); //shows when we've changed 3

console.log(newArr[3]);
console.log(newArr[3].pickles);
console.log(newArr[3].ketchup);
newArr[3].pickles = true;

//conditionals
let isRainy = true;
let isWarm = true;

if (isRainy){
    console.log('bring your umbrella')
} else {
    console.log('leave the umbrella at home');
}

if (isWarm){
    console.log('wear shorts!');
} else {
    console.log('wear a parka');
}


let gpas =[1.9, 3.5, 4.0, 2.8];
let singleGPA = gpas[1];

if (singleGPA == 4.0) {
    console.log('wow, that\'s amazing');
} else if (singleGpa >= 3.0){
    console.log('that is a strong gpa');
} else {
    console.log('eh, you might wanna hit the books')
}

/*Challenge 1:
Write an array with at least 5 different numbers stored as values in the array.  Use if-elseif statements to
change one value of the array based upon the index number passed to the conditional.  Use the =, +=, /=, 
%=, and **= operators to make the change of the array value (only use one operator per conditional 
statement).*/

// let oreo = [1,2,3,4,5];
// let indexNum = 3;

// if (indexNum == 0){
//     oreo[0] **= 5;
// } else if (indexNum == 1)  

// /* Challenge 2:
// Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
// genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
// objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
// objects, each of which stores name and color.

// Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
// character, and colors for the objects the characters have.*/

// let myMovie = {
//     nameOfMovie: 'Star Trek',
//     runTime: 128,
//     character1: 'Chris Pine',
//     character2: 'Zachary Quinto',
//     genre: 'Sci-fi'
// }

// console.log(myMovie.nameOfMovie, myMovie.runTime, myMovie.character1, myMovie.character2, myMovie.genre);
let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 'long',
    characters: {
        charOne: {
            name: 'Legolas',
            age: 2931,
        },
        charTwo: {
            name: 'Gandalf',
            age: 2019,
        }
    },
    genre: 'Action & Adventure'
}

console.log(lotrObj.characters);

//1st example:
console.log(first);
console.log(second);
console.log(third);
var first = 1;
let second = 2;
const third = 3;

//1)undefined
//2)error name not defined
//3) error name not defined


// //2nd example:
// hoistTest();
// var first = 5;
// function hoistTest() {
//   console.log(first);
// }

function hoistTest(){
    console.log(first, second, third);
    if (true){
      var first = 1;
      let second = 2;
      const third = 3;
    }
    console.log(first, second, third);
  }
  hoistTest();