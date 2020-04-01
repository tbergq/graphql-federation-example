const OFF = 0;
const WARN = 1;
const ERROR = 2;
 
module.exports = {
  root: true,
 
  extends: ['@adeira/eslint-config'],
 
  // adjust the rules as needed
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
  },
  rules: {
    eqeqeq: [ERROR, 'smart'],
    'flowtype/require-inexact-type': OFF,
  },
};
