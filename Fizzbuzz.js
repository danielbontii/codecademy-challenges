// Write a fizzbuzz() function that takes in a number, n, and returns an array of the numbers from 1 to n. For multiples of three, use "Fizz" instead of the number, and for the multiples of five, use "Buzz". For numbers that are multiples of both three and five, use "FizzBuzz" (capitalization matters).

// For example, fizzbuzz(16) should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16].

function fizzbuzz(n) {
    // Write your code here
    const output = [];
    for(let i = 1; i<=n; i++){
      if(i % 3 === 0 && i % 5 === 0) {
        output.push('FizzBuzz')
      }else if(i % 5 === 0){
        output.push('Buzz')
      }else if(i % 3 === 0){
        output.push('Fizz')
      }
      else {
        output.push(i);
      }
    }
    return output;
  }
  
  console.log(fizzbuzz(16));