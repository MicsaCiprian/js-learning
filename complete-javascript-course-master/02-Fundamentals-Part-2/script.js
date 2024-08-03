"use strict";
/* This is the strict mode. It has to be on the first line of the code (like a shebang line).
Strict mode changes some previously-accepted mistakes into errors.
*/

// Example 1. Typo on variable leads on undefined.
// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriverLicence = true; //Because of the strict mode, we will get an error that this variable is undefined.
// if (hasDriversLicence) console.log("I can drive. :D");

// // Example 2. Using reserved words with strict mode.
// const interface = 'Audio'; // Because of the strict mode, we will get an error on reserved word.
// const private = 534; // This is the same error as previous.

console.log(
  "################################## Functions #################################"
);

// Example 1. Normal function without any parameter and no return.
// This is a function declaration, because we use the keyword 'function'.
function logger() {
  console.log("[INFO] My name is Cip.");
}

// Example 2. Normal function with parameters and return.
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

console.log("[Example 1] Calling a simple function... ");
// Calling / Running / Invoking the function.
logger();

console.log("[Example 2] Calling a function with parameters and return...");
const myJuice = fruitProcessor(5, 0); // Assign to a variable the return of the function.
console.log(`My fruit processor returned: ${myJuice}`);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(`My fruit processor returned again: ${appleOrangeJuice}`);

console.log(
  "################### Function declarations vs Expressions #############################"
);

console.log(
  "The main practical difference is that we can actually call function declarations before they are defined in the code."
);
console.log("The function expressions we cannot call before they are defined.");
/* Example 1. Function Declaration. */
function calcAge(birthYear) {
  // Function parameter.
  return 2024 - birthYear;
}

/* Example 2. Function expression. 
This is also called an anonymous function.
*/
// const age3 = calcAge2; // This will produce an error because we are calling a function before declaring it.
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const myAge = calcAge(1996); // Function argument.
console.log(`My age: ${myAge}`);

const age2 = calcAge2;
console.log(`My age through an anonymous function: ${age2}`);

console.log("################### Arrow Functions ###################");
console.log(
  "An arrow function is basically a function expression that is shorter and faster to write."
);

// Example 3. Arrow Function.
const calcAge3 = (birthYear) => 2024 - birthYear;

/* Another example of an arrow function without any parameter. */
const myTestArrow = () => {
  console.log("This is a weird expression of a function...");
};
myTestArrow();

/* Another example of an arrow function with two parameters.
If you have a single parameter here, paranthesys are not required. */
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `[Arrow Functions] ${firstName} retires in: ${retirement} years.`;
};
console.log(yearsUntilRetirement(1996, "Cip"));
console.log(yearsUntilRetirement(1980, "Bob"));

console.log(
  "################### Functions Calling other Functions ###################"
);

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor1(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor1(2, 3));

console.log("################### Reviewing Functions ###################");

const calcAge4 = function (year) {
  return 2024 - year;
};

/* Now this just a regular function expression. */
const yearsUntilRetirement1 = function (birthYear, firstName) {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `[ReviewingFunctions] ${firstName} retires in: ${retirement} years`;
  } else {
    return `[ReviewingFunctions] ${firstName} already retired.`;
  }
};

console.log(yearsUntilRetirement1(1996, "Cip"));
console.log(yearsUntilRetirement1(1950, "Mike"));

console.log("################### Coding Challenge 1 ###################");

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgDolphins * 2 <= avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No team wins...");
//     }
// }
// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }

// /* Test 1. Calculate average scores. */
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(85, 54, 41);

// /* Test 1. Check Winner. */
// checkWinner(scoreDolphins, scoreKoalas);

// /* Test 2. Calculate average scores. */
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// /* Test 2. Check Winner. */
// checkWinner(scoreDolphins, scoreKoalas);

console.log("################### Introduction to Arrays ################### ");

console.log(
  "[Introduction to Arrays] Two most important data structures in javascript: Arrays and Objects. "
);
console.log("An array can hold any value type we want.");

/* This is called the literal syntax. */
const friends = ["Michael", "Steven", "Peter"];
console.log(`[First method] My first array of friends: ${friends}`);

const years = new Array(1991, 1984, 2008, 2020);
console.log(
  `[Second method] Using Array function to create an array: ${years}`
);

/* Extract elements from array. */
console.log(
  `[Extracting elements by index] Extracting first element from list by index ${friends} -> ${friends[0]}`
);

/* Get the lenght of the array. */
console.log(`${friends} array contains: ${friends.length} elements.`);
console.log(".lenght is called a property.");

/* Arrays are mutable. Replace element by index example. */
/* Only primitive values are immutable. */
console.log(`[Replacing by index example] Original array: ${friends}`);
console.log(`Replacing ${friends[friends.length - 1]}...`);
friends[2] = "Jay";
console.log(`[Replacing by index example] After replacement: ${friends}`);
console.log(friends);

console.log("We cannot replace the full array...");
// friends = ["Something", 3, 2, 1, true];

const differentDataTypes = [
  13,
  "Michael",
  true,
  false,
  "31",
  2017 - 33,
  [2, 3, 4],
  friends
];
console.log("[Different data types] An array can hold all data types:");
console.log(differentDataTypes);

// Exercise
const calcAge5 = function (birthYear) {
  return 2024 - birthYear;
};

const years1 = [1990, 1967, 2002, 2010, 2018];
const ages = [
  calcAge5(years1[0]),
  calcAge5(years1[1]),
  calcAge5(years[years.length - 1])
];
console.log(ages);

console.log("################### Basic Array Operations ###################");

const friends2 = ["Michael", "Steven", "Peter"];

/* Push an item in the array. */
console.log("[Push Method] Syntax: array.push()");
console.log(
  "[Push Method] Append an item to the array and return the lenght of the array."
);
console.log(`[Push Method] Before: ${friends2}`);
friends2.push("Mircea");
console.log(`[Push Method] After: ${friends2}`);

/* Unshift an item to the array. */
console.log("[Unshift Method] Syntax: array.unshift()");
console.log(
  "[Unshift Method] Insert an element to the beggining of the array and returns the new lenght of the array."
);
console.log(`[Unshift Method] Before: ${friends2}`);
friends2.unshift("Cip");
console.log(`[Unshift Method] After: ${friends2}`);

/* Remove the last element from the array. */
console.log("[Pop Method] Syntax: array.pop()");
console.log(
  "[Pop Method] Opposite to push method. Removes the last element from the array and returns it."
);
console.log(`[Pop Method] Before removing: ${friends2}`);
friends2.pop();
console.log(`[Pop Method] After removing: ${friends2}`);

/* Remove the first element from the array. */
console.log(
  "[Shift Method] Syntax: array.shift(). If array is empty, returns undefined."
);
console.log(
  "[Shift Method] Opposite to unshift method. Removes the first element from the array and returns it."
);
console.log(`[Shift Method] Before removing: ${friends2}`);
friends2.shift();
console.log(`[Shift Method] After removing: ${friends2}`);

/* Find an item index using indexOf. */
console.log(
  "[indexOf Method] Syntax: array.indexOf('string_to_search', *optional* starting_position). Returns position of element. If element not present, returns -1."
);
console.log(
  `[indexOf Method] Searching for Steven in the array. Found at position ${friends2.indexOf(
    "Steven"
  )} in the array: ${friends2}`
);
console.log(
  `[indexOf Method] An index from which the method starts can be specified. Found at position ${friends2.indexOf(
    "Peter",
    1
  )} in the array: ${friends2}`
);

/* Find an element in array. Returns true if found, false if not. */
console.log(
  "[includes Method] Syntax: array.includes('searched_element', *optional* start_index)"
);
console.log(
  "[includes Method] Search for an element in array. Returns true if found, false is not. Very important: This method does === comparison (no type coercion)."
);
console.log(
  `[includes Method] Searching for Steven in the array (${friends}). Found it: ${friends.includes(
    "Steven"
  )}`
);
console.log(
  `[includes Method] Searching for peter in the array (${friends}). You can also specify position. Found it: ${friends.includes(
    "peter",
    1
  )}`
);

// Coding challenge.
// function calcTip(billValue) {
//     return (billValue >= 50 && billValue <= 300) ? (billValue * 0.15) : (billValue * 0.2);
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(`Bills: ${bills}`);
// console.log(`Tips: ${tips}`);
// console.log(`Totals: ${totals}`);

console.log("################### Introduction to Objects ###################");
console.log(
  "In Objects, we define key-value pairs. An object is defined using the {} brackets. An array is defined using [] brackets."
);
console.log("Declaring an object with {} is called: literal syntax.");

console.log("Each key of an object is called a property.");

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedmann",
  age: 2024 - 1996,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"]
};

console.log("Jonas is an object. All items inside jonas are properties.");
console.log(jonas);

console.log("################### Dot vs Bracket Notation ###################");
console.log(
  "Getting a property from an object (jonas.lastName): ",
  jonas.lastName
);
console.log(
  "Getting a property from an object using brackets (jonas['lastName']): ",
  jonas["lastName"]
);
console.log(
  "The big difference is that in the bracket [] notation, we can put any expression we like (jonas['first' + nameKey])."
);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Chose between firstName, lastName, age, job and friends."
);

console.log(jonas.interestedIn);
console.log(
  "We get undefined when we are trying to access a property of an object that does not exist. Instead of dot notation, use expression."
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Property requested does not exist.");
}

console.log(
  "################### Add new properties to the object. ###################"
);
console.log(
  "You can add properties in two ways: jonas.location = 'Romania' or jonas['youtubeUser'] = 'Utii'"
);
console.log("Before adding: ", jonas);
jonas.location = "Romania";
jonas["youtubeUser"] = "Utii";
console.log("After adding: ", jonas);

// Challenge
// Jonas has 3 friends, and his best friend is called Michael.
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

console.log("################### Object Methods ###################");
const jonas1 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  // calcAge: function(birthYear) {
  //     return 2024 - birthYear;
  // }

  // calcAge: function() {
  //     console.log(this);
  //     return 2024 - this.birthYear;
  // }

  /* Method object example using this. With this., you have access to all the object properties without specifying them.*/
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  /* Method object that use other method object from the same object. */
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's licence.`;
  }
};

// console.log("Jonas have: " + jonas1.calcAge(1991) + ' years!');
console.log(jonas.age);

// Challenge - getSummary() method was created for this challenge.
console.log(jonas1.getSummary());

console.log("################### Coding Challenge #5 ###################");
function calcBmi(mass, height) {
  return mass / (height * height);
}

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`
  );
} else {
  console.log(
    `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`
  );
}

console.log("################### The for Loop ###################");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

console.log(
  "If the string is the same, it will not be printed x times. Instead, a small counter icon will appear in the Console Log."
);
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition 1.`);
}

console.log(
  "################### Looping Arrays, Breaking and Continuing ###################"
);

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2024 - 1996,
  "teacher",
  ["Michael", "Peter", "Steven"]
];

const types = [];

console.log("Printing all items from an array...");
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
  console.log("Added type: ", types[i]);
}

console.log(types);

console.log(
  "[Continue] Example. We printed only string types, ignoring the other ones using 'continue'."
);

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof [jonasArray[i]]);
}

console.log(
  "[Break] Example. We will stop the loop when a number is found in the array."
);

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(
    `Iteration #${i}: Element: ${jonasArray[i]}, type: ${typeof [
      jonasArray[i]
    ]}`
  );
}

console.log(
  "################### Looping backwards and Loops in Loops ###################"
);

const jonasArray2 = [
  "Jonas",
  "Schmedtmann",
  2024 - 1996,
  "teacher",
  ["Michael", "Peter", "Steven"]
];

console.log("Looping backwards...");
for (let i = jonasArray2.length - 1; i >= 0; i--) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("Nested loops...");

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Exercise ${exercise} --------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`[Exercise #${exercise}] - Lifting weights: ${rep}`);
  }
}

console.log("################### While Loop ###################");
console.log("[While Loop] Simple while loop example.");
let rep = 1;
while (rep <= 10) {
  console.log(`Counter: ${rep}`);
  rep++;
}

console.log(
  "[While Loop] Another example of a while loop - rolling dice until hit 6."
);

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("Loop will end. We hit 6!");
}

// Challenge #4
/* Write your code below. Good luck! 🙂 */
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

/* input array. */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);

let averageSum = calcAverage(bills);

console.log(`Average: ${averageSum}`);
