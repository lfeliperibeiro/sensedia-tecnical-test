module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/src/__tests__"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
