/*
if else
*/
let weather = '75';

if (weather < 70){
    console.log('wear a jacket!');
} else {
    console.log('no jacket needed');
}

//you can blend complex conditionalass and if-else statements based on your need. 

if (weather > 70 && typeof weather === 'number'){
console.log('this weather is amazing');
} else {
    console.log('Either the temperature is cool, the variable is not a string, or both');
}

//else if

// allows to have a more complex tool

//if-elseif statements can be chained

let age = 15;

if (age >= 25){
    console.log('yay, you can rent a car!');
} else if (age >=21){
    console.log('Yay, you can drink!')
} else if (age >= 18){
    console.log('Yay, you can vote!')
} else {
    console.log('Sorry, you are too young to do anything fun but you live at home so YAY');
}
