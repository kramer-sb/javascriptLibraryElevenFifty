let thirdArr = {keyA: [1,10,8,5,7,11]};

for (keyA in thirdArr){
    if (keyA[0]){
        console.log('Your number is even');
    } else {
      console.log('Your number is odd.');
    } 
}