// function checkForDecimal(str) {
//   if (typeof str !== 'string')
//     throw new Error('checkForDecimal function has been passed a non-string')

//   const arr = Array.from(str)

//   if (arr[0] === '0' && arr[1] !== '.')
//     return arr.filter((item, index) => index).join('')

//   return str

//   // const arr = Array.from(str)
//   // let answer = null

//   // if (arr[0] === '0') answer = '0 first'
//   // if (arr[1] === '.') answer = '. 2nd'
//   // if (arr[0] === '0' && arr[1] === '.') answer = 'both'
// }

// checkForDecimal('912.3') //?
// checkForDecimal('01.23') //?
// checkForDecimal('0.123') //?

containsADot = str => Array.from(str).filter((item) => item === '.').length > 0

containsADot('912.3') //?
containsADot('01.23') //?
containsADot('0123') //?
