const repeatString = function(string, times) {
  if (times < 0) return "ERROR";
  let fullString = "";
  for (let i = 0; i < times; i++) {
    fullString += string;
  }
  return fullString;
};

// Do not edit below this line
module.exports = repeatString;
