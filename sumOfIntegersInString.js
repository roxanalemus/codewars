//https://www.codewars.com/kata/598f76a44f613e0e0b000026

function sumOfIntegersInString(s){
  const arr = s.replace(/\D/g,' ').split(" ")
  let nums = []
  for(let i = 0; i < arr.length; i++ ){
    if (parseInt(arr[i])){
      nums.push(parseInt(arr[i]))
    }
  }
      return !nums.length ? 0 : nums.reduce((a, c) => a + c)
}
