//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    //input: array
      //may be empty or null
        //return []
      //else will have all integers
        //output: array
            //[0]: count of positives, [1]: sum of negatives
    return input === null || input.length === 0 ? [] : [ input.filter( x => x > 0 ).length, input.filter( x => x < 0 ).reduce(( a, c ) => a + c) ]
  
  }