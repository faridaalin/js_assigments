// string
var four = "4";
console.log(four);

// number
var four = 4;
console.log(four);

var add = 8 + 8;
var subtract = 8 - 8;
var multiply = 8 * 8;
var devide = 8 / 8;
var modulos = 10 % 3; /*10 % 3 // = 1 ; because 3 * 3 gets you 9, and 10 - 9 is 1.*/

// booloeans
var lightIsOn = false;
if (lightIsOn) {
    console.log("Light is on");
} else {
    console.log("Light is off");
}


//data types
var color = "red";
typeof(color);
console.log(typeof color);

var num = 100;
typeof num;
console.log(typeof num);

var isDay = true;
typeof isDay;
console.log(typeof isDay);




/*   Comparison Operators

== (equal to, checks only value)
=== (equal to, checks value and type)
!= (not equal to, cecks only value)
!== (not equal to, checks value and type)
> (greater than)
>= (greater than or equal to)
< (less than)
<= (less than or equal to)

Every comparison operation results in True or False value.
*/



// Conditional statements  if...else

//Hour
// If hours is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!


if (condition) {
    statement
}
else if (anotherCondition){
    statement
}
else if (yetAnotherCondition){
statement
}
else 
statement



var hour = 10; // change number 13, and 22 to see output.

if (hour >= 6 && hour < 12 )
   console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else 
    console.log('Good evening');


//switch
 var rating = 5; // change number to check

 switch(rating) {
     case 1:
         console.log('Very bad')
         break;
    case 2:
        console.log('Bad')
        break;
    case 3:
        console.log('Average')
        break;
    case 4:
        console.log('Good')
        break;
    case 5:
        console.log('Excelent')
        break;
    default:
        console.log('Enter a valid rating between 1 and 5');
 }

 //logical operators 
 /*
 && - and, returns true if both conditions are true
 || - or, returns true if any the condition is true
 ! not, returns true if the condition is false and vice versa
 */



// lopps
/* Different loops
For 
While
Do...while
For...in
For...of*/

// For 
/*
for (3 statements)
1 statement - initial expression, declares and initiales a variabel
2 condition - compare statement with something else, runs as long as the value condition is true
3 incerement Expression - 

for (let i = 0; ) //1: let - var, declare i and set to 0. i is short for index, commom for convention to use in for loops.
for (let i = 0; i < 5; ) //2: as lon as i is less than 5, the loop will execute  
for (let i = 0; i < 5; i++) //3: increment to increment the value of i with 1


for (let i = 0; i < 5; i++) {
 statement
}
 */

for (let i = 0; i < 5; i++) {
    console.log('Hello world')
   }

for (let i = 0; i < 5; i++) {
console.log('Hello world', i)
}

for (let i = 0; i < 5; i++) {
    if (i % 2 !== 0) console.log(i); // if the remainer is not 0. only odd numbers  between 0 - 4 will be printed 
   }

// for loop in reversed order
for (let i = 4; i >= 0; i--) {
if (i % 2 !== 0) console.log(i);
}



// array ["red", "blue", "green", "yellow"]



var myNumber = 7;
var myString = "dog";

console.log(myNumber > 8);
console.log(myNumber <= 8);
console.log(myString === "dog");
console.log(myString !== "cat");


