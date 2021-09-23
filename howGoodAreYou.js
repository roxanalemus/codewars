function betterThanAverage(classPoints, yourPoints) {
    //classTotal = add all elements in the array + my score
    const classTotal = classPoints.reduce((a,b) => a + b + 1);
    // class average = divide classTotal / classPoints.length + 1
    const classAverage = classTotal /  (classPoints.length + 1)
    // if yourPoints > classTotal return true, else return false
   return comparison = (yourPoints > classAverage) ? true: false;

  }

  //https://www.codewars.com/kata/5601409514fc93442500010b