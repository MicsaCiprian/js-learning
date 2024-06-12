// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

function sortArray(dataArray) {
  return dataArray.sort(function (a, b) {
    return a - b;
  });
}

function tempAmplitude(values) {
  return values[values.length - 1] - values[0];
}

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const sortedValues = sortArray(temperatures);
const finalAns = tempAmplitude(sortedValues);

console.log(temperatures);
console.log(sortedValues);
console.log(`Temperature amplitude: ${finalAns}`);

/* Course solution */
const calcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;
    if (curTemp > maxTemp) {
      maxTemp = curTemp;
    }
    if (curTemp < minTemp) {
      minTemp = curTemp;
    }
  }
  console.log(
    `Min value: ${minTemp}, Max value: ${maxTemp}, Amplitude: ${
      maxTemp - minTemp
    }`
  );
  return maxTemp - minTemp;
};

const amplitude = calcTempAmplitude(temperatures);
/* ################################################ */

// Problem 2. Function should now receive 2 arrays of temps.

// Same fix, just merge the two arrays.
const array_1 = [1, -3, -10, -6, "error"];
const array_2 = [5, 6, 9, 0, -5, "error"];

const mergedArrays = array_1.concat(array_2);
const secondSolution = calcTempAmplitude(mergedArrays);
