module.exports = {
  collectCoverage: !!process.env.WITH_COVERAGE,
  rootDir: process.cwd(),
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  coverageReporters: [
    'lcov',
    'text'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}'
  ],
  testMatch: [
    '<rootDir>/spec/**/*.spec.{ts,js}'
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
    '^.+\\.mjs$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    `${__dirname}/../lib/spec_helper.js`
  ],
};