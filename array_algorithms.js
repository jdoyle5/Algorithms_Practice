// Max Sub Array Sum
// Given an array of numbers, calculate the sub array with the max sum.
// [4,2,-4,3,-7,2,-5,8]

//Naive Solution
function maxSumSubArray(array) {
  let maxSum = 0;
  let maxArraySet = [];

  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      let subArray = array.slice(i, j + 1);
      if (sum(subArray) > maxSum) {
        maxSum = sum(subArray);
        maxArraySet = subArray;
      }
    }
  }

  return [maxSum, maxArraySet];
}


function sum(array) {
  let sumNum = 0;

  array.forEach(num => {
    sumNum += num;
  });

  return sumNum;
}


// Optimized Solution
// We set maxSoFar to 0 and maxEndingHere to 0 and start at the first
// number. We add the next number in the array to maxEndingHere and if
// maxEndingHere is greater than maxSoFar, then we make that
// the new maxSoFar. If the maxEndingHere is negative, that means the
// subarray will have detrimental values so we want to set maxEndingHere
// to 0 and start a new subArray.
function maxSumSubArray(array) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < array.length; i++) {
    maxEndingHere = maxEndingHere + array[i];

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }

  return maxSoFar;
}
