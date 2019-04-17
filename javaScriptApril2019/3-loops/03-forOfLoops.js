/* 
FOR OF LOOPS
*/

let student = {name: 'Peter', awesome = true, degree: 'javascript', week: 1};

for (item of student){
    console.log(item);
    console.log(student[item]);
}

let newArr = [1,10,8,5,7,11];
for (item of newArr){
    if (item % 2 === 0){
        console.log('Your number is even');
    } else {
      console.log('Your number is odd.');
    }
}

let thirdArr = {keyA: [1,10,8,5,7,11]};

for (keyA in thirdArr){
    if (keyA. in thirdArr % === 0){
        console.log('Your number is even');
    } else {
      console.log('Your number is odd.');
    } 
}