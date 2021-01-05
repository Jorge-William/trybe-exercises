

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parametros devem ser do tipo numero!')
  }
  return a + b;
}


module.exports = sum;