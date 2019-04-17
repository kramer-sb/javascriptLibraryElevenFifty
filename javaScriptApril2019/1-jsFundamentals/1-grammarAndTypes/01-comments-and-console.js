/*
comments

1-grammarAndTypes
    01-comments-and-console.js
*/

//value of a comment:  some of this is muscle memory 
//further your ability to remember 
//communicates to anyone reading our code

//types of comments:
//1) single-line comment: more common

/* 2) Multi-line comment
can be multiple lines because
they
are 
within
the
comment
brackets
 */

 //console.log.
 //outputs some message to the console - still a best tool for testing code because it is quick AF - immediate

console.log('this is a console.log message');

console.log('you can separate parts of a console message with commas,' , 'just like this');

console.log(13,15,17,18);

//console.log and debugging
//we can debug with console.log messages in two big ways:
//1) we can check the status of some javascript 'thing'
//2) we can check a process we have built with repeated console.log messages

//example 1
var sampleName = 'brie';
console.log(sampleName);

//example 2
var sampleNum = 1;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);
