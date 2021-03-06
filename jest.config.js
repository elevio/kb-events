module.exports = {
  verbose: true,
  testMatch: [
    '<rootDir>/test/unit/**/*.js',
    '<rootDir>/src/**/test/index.js',
    '<rootDir>/src/**/*.spec.+(js|ts|tsx)',
    '<rootDir>/src/**/*.test.+(js|ts|tsx)',
  ],
  roots: ['<rootDir>/src'],
  coverageProvider: 'v8',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  collectCoverageFrom: ['src/**/*.ts'],
  watchPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': require.resolve('ts-jest'),
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  setupFilesAfterEnv: ['./src/testServer.ts'],
};
