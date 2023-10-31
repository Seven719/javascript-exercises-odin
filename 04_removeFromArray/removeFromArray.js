const removeFromArray = function(array, ...args) {
  const newArray = [];
  array.forEach((value) => {
    if (!args.includes(value)){
      newArray.push(value);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
