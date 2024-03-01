import memoizer from '../memoizer'

describe('memoizer', () => {
  test('should memoize a function correctly', () => {
    const add = jest.fn((a: number, b: number) => a + b)

    const memoizedAdd = memoizer(add)

    memoizedAdd(2, 3)
    memoizedAdd(2, 3)

    expect(add).toHaveBeenCalledTimes(1)
  })

  test('should memoize function with different arguments', () => {
    const add = jest.fn((a: number, b: number) => a + b)

    const memoizedAdd = memoizer(add)

    memoizedAdd(2, 3)
    memoizedAdd(4, 5)

    expect(add).toHaveBeenCalledTimes(2)
  })

  test('should memoize function with multiple arguments', () => {
    const multiply = jest.fn((a: number, b: number, c: number) => a * b * c)

    const memoizedMultiply = memoizer(multiply)

    memoizedMultiply(2, 3, 4)
    memoizedMultiply(2, 3, 4)

    expect(multiply).toHaveBeenCalledTimes(1)
  })

  test('should memoize function with different order of arguments', () => {
    const subtract = jest.fn((a: number, b: number) => a - b)

    const memoizedSubtract = memoizer(subtract)

    memoizedSubtract(5, 2)
    memoizedSubtract(2, 5)

    expect(subtract).toHaveBeenCalledTimes(2)
  })

  test('should memoize function with different types of arguments', () => {
    const concat = jest.fn((a: string, b: number) => a + b)

    const memoizedConcat = memoizer(concat)

    memoizedConcat('Hello', 5)
    memoizedConcat('Hello', 5)

    expect(concat).toHaveBeenCalledTimes(1)
  })

  test('should memoize function with different return types', () => {
    const identity = jest.fn((value: string | number) => value)

    const memoizedIdentity = memoizer(identity)

    memoizedIdentity('Hello')
    memoizedIdentity(42)
    memoizedIdentity(42)

    expect(identity).toHaveBeenCalledTimes(2)
  })
})
