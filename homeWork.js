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