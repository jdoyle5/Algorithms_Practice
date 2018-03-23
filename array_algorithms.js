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
// Implement two runners so that the subarray resizes with a new front
// runner when ever we encounter a negative number
function maxSumSubArray(array) {

  let maxSoFar = min(array);
  let maxEndingHere = 0;

  for (let i = 0; i < array.length; i++) {
    maxEndingHere = maxEndingHere + array[i];
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }
  return maxEndingHere;
}

function min(array) {
  let minimum = array[0];
  array.forEach(num => {
    if (num < minimum) {
      minimum = num;
    }
  });

  return minimum;
}
