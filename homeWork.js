/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/

let test = "Welcome to Strive School"

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
let num1 = 10
let num2 = 20 
let sum = num1+num2
/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

for (let i = 0; i < 20; i++) {
    let random = 0;
    for (let k = 0; k < Math.floor(Math.random() * 20); k++) {
        random++;
    }
    console.log(random);
}

/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
/*let me = {
 name : "Muhammad Javaid",
 surName : "Javaid",
 age : 33

}*/

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/
 let me = {
 name : "Muhammad Javaid",
 surName : "Javaid",
 age : 33

}
console.log(me) //here will show in bash me object with all property
if(me.age===33)
 delete me.age
 console.log(me) // here will show in bash terminal without the age properties 

 /* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
me.skill=["javascript","Html","css"] //here we have added an array of skrills
console.log(me)
/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
delete me.skill // here we have delete the skills of array
console.log(me)

// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
const dice = function (minValue , maxValue ){

minValue = Math.ceil(minValue)
maxValue = Math.floor(maxValue)
let result= Math.floor( Math.random()*(maxValue-minValue)) // + min vale not added still show random number 
console.log(result)
}
dice(1,8)  // here dice 

/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function(num1,num2){
 let result = Math.max(num1,num2)
console.log(result) // will show the big number of two parameter of numbers
}
whoIsBigger(6,1)  

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
const splitMe = function(str){

 let splitString = str.split("")
 //splitString.split("")
 console.log(splitString)
}
splitMe("I love coding")

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/
/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/
const onlyLetters = function(str){
 //for(let letter in str)
 let newstring = str.replace(/[0-9]/g,'');
console.log(newstring)
}
onlyLetters("I 45have 65dogs")
/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/
/*
const isThisAnEmail = function( str1){
 let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // regular expression
 if(mailformat.text(str1))

 console.log("Valid email address:",str1)
 else 
 console.log("Incalid Email Address")
}
isThisAnEmail("mike@gmail.com")*/
/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
const primeNumber = function(number1,nummber2){
 
}