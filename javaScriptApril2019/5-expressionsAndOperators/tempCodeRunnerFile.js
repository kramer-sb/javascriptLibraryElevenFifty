let greeting = 'salutations';

if(greeting.length > 10){
    console.log('that is a  long greeting')
} else if (greeting.length == 10){
    console.log('Your greeting is exactly 10 characters');
} else {
    console.log('what a normal greeting');
    }

greeting.length > 10 ? console.log('that is a long greeting') : greeting.length = 10 ? console.log('your greeting is exactly 10 characters') : console.log('what a normal greeting');