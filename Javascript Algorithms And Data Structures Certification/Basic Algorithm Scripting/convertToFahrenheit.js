// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9 / 5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.Use the variable fahrenheit already defined
// and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
// Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
// Don 't worry too much about the function and return statements as they will be covered in future challenges.
// For now, only use operators that you have already learned.

/**
 * A method to convert Celsius Temperatures into Fahrenheit
 * @param `number` - The temperature (in Celsius) to be converted
 * @returns `number` - The temperature in Fahrenheit
 */
const convertToF = celsius => celsius * (9 / 5) + 32;

convertToF(0);
