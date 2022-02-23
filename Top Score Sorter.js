// Top Score Sorter
// Write a scoreSorter() function that will take a list of unsorted scores along with the highest possible score. It should return a sorted list of all of the scores, in descending order from high to low. You are expected to create and implement your own sorting algorithm for this challenge.

// For example, scoreSorter([1, 2, 3, 9999, 13], 10000) should return [9999, 13, 3, 2, 1].

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function scoreSorter(array, topScore) {
  // Write your code here
  const toSort = [...array];
  const sorted = [];
  for (let i = 0; i < toSort.length; i++) {
    for (let j = i + 1; j < toSort.length; j++) {
      if (toSort[i] < toSort[j]) {
        swap(toSort, i, j);
      }
    }
  }
  return toSort;
}

console.log(scoreSorter([1, 2, 3, 9999, 13], 10000));
