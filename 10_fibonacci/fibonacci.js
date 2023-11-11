const fibonacci = function(member) {
  if (member < 0) return 'OOPS';

  let previousMember = 0;
  let currentMember = 1;
  
  for (let i = 2; i <= member; i++) {
    let temp = currentMember;
    currentMember += previousMember;
    previousMember = temp;
  }
  return currentMember;
};

// Do not edit below this line
module.exports = fibonacci;
