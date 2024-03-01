// eslint-disable-next-line @typescript-eslint/no-explicit-any
const memoizer = <T extends (...args: any[]) => any>(func: T): T => {
  const cache: Map<string, ReturnType<T>> = new Map()

  return function (...args: never[]): ReturnType<T> {
    const key = args.join(',')

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>
    }

    const result = func(...args)

    cache.set(key, result)

    return result
  } as T
}

export default memoizer
