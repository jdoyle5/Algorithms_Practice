// Binary Search
// --------------
// Given a sorted array and a target value, find out whether or not the
// target value is in the array

// var binarySearch = (array, target) => {
//   if (array.length === 0) {
//     return -1;
//   }
//
//   var pivotIdx = Math.floor(array.length / 2);
//   var pivotVal = array[pivotIdx];
//
//   if (target === pivotVal) {
//     return pivotIdx;
//   } else if (target < pivotVal) {
//     var left = array.slice(0, pivotIdx);
//     return binarySearch(left, target);
//   } else {
//     var right = array.slice(pivotIdx + 1);
//     const rightSide = binarySearch(right, target);
//     return rightSide === -1 ? -1 : rightSide + pivotIdx + 1;
//   }
//
// };

//
// [1,2,3,4,5,6,7]

var bSearch = (array, target) => {
  if (array.length < 1) {
    return -1;
  }

  const pivotIdx = Math.floor(array.length / 2);
  const pivotVal = array[pivotIdx];

  if (pivotVal === target) {
    return pivotIdx;
  } else if (pivotVal < target) {
    const left = array.slice(0, pivotIdx);
    return bSearch(left, target);
  } else if (pivotVal > target) {
    const right = array.slice(pivotIdx + 1);
    const rightSide = bSearch(right, target);
    return rightSide === -1 ? -1 : rightSide + pivotIdx + 1;
  }
};
