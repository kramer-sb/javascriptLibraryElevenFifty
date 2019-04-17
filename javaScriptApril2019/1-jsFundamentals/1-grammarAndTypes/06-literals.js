/*
Literals
1-grammarAndTypes
06-literals.js
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(weekDays.toString());
console.log(weekDays[0]);

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}
console.log(soup.c);

//array and object literals are complex or dynamic types can hold primitive and complex types
//can hold arrays, objects, functions

let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLit = {num: 1, boolean: true, string: 'academy', arr: [1,2,3], obj: {key: "test"},func: function(){return 'yes'}};
console.log(complexObjLit.func);
console.log(complexObjLit.arr);
console.log(complexObjLit.num);