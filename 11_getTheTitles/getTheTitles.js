const getTheTitles = function(array) {
  let books = [];
  
  for (let i = 0; i < array.length; i++) {
    for (let b in array[i]) {
      if (b == "title") {
        books.push(array[i][b]);
      }
    }
  }
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
