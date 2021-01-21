module.exports = {
  verbose: true,
  testMatch: [
    '<rootDir>/test/unit/**/*.js',
    '<rootDir>/src/**/test/index.js',
    '<rootDir>/src/**/*.spec.+(js|ts|tsx)',
    '<rootDir>/src/**/*.test.+(js|ts|tsx)',
  ],
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
};
