/* 
Hoisting

1-grammarAndTypes
04-hoisting.js
*/
//example 1
console.log(scissors);
var scissors = 'blue';

//example 1 breakdown
//you can define variables after you use them
var scissors;
console.log(scissors);
scissors = 'blue';

//example 2
function hoistTest() {
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//example 2 breakdown
function hoistTest() {
    var testVar; //goes to the top so is undefined as it is
    console.log(testVar);
    testVar = 10; //gets defined - assignment stays between the console logs
    console.log(testVar);
}
hoistTest(); //do not code with hoisting in mind! define the variable first!