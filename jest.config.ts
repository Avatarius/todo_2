import type { JestConfigWithTsJest } from 'ts-jest';


const config: JestConfigWithTsJest = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest', {}
    ]
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
      "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
    }
};

export default config;
