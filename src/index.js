module.exports = function reverse (n) {
  n = String(n);
  let i = 0;
  let result = '';
  while (i < n.length) {
    if (n[i] !== '-') {
    result = n[i] + result;
    }
    i++;
  }
return +result;
}