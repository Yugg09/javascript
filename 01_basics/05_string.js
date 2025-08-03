const name = "yug-ch"
const repo = 50


//console.log(`hello my name is ${name} and my repo count is ${repo}`);


//how to declare strings

const gameName = new String('yug-hi-hello')
//string ek object h

console.log(gameName[0]);

//how to know about prototype 
console.log(gameName.__proto__); // we have given some methods

//how to know about length
console.log(gameName.length);
 
//accsessing some functions or methods 
console.log(gameName.toUpperCase());

//how to find character posi
 console.log(gameName.charAt(2));

 //find posi of character
console.log(gameName.indexOf('g'));

//devide a string
 const newstring = gameName.substring(0,4) //last wala include ni hota
console.log(newstring);

const anotherstring = gameName.slice(-8,1) //we can give -ve values here
console.log(anotherstring);


//trim and replace method
const stringg = "    yug  "
console.log(stringg.trim()); //removes extra space


const url = "https://yug.com/yug%20chaudjary"
console.log(url.replace('%20', '-'));

console.log(url.includes('yug'));


//string ocnvert to array
console.log(gameName.split('-'));


