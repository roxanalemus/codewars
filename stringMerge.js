//https://www.codewars.com/kata/597bb84522bc93b71e00007e

function stringMerge(string1, string2, letter){
    return string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter)) 
  }