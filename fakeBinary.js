//https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x){
    let array = x.split("")
    let numberedArray = array.map(x => parseInt(x))
    let binaryArray = numberedArray.map(x =>{
      if(x < 5){
        return 0
      }if(x >= 5){
        return 1
      }
    })
    return binaryArray.join("")
  }