// My Flatten
// -------------
Array.prototype.myFlatten = function() {
  const flattened = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] instanceof Array) {
      return flattened.concat(this[i].myFlatten());
    } else {
      flattened.push(this[i]);
    }
  }

  return flattened;
};


function myFlatten(array) {
  const flattened = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      return flattened.concat(myFlatten(array[i]));
    } else {
      flattened.push(array[i]);
    }
  }

  return flattened;
}
