/**
* A method to return the factorial of the provided integer  
* * Uses `recursion`
* @param `number` - the number to be factorialized
* @returns `number` - the factorial of the given integer
*/
export const factorialize = num => {
  if (num < 0) return -1
    else if(num == 0) return 1
    else return (num * factorialize(num - 1))
}
  
factorialize(5) //?