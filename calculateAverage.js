//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
    let sum = array.reduce((a, b) => a + b, 0);
    return sum/array.length;
  }