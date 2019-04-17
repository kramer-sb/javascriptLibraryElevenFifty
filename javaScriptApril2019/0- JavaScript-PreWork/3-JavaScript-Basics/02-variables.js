//this exercise is from a Udemy class, where we're figuring out kelvin to farenheit temperature.
//today's temperature in Kelvin stored in variable 'kelvinTemp'
var kelvinTemp = 301; 

//today's Kelvin temperature converted to Celcius in variable 'celciusTemp'
var celciusTemp = kelvinTemp - 273.15; 

//temperature converted from celcius to farenheit
var farenheitTemp = celciusTemp * (9/5) + 32; 

// round the value of farenheit down and assign to 'farenheitTemp'
farenheitTemp = Math.floor(farenheitTemp); 

//use string concatenate to leave a message
//"The temperature is 'Farenheit' degrees Farenheit."
console.log('The temperature is ' + farenheitTemp + ' degrees Farenheit.'); 
