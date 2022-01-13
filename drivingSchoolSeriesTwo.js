//https://www.codewars.com/kata/589b1c15081bcbfe6700017a

function cost (mins) { 
    return mins <= 65 ? 30 : Math.ceil( (mins - 65) / 30 ) * 10 + 30 
  } 