const convertToCelsius = function(degreeFahrenheit) {
  if (typeof degreeFahrenheit !== 'number') {
    return "ERROR";
  }

  return Number(((degreeFahrenheit - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(degreeCelsius) {
  if (typeof degreeCelsius !== 'number') {
    return "ERROR";
  }

  return Number((degreeCelsius * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
