// Find the Missing Numbers
// You have a bag containing tiles with numbers [1, 2, 3, …, n] written on them. Each number appears exactly once, so there are n tiles and n numbers. Now, without looking, k number tiles are randomly picked out of the bag and discarded. Create a missingNos() function that takes in a list and k, and returns the missing numbers in ascending order (from smallest to greatest).

// For example, missingNos([1, 2, 4, 5, 6, 7, 8, 10], 2) should return [3, 9].

function missingNos(array, k) {
  const max = array[array.length - 1];
  const missing = [];
  for (let i = 1; i <= max; i++) {
    if (!array.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}

const testArray = [1, 2, 4, 5, 6, 7, 8, 10];
console.log(missingNos(testArray, 2));
