// /* arrays 

// what is an arrya>
// -has []brackets
// -can hold multiple data types in an ordered ways (0, 1, etc)

// */

// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
// //hidden keys     0         1         2       3     4    5     |------6-----|
// console.log(typeof students); //prints as an object, because arrays are built on the back of an object
// console.log(students instanceof Array); //prints true because it is an array
// console.log(students[2]); //gives us back Rhys
// console.log(students[6]); //will return entire array

// let name = students[6][1]; //can get just Iesha because we're drilling down into the array
// console.log(`Hello, ${name}, you look nice!`); // need to remember that ${} isn't just for an object. 

//recall for-of loops 
let food = ['pecan pie', 'shrimp', 'quesa', 'cheesecake', 'hotdog'];

for (f of food){
    console.log(f + ' is amazing'); //we can log additional info with the console.log
}

// //array methods
// food.push('pizza')
// console.log(food);
// food.splice(1,1,'bananas');
// console.log(food);
// food.splice(2,0,'sweet pot pie');
// console.log(food);
// food.pop();
// console.log(food);

// food = food.slice(2,5)
// console.log(food);

//forEach allows us to iterate with loops specifically and we can directly grab both the elements and their index numbers.

// food.forEach((f)=> console.log(f));//grabs each item in the array and it puts it on its own line. 

//we can log the value and the index in this for loop 
//anything in the parenthesis is the code to be repeated
food.forEach((food, index) => {
    console.log(`The ${food} in our array is a the position ${index}.`);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies); //returns an array of our movies, each on own line
movies.splice(3, 1, 'The League of Extra Gentlemen');

movies.forEach(movie => console.log(movie)); // the forEach method expects an array
console.log(movies.length);

//do the following with an array
//check if we are working with an array
//flip the values within the array
//index 4 is now 0, etc.
//using a method only, let's print the values of the newly arranged array

let arr = new Array (1,2,3,4,5);
if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}