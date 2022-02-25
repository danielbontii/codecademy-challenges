// Semi-Prime Numbers
// Create a semiPrimeCount() function that takes in an integer, n, and returns the count of semi-prime numbers from 1 to n, non-inclusive. A semi-prime number is a number that is the product of two prime numbers. Note that the numbers don’t have to be distinct, meaning that 4 is a semi-prime number since it is 2 * 2.

// For example, semiPrimeCount() called on 10 should return 3 since there are 3 semi-prime numbers from 1-10 (4, 6, 9). Remember, it’s non-inclusive!

function semiPrimeCount(n) {
  let semiPrime = [];

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (isPrime(i) && isPrime(j)) {
        if (i * j < n) {
          if (!semiPrime.includes(i * j)) {
            semiPrime.push(i * j);
          }
        }
      }
    }
  }
  return semiPrime.length;
}

function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(semiPrimeCount(10));
