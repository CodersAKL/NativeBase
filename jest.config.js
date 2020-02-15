const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  },
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@shoutem|react-clone-referenced-element|native-base-shoutem-theme)'
  ],
  testPathIgnorePatterns: ['node_modules']
};
