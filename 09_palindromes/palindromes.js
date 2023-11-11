const palindromes = function (str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let max = str.length - 1;
  for (let i = Math.floor(max / 2); i >= 0; i-- ) {
    if (str[i] != str[max - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
