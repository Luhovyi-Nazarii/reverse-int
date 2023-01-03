module.exports = function reverse (n) {

  // function reverse (n) {
  
  n = String(n);
  let i = 0;
  let result = '';
  let minus = '';
  while (i < n.length) { 
    if (n[i] === '-') {
      minus = '-';
    } else {
    result = n[i] + result;
    }
    i++;
  }

// return +(minus + result);
// return n;
return +(result);
}


// console.log(reverse(343355));