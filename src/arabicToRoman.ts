const arabicToRoman = (arabicNumber: number): string => {
  if (arabicNumber < 1 || arabicNumber > 3999) {
    throw new Error('Number out of range.')
  }

  const romanNumeralMappings: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  let romanNumber = ''

  for (const [value, numeral] of romanNumeralMappings) {
    while (arabicNumber >= value) {
      romanNumber += numeral

      arabicNumber -= value
    }
  }

  return romanNumber
}

export default arabicToRoman
