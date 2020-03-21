module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-typescript-to-proptypes',
      {
        comments: true,
        strict: true,
        typeCheck: true
      }
    ]
  ]
};
