module.exports = {
  extends: ['./standard.js', './order.js', './prettier.js'].map(require.resolve),
};
