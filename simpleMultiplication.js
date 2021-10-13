function simpleMultiplication(number) {
    let solution = 0
    if (number % 2 === 0){
      solution = number * 8
    }else{
      solution = number * 9
    }
    return solution
  }