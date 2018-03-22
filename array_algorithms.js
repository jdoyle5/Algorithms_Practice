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
