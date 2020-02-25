module.exports = {
  presets: [
    '@babel/preset-env',
    'module:metro-react-native-babel-preset',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          app: './src',
          assets: './assets'
        }
      }
    ],
    [
      'babel-plugin-typescript-to-proptypes',
      {
        comments: true,
        strict: true,
        typeCheck: true
      }
    ]
  ],
  only: ['./src'],
  ignore: ['dist', 'jest.config.js', 'src/__mocks__', 'src/__tests__'],
  include: ['node_modules/react-native-vector-icons/lib/create-icon-set.js']
};
