function hasTargetSum(array, target) {
  
  const seenNumbers = new Set();

 
  for (const num of array) {
    
    const complement = target - num;

   
    if (seenNumbers.has(complement)) {
      return true; 
    }

   
    seenNumbers.add(num);
  }

  
  return false;
}

module.exports = hasTargetSum;
