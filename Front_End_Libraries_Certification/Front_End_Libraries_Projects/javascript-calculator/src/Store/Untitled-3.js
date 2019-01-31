function checkForDecimal(str) {
  if (typeof str !== 'string')
    throw new Error('checkForDecimal function has been passed a non-string')

  const arr = str.split('')

  if (arr[0] === '0' && arr[1] !== '.')
    return arr.filter((item, index) => index).join('')

  return str
}

checkForDecimal('9123') //?
checkForDecimal('0123') //?
checkForDecimal('0.123') //?
