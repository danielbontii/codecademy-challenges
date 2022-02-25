// Capturing Rainwater
// Create a capturingRainwater() function that takes in an array of heights, and returns the amount of rainwater that could be contained in that array.

// For example, the array [4, 2, 1, 3, 0, 1, 2] can be represented in the following histogram:Histogram with the Y-axis going from 0 to 4 and the X-axis containing the numbers from the array. Water is pooled in the empty spaces of the histogram, and you can see that it can contain 6 units of water.

// As you can see, there are 6 units of water that can be contained, so capturingRainwater([4, 2, 1, 3, 0, 1, 2]) will return 6.

function capturingRainwater(heights) {
  // Write your code here
  let rainWater = 0;
  for (let i = 1; i < heights.length - 1; i++) {
    let highestLeftBound = 0;
    let highestRightBound = 0;
    for (let j = 0; j <= i; j++) {
      highestLeftBound = Math.max(highestLeftBound, heights[j]);
    }

    for (let j = i; j < heights.length; j++) {
      highestRightBound = Math.max(highestRightBound, heights[j]);
    }
    rainWater += Math.min(highestLeftBound, highestRightBound) - heights[i];
  }
  return rainWater;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(capturingRainwater(testArray));
