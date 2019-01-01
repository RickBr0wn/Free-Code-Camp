// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

/**
* A method to reverse a given string
* @param `string` - the string to be reversed
* @returns `string` - the reversed string
*/
const reverseString = str => 
  str
    .split("")
    .reverse()
    .join("")

reverseString("Greetings from Earth")