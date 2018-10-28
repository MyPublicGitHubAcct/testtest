function add(x, y) {
  if (!x || !y) {
    throw new Error('Numbers are required');
  }
  return x + y;
}

module.exports = { add };
