// Prime Number Finder
// Create a primeFinder() function that takes in a number, n, and returns all the prime numbers from 1 to n (inclusive). As a reminder, a prime number is a number that is only divisible by 1 and itself.

// For example, primeFinder(11) should return [2, 3, 5, 7, 11].

function isPrime(num) {
    if(num === 1) {
     return false;
   }
   if(num === 2) {
     return true;
   }
   const stopCondition = Math.floor(Math.sqrt(num) ) + 1;
  
   for(let i=2; i< stopCondition; i++){
     if(num % i === 0){
       return false; 
     }
   }
   return true;
 }
 
 function primeFinder(n) {
   const primes = [];
   for(let i=1; i< n+1; i++) {
     if(isPrime(i)){
       primes.push(i);
     }
   }
   return primes;
 }
 
 console.log(primeFinder(11))