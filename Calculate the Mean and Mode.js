// Calculate the Mean and Mode
// Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, return the mode that occurs first. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!

// For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].

function statsFinder(array) {
  // Write your code here
  return [findMean(array), findMode(array)];
}

const findSum = (arr) =>
  arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);

const findMean = (arr) => {
  return findSum(arr) / arr.length;
};

function findMode(array) {
  let modes = [];
  let maxCount = 1;
  let storage = {};
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (storage[el] == null) {
      storage[el] = 1;
    } else {
      storage[el]++;
    }
    if (storage[el] > maxCount) {
      maxCount = storage[el];
    }
  }
  console.log(storage);
  for (const [key, value] of Object.entries(storage)) {
    if (value === maxCount) {
      modes.push(parseInt(key, 10));
    }
  }
  console.log(modes);

  if (modes.length === 1) {
    return modes[0];
  } else {
    for (let i = 0; i < array.length; i++) {
      if (modes.includes(array[i])) {
        return array[i];
      }
    }
  }
}

console.log(findMode([500, 400, 400, 375, 300, 350, 325, 300]));

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]));
