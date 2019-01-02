/**
* A method to reverse a given string
* @param `string` - the string to be reversed
* @returns `string` - the reversed string
*/
export const reverseString = str => 
  str
    .split("")
    .reverse()
    .join("")

reverseString("Greetings from Earth")