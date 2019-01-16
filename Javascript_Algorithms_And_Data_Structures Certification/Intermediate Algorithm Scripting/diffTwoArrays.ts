/**
 * A function to compare two arrays. It will return a new array with any of the items only found in one of the two given arrays, but not both.
 * In other words, it returns the symmetric difference of the two arrays.
 * @param `array` - The first array to be checked
 * @param `array` - The second array to be checked
 * @returns `array` - A new array containing the symmetric difference of the two arrays
 */
const diffArray = (arr1: number[], arr2: number[]) =>
  arr1
    .concat(arr2)
    .filter(item => arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1)

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
