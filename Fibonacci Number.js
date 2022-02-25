// Fibonacci Finder
// Create a fibFinder() function that finds the nth number in the Fibonacci sequence. As a reminder, the Fibonacci sequence is a mathematical sequence that begins with 0 and 1, with each following term being the sum of the two previous terms.

// For example, the first two terms of the sequence are represented by fibFinder(0) and fibFinder(1), which return 0 and 1, respectively. fibFinder(6) should return 8.

function fibFinder(n) {
  // Write your code here
  //using Binet's Formular
  const rootFive = Math.sqrt(5);
  const position = Math.round(
    (Math.pow((1 + rootFive) / 2, n) - Math.pow((1 - rootFive) / 2, n)) /
      rootFive
  );

  return position;
}

function fibFinder(n) {
  // Write your code here
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibFinder(n - 1) + fibFinder(n - 2);
  }
}

console.log(fibFinder(6));
