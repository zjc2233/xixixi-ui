module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  moduleNameMapper: {
    "^@api/(.*)$": "<rootDir>/src/server/api/$1",
    "^@views/(.*)$": "<rootDir>/src/views/$1",
    "^@com/(.*)$": "<rootDir>/src/components/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@pack(.*)$": "<rootDir>/packages$1"
  }
}
