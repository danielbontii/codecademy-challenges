// Flatten an Array
// Write a function, flattenArray(), that takes in a 2-dimensional array, flattens it into a 1-dimensional array, and returns it. You can assume that you will only be given one or two-dimensional arrays

// For example, flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenArray(array) {
  // Write your code here
  const flattened = [];
  for (let element of array) {
    if (typeof element === "object") {
      for (let elem of element) {
        flattened.push(elem);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
}

console.log(flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]));

function flattenArray(array) {
  // Write your code here
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}
