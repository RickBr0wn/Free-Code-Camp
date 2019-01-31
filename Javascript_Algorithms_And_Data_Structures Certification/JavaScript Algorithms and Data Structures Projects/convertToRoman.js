function convertToRoman(num) {
  var decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var romanNumeralArray = [
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
  var answer = ''
  for (var i = 0; i < decimalArray.length; i++) {
    while (num % decimalArray[i] < num) {
      answer += romanNumeralArray[i]
      num -= decimalArray[i]
    }
  }
  return answer
}


convertToRoman(36)

convertToRoman(36) //?
convertToRoman(5) //?
convertToRoman(152) //?
