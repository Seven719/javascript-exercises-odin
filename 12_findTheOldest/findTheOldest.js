const findTheOldest = function(array) {
  let oldestAge = 0, oldest;
  
  for(let i = 0; i < array.length; i++) {
    let currentPerson = array[i];
    let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    if(currentAge > oldestAge) {
      oldest = currentPerson;
      oldestAge = currentAge;
    }
  }
  return oldest;
};

function getAge(birth, death) {
  if(!death) {
    return new Date().getFullYear() - birth;
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
