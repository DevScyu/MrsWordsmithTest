import arabicToRoman from '../arabicToRoman'

describe('arabicToRoman', () => {
  test('should convert 1 to "I"', () => {
    expect(arabicToRoman(1)).toBe('I')
  })

  test('should convert 5 to "V"', () => {
    expect(arabicToRoman(5)).toBe('V')
  })

  test('should convert 10 to "X"', () => {
    expect(arabicToRoman(10)).toBe('X')
  })

  test('should convert 7 to "VII"', () => {
    expect(arabicToRoman(7)).toBe('VII')
  })

  test('should convert 15 to "XV"', () => {
    expect(arabicToRoman(15)).toBe('XV')
  })

  test('should convert 17 to "XVII"', () => {
    expect(arabicToRoman(17)).toBe('XVII')
  })

  test('should convert 23 to "XXIII"', () => {
    expect(arabicToRoman(23)).toBe('XXIII')
  })

  test('should convert 40 to "XL"', () => {
    expect(arabicToRoman(40)).toBe('XL')
  })

  test('should convert 49 to "XLIX"', () => {
    expect(arabicToRoman(49)).toBe('XLIX')
  })

  test('should convert 90 to "XC"', () => {
    expect(arabicToRoman(90)).toBe('XC')
  })

  test('should convert 99 to "XCIX"', () => {
    expect(arabicToRoman(99)).toBe('XCIX')
  })

  test('should convert 2022 to "MMXXII"', () => {
    expect(arabicToRoman(2022)).toBe('MMXXII')
  })

  test('should convert 3999 to "MMMCMXCIX"', () => {
    expect(arabicToRoman(3999)).toBe('MMMCMXCIX')
  })

  test('should convert 4000 to "Number out of range."', () => {
    expect(() => arabicToRoman(4000)).toThrow('Number out of range.')
  })

  test('should convert 0 to "Number out of range."', () => {
    expect(() => arabicToRoman(0)).toThrow('Number out of range.')
  })
})
