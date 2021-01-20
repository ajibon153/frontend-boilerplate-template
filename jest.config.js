module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/.next/**',
    '!**/out/**',
    '!**/next.config.js',
    '!**/server.js',
    '!**/src/pages/_app.js',
    '!**/src/pages/_error.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/config/jest/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(css|scss)$': '<rootDir>/src/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
};
