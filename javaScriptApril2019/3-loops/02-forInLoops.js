/* 
FOR IN LOOPS
*/

 let student = {name: 'Peter', awesome = true, degree: 'javascript', week: 1};

 for (item in student){
     console.log(item);
     console.log(student[item]);
 }

 let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

 for (cat in catArray){
     console.log(cat);
     console.log(catArray[cat]);
 }


 //let's write a for-in loop that capitalizes the first letter of a name.
 