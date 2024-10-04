// ~ Enum is a way to define a set of named constants. Enums allow you to define
// ~ a collection of related values that can be used interchangeably in your code.

enum weather {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy"
}

const weatherNow = weather.Sunny
console.log(`The current weather is ${weatherNow}`) // Output => The current weather is sunny
