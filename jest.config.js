module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/lib/setup-jest.js'],
    moduleNameMapper: {
        "test-utils": "<rootDir>/lib/test-utils.js",
        "@/(.*)$": "<rootDir>/src/$1"
    }
}