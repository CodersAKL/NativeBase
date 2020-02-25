const { defaults: tsjPreset } = require('ts-jest/presets');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.tsx?$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  },
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // transformIgnorePatterns: [
  //   'node_modules/(?!react-native|@shoutem|react-clone-referenced-element|native-base-shoutem-theme)'
  // ],
  transformIgnorePatterns: ['node_modules/(?!(react-native)/)'],
  testPathIgnorePatterns: ['node_modules'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
};
