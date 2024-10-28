const lenLongestFibSubseq = (arr) => {
    // A fibonacci sequence would need to be at least 3 elements long
  
    let maxFibLength = 0;
  
    // Iterate through the array
    // Iterate through the remainder of the array
    // add arr[i] + arr[j] and find a target. 
    // If this target exists, create a new array containing arr[i], arr[j], and everything after arr[j] 
    // send that back through our finder function
  
    // array
    const checkFib = function(arr) {
      for(let i = 0; i < arr.length; i++) {
        if(i < arr.length -2) {
          if(arr[i] + arr[i + 1] !== arr[i + 2]) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    const findArrayPermutations = function(testArr) {
      if(testArr.length <= 1) {
        return [testArr];
      }
  
      const permutations = [];
  
  
      for(let i = 0; i < testArr.length; i++) {
        const first = testArr[i];
  
        const remaining = testArr.slice(i + 1);
  
        const remainingPermutations = findArrayPermutations(remaining);
  
        permutations.push(first);
        for(let perm of remainingPermutations) {
          permutations.push(perm);
        }
      }
  
      console.log(permutations);
  
      return permutations;
    }
  
    const fibFinder = function(testArr, counter = 0) {
      let maxLength = 0;
  
  
      // Get all of the permutations of the array. 
      const permutations = findArrayPermutations(testArr) || [];
  
      // then run each through checkFib
      permutations.forEach((perm) => {
        if(checkFib(perm)) {
          maxLength = Math.max(perm.length, maxLength);
        }
      });
    }
  
    fibFinder(arr);
    
    return maxFibLength;
  
  };
  
//  Their solution:

const lenLongestFibSubseqSimpler = (arr) => {
    const nums = new Set(arr);
    let maxLength = 0;
  
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let len = 2;
        let prevPrev = arr[i];
        let prev = arr[j];
        let curr;
        while (nums.has(prev + prevPrev)) {
          len++
          curr = prev + prevPrev
          prevPrev = prev
          prev = curr
        }
  
        maxLength = Math.max(maxLength, len)
      }
    }
  
    return maxLength > 2 ? maxLength : 0
  }

  console.log(5, lenLongestFibSubseq([1,2,3,4,5]))
  // console.log(5, lenLongestFibSubseq([1,2,3,4,5,6,7,8]))
  // console.log(3, lenLongestFibSubseq([1,3,7,11,12,14,18]))