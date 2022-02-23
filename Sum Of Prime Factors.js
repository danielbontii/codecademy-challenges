// Sum of Prime Factors
// Create a sumOfPrimeFactors() function that takes in an integer n and returns the sum of all of its prime factors. As a reminder, a prime number is a number whose only factors are one and itself. Therefore, a prime factor is a factor of a given number that itself is a prime number.

// For example, sumOfPrimeFactors(91) should return 20 since its prime factors are 13 and 7.

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
 
 function sumOfPrimeFactors(n) {
   let sum = 0;
   for(let i=1; i<n+1; i++) {
     if(n % i === 0 && isPrime(i)){
       sum += i;
     }
   }
   return sum;
 }
 
 console.log(sumOfPrimeFactors(91))