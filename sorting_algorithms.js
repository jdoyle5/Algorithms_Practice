// Binary Search
// ----------------
// Given a sorted array and a target value, find out whether or not the
// target value is in the array

// [1,2,3,4,5,6,7]

var binarySearch = (array, target) => {
  if (array.length === 0) {
    return -1;
  }

  var pivotIdx = Math.floor(array.length / 2);
  var pivotVal = array[pivotIdx];

  if (target === pivotVal) {
    return pivotIdx;
  } else if (target < pivotVal) {
    var left = array.slice(0, pivotIdx);
    return binarySearch(left, target);
  } else {
    var right = array.slice(pivotIdx + 1);
    const rightSide = binarySearch(right, target);
    return rightSide === -1 ? -1 : rightSide + pivotIdx + 1;
  }

};


// Merge Sort
// ----------------
var mergeSort = function(array) {
  if (array.length < 2) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    merge(left, right);
  }
};

function merge(left, right) {
  const merged = Array.new;

  while (left.length > 0 && right.length > 0){
    const mergeVal = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(mergeVal);
  }

  return merged.concat(left, right);
}


// Quick Sort
// ----------------
var quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (comparator(array[i], pivot) === -1) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));

};

var comparator = (num, pivot) => {
  if (num < pivot) {
    return -1;
  } else {
    return 1;
  }
};
