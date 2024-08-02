// Coding challenge 1

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with there temperatures. */
/* Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above in the console. */
/*

Example: [17, 21, 23] will;print "... 17*C in 1 days, .. 21*C in 2 days ... 23*C in 3 days ..."

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arrayTemp) {
  let myLog = '';

  for (let i = 0; i < arrayTemp.length; i++) {
    myLog += `${arrayTemp[i]}°C in ${i + 1} days... `;
  }

  console.log(myLog);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));
