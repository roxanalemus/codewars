//https://www.codewars.com/kata/57f222ce69e09c3630000212
function well(x){
    let good = x.filter(x => x === 'good')
    return good.length > 2 ? 'I smell a series!' : good.length > 0 ? 'Publish!' : 'Fail!'
  }