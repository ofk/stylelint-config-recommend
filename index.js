module.exports = {
  extends: ['./standard.js', './order.js'].map(require.resolve),
};
