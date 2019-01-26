// function convertToRoman(num) {
//   var decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
//   var romanNumeralArray = [
//     'M',
//     'CM',
//     'D',
//     'CD',
//     'C',
//     'XC',
//     'L',
//     'XL',
//     'X',
//     'IX',
//     'V',
//     'IV',
//     'I'
//   ]
//   var answer = ''
//   var test = 36 % 10

//   for (var i = 0; i < decimalArray.length; i++) {
//     while (num % decimalArray[i] < num) {
//       answer += romanNumeralArray[i]
//       num -= decimalArray[i]
//     }
//   }

//   return answer
// }

const convertToRoman = num => {
  const decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romanNumeralArray = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ]

  return decimalArray.map((decimal, index, array) => {
    let answer
    console.log(decimal)
    while (num % decimal < num) {
      num -= decimalArray[index]
      answer += romanNumeralArray[index]
    }
    return answer
  })
}

convertToRoman(36)

convertToRoman(36) //?
convertToRoman(5) //?
convertToRoman(152) //?
