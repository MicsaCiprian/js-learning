// This is a comment.
/* This is also a comment. */
console.log('#################### Introduction ####################');
// This JS file can be imported in the <body> tag or in the <head> tag, depends on the usage.
/* Example on how to include a library: <script src="script.js"></script> */

/* There are 3 types of function types: */

/* 1. This is a function declaration. */
// Function that can be used before it's declared.
function testFunction(testVar) {
  console.log(`Something ${testVar}`);
}

/* 2. This is a function expression. */
// Essentially a functyion value stored in a variable.
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

/* 3. Arrow functions. */
// Great for a quick one-line functions. Has no 'this' keyword (more on this later...)
const calcAge2 = (birthYear) => 2024 - birthYear;

// 7 types of primitives.
let age = 27; // 1. Number -> Floating point numbers - used for decimals and integers.
let firstName = 'Cip'; // 2. String -> Sequence of characters - used for text.
let male = true; // 3. Boolean -> Logical type that can only be true or false - used for taking decisions.
let test_var; // 4. undefined -> This is basically a variable that is declared, but not defined.
let something = null; // 5. Null - also means 'empty value'
// Symbol (ES2015) - Value that is unique and cannot be changed.
// BigInt (ES2020) - Larger integers than the Number type can hold.

// JavaScript has dynamic typing - We do not have to manually define the data type of the value stored in a variable.

// This is how we print to the console.
console.log(firstName);
alert('This is another type of printing, but using the alert()');

// Embed variables in string.
console.log(`My name is: ${firstName}`);
console.log('I have ', age, 'years old.');

// Typeof operator.
console.log('Typeof male variable is: ', typeof male);
console.log('Also, I can do: ', typeof 'Ciprian');

// More on variables.
// The first time we declare a variable, we have to use 'let'. After that, we can re-define the variable without the 'let'
// Even if the datatype of the initial variable was something different that re-definition, it still work.
firstName = 'Sandel';
console.log(`After re-definition: ${firstName}`);

// You cannot re-declare a declared variable previously.
// let firstName = "something"; // This won't work.

/* The 'var' keyword was used in the past to declare variables. */
/* We use the 'let' keywork to declare variables that can change later. */
let name = 'Cip'; // This can be changed in the future. Mutable variable.
const birthYear = 1996; // This cannot be changed in the future, because it's constant. Immutable variable.
// const birthYear; // This is wrong because we cannot create empty constant variables.

/* 'var' is the old way to declare a variable, prior to ES6. */
var myName = 'Cip'; // This is the 3'rd way to declare a variable, but this should be avoided.
myName = 'Utii';
console.log('#################### Introduction END ####################');

/* An operator allows us to transform values or combine multiple values. */

/* Mathematical / Arithmetic operators. */
/* Divison: 10 - 5 */
/* Multiplication: 10 * 5 */
/* Power: 2 ** 3 */
/* Sum: 2 + 5 */
/* Modulo: 10 % 3 */

console.log('#################### Operators ####################');
const first_name = 'Cip';
const last_name = 'Micsa';
const currentYear = 2024;
const ageCip = currentYear - 1996;
const ageNicole = currentYear - 2000;

/* Basic arithmetic operators. */
console.log(
  `You are ${ageCip} years old and Nicole is ${ageNicole} years old.`
);
console.log(
  `Cip's age divided: ${ageCip / 2} and Cip's age multiplied: ${ageCip * 2}`
);
console.log(`10 % 3 = ${10 % 3}`);
/* String concatenation. */
console.log(`String concatenation: ${first_name + ' ' + last_name}`);

/* Assignment operators. */
x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x++; // 101
x++; // 102
x--; // 101
console.log(`x = ${x}`);

/* Comparison operators. */
// More details on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
console.log('Comparison operators: >, <, >=, <= ');
console.log(`Is Cip older than Nicole? ${ageCip > ageNicole}`);
console.log(`Is Nicole underage? ${ageNicole <= 18}`);

console.log(
  `You can do smarter calculations directly: ${
    currentYear - 1996 > currentYear - 2000
  }`
);

console.log('#################### Operators END ####################');
console.log(
  '#################### Strings and Template Literals ####################'
);
const firstName1 = 'Cip';
const job = 'Programmer';
const birthYear3 = 1996;
const currentYear2 = 2024;

/* String concatenation with '+' sign. */
const fullDescription =
  "I'm " +
  firstName1 +
  ', a ' +
  (currentYear2 - birthYear) +
  ' years old ' +
  job +
  '!';
console.log(fullDescription);

/* Template literals. */
const fullDescription2 = `I'm ${firstName1}, a ${
  currentYear2 - birthYear
} years old ${job}!`;
console.log(fullDescription2);

/* Multi-line string. */
console.log('Something \n');
console.log('or \n');
console.log('Somewhere \n');

console.log(`Something
multiple
lines`);

console.log(
  '#################### Strings and Template Literals END ####################'
);
console.log('#################### IF / Else Statements ####################');
const age1 = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("You're old enough to drive! 🚗");
} else {
  console.log("You're not allowed to drive!");
}

console.log('if / else if / else example...');
if (age1 > 20) {
  console.log(`${age} is greater than 20.`);
} else if (age1 > 18) {
  console.log(`${age} is greater than 18.`);
} else {
  console.log('Underage.');
}
console.log(
  '#################### IF / Else Statements END ####################'
);
console.log(
  '#################### Type Conversion and Coercion ####################'
);
// Type conversion is when we manually convert from one type to another.
// Type coercion is when JavaScript automaticallly converts types behind the scenes.
console.log(
  'Javascript can convert to a number, to a string or to a boolean. It cannot convert to underfined or to null.'
);

const inputYear = '1991';
console.log(
  `If we want to add a number string type to int, we could use Number() to cast it.`
);
console.log(`${Number(inputYear)} + 10 = ${Number(inputYear) + 10}`);
console.log(`Without casting, we basically concatenate: ${inputYear + 10}`);

const testYear = 1991;
console.log(`Casting an int ${testYear} to string and adding 'years' ...`);
console.log(`${testYear} + years = ${String(testYear) + ' years'}`);

/* Converting a number to a string which is not possible. */
console.log(
  `Converting a number 'Cip 'which isn't a number and we get: ${Number(
    'Cip'
  )}, which stands for Not-A-Number.`
);

console.log(`Coercion examples...`);
console.log('I am ' + 27 + ' years old.'); // JS does the conversion automatically.
console.log('23' - '10' - 3); // On minus, it converts everything to numbers and does math.
console.log('23' + '10' - 3); // On +, it converts everything to strings and concatenates.
console.log('23' * '2'); // Does math here.
console.log('23' / '2'); // Also does math here.

console.log(
  '#################### Type Conversion and Coercion END ####################'
);
console.log(
  '################ Truthy and Falsy Values #################################'
);
/* In JavaScript, there are only 5 falsy values: 0, '', undefined, null, NaN */
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 10;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You have no money');
}

let height;
if (height) {
  console.log('Yay! Height is defined.');
} else {
  console.log('Height is undefined.');
}

console.log('##########################################################');
console.log(
  '################ Equality Op: == vs === ############################'
);

/* 1. === -> Strict Equality Operator
It is strict because it does not perform type coercion. It will return true or false value. 
It will return true only when both values are exactly the same.
*/

/* 2. == -> Loose Equality Operator
This equality operator actualy does type coercion.
*/

/* 3. !== -> Not Strict Equality Operator
    Negates 1.
*/

/* 4. != -> Not Loose Equality Operator
    Negates 2.
*/
/* THIS IS ADVICED TO BE USED. Strict Equality Operator Example. */
const age3 = 18;
if (age3 === 18) console.log('You just became an adult.');

/* Loose Equality Operator Example. */
const age4 = '80';
if (age4 == 80) console.log('You are an old person.');

const favourite = Number(prompt("What's your favourite number?"));
console.log(`You typed: ${favourite}`);

if (favourite == 23) {
  console.log('Cool! 23 is an amazing number.');
} else if (favourite == 7) {
  console.log('7 is also a cool number.');
} else {
  console.log(`${favourite} is not 23 or 7.`);
}

if (favourite !== 23) {
  console.log('Why not 23?');
}
console.log(
  '######################################################################'
);
console.log(
  '######################## Logical Operators ###############################'
);

const hasDriverLicence = true;
const hasGoodVision = true;

console.log(`AND OP: ${hasDriverLicence && hasGoodVision}`);
console.log(`OR OP: ${hasDriverLicence || hasGoodVision}`);
console.log(`Not OP: ${!hasDriverLicence}`);

console.log(
  '######################################################################'
);
console.log(
  '######################## Switch Statement ###############################'
);

const day = 'thursday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log("Oh no! It's monday...");
    break; // break is needed to stop the switch statement.
  case 'tuesday':
    console.log('Tuesday.. almost weekend!');
    break;
  case 'wednesday':
  case 'thursday':
    console.log(
      'You can have two cases and execute the same condition for them'
    );
    console.log('This is wednesday and thursday.');
    break;
  case 'friday':
    console.log("Yay it's friday!!!");
    break;
  case 'saturday':
  case 'sunday':
    console.log('Saturday and Sunday are part of the weekend!');
    break;
  default:
    console.log('I do not know what day is.');
}
console.log(
  '######################################################################'
);
console.log(
  '######################## Ternary Operator ###############################'
);

const age2 = 23;

const drink =
  age2 >= 18
    ? 'You are allowed to drink wine'
    : 'You are underaged. You can drink water';
console.log('Ternary operator example...');
console.log(`Drink: ${drink}`);

console.log(
  '######################################################################'
);
