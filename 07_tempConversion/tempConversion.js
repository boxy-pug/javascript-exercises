const convertToCelsius = function(num) {
  let convertedToCelsius = (num - 32) * (5 / 9);
  return Math.round(convertedToCelsius * 10) / 10;
};

const convertToFahrenheit = function(num) {
  let convertedToFarenheit = num * (9 / 5) + 32;
  return Math.round(convertedToFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
