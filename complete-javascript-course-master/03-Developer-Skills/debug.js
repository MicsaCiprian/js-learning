const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 10,
    // C - Fix the bug.
    // value: Number(prompt('Enter Degrees Celsius: ')),
    // value: prompt('Enter Degrees Celsius: ') // This function always return a string.
  };

  const kelvin = measurement.value + 273;

  // B - Find the Bug.

  console.table(measurement);
  //   console.log(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  return kelvin;
};
// A - identify the bug.
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  //   let max = temps[0];
  //   let min = temps[0];

  // Introduce a bug.
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
