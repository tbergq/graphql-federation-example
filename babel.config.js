// @flow

/*::
 
type ApiType = {|
  +cache: {|
    forever: () => void,
  |},
  +assertVersion: number => void,
|};
 
*/

module.exports = function(api /*: ApiType */) /* :Object */ {
  api.assertVersion(7);
  api.cache.forever();

  const presets = ['@adeira/babel-preset-adeira'];
  const extraPlugins = [];

  return {
    presets,
    plugins: extraPlugins,
  };
};
