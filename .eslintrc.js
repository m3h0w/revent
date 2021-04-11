module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  settings: {
    'import/resolver': {
      alias: [['components', './src/components']],
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
