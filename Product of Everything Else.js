// Product of Everything Else
// Create a productOfTheOthers() function that takes in an array of integers and replaces each number in the array with the product of all the numbers in the array except the number at that index itself.

// For example, productOfTheOthers([1, 2, 3, 4, 5]) should return [120, 60, 40, 30, 24] and productOfTheOthers([5, 5, 5]) should return [25, 25, 25].

function productOfTheOthers(array) {
  // Write your code here
  const resultArray = new Array(array.length).fill(1);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        resultArray[i] *= array[j];
      }
    }
  }
  return resultArray;
}
console.log(productOfTheOthers([1, 2, 3, 4, 5]));
