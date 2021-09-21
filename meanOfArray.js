function getAverage(marks){
    //declaring sum and setting its value using the reduce method and adding all array elements
    const sum = marks.reduce((a,b) => a + b)
    //returning sum divided by length of marks and rounding the average down to the nearest int with Math.floor
      return Math.floor(sum / marks.length);
    }

    //https://www.codewars.com/kata/563e320cee5dddcf77000158