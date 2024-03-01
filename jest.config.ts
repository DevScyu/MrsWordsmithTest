import type { Config } from 'jest'

export default async (): Promise<Config> => {
  return {
    roots: ['<rootDir>/src'],
    testRegex: '.test.ts$',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    silent: true,
  }
}
