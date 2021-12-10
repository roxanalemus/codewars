//https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
    if(weight / Math.pow(height, 2) <= 18.5){
      return "Underweight"
    }if(weight / Math.pow(height, 2) <= 25){
      return "Normal"
    }if(weight / Math.pow(height, 2) <= 30){
      return "Overweight"
    }else return "Obese";
  }