function abbrevName(name){
    //string: two words, upper or lowercase, separated by space
    //take only first letter of first name
      const firstOfFirst = name.split(" ")[0][0].toUpperCase()  
    //take only first letter of last name
      const firstOfLast = name.split(" ")[1][0].toUpperCase() 
      return `${firstOfFirst}.${firstOfLast}`
      }