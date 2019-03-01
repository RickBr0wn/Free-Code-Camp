const checkForZero = num => {
  if (Array.from(num.toString()).length === 1) {
    return '0' + num
  }
  return num
}

checkForZero(6) //?
