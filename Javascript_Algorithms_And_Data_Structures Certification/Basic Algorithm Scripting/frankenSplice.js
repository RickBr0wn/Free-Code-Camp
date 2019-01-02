// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

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
	
	frankenSplice([1, 2], ["a", "b"], 1)