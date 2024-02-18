function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const celsius = 36
const fahrenheit =  92

console.log(celsiusToFahrenheit(celsius))
console.log(fahrenheitToCelsius(fahrenheit))