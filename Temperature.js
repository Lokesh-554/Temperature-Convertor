// JavaScript logic for temperature conversion
function convertTemperature() {
    var temperatureInput = document.getElementById("degrees").value;
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");
    if (isNaN(temperatureInput)) {
    resultElement.innerHTML = "Please enter a valid number for temperature.";
    return;
}

var temperature = parseFloat(temperatureInput);
var result;
if (unit === "celsius") {
    result = {
      celsius: temperature,
      fahrenheit: (temperature * 9/5) + 32,
      kelvin: temperature + 273.15
    };
  } else if (unit === "fahrenheit") {
    result = {
      celsius: (temperature - 32) * 5/9,
      fahrenheit: temperature,
      kelvin: (temperature - 32) * 5/9 + 273.15
    };
  } else if (unit === "kelvin") {
    result = {
      celsius: temperature - 273.15,
      fahrenheit: (temperature - 273.15) * 9/5 + 32,
      kelvin: temperature
    };
  }

  resultElement.innerHTML = "Converted Temperature: " + result.celsius.toFixed(2) + " °C, " + result.fahrenheit.toFixed(2) + " °F, " + result.kelvin.toFixed(2) + " K";
}
