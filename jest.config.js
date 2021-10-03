module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*)'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.tsx?': 'ts-jest',
    '^.+\\.js': 'babel-jest',
    '.*\\.(vue)': 'vue-jest',
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.{vue,tsx,ts}',
    '<rootDir>/pages/**/*.{vue,tsx,ts}'
  ],
  testEnvironment: 'jsdom'
}
