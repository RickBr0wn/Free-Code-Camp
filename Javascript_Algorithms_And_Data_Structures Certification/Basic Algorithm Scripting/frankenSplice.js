/**
* A method that copies each element of the first array into the second array, in order.
* The items are inserted at the index n
* * None of the param arrays should be mutated
* @param `array` - The array to be inserted
* @param `array` - The array to be inserted into
* @param `number` - The index to be inserted at
* @returns `array` - The new array
*/
export const frankenSplice = (arr1, arr2, n) => {
  let arr3 = arr2.slice()
  arr3.splice(n, 0, ...arr1)
  return arr3
}

frankenSplice([1, 2, 3], [4, 5, 6], 1) //?
