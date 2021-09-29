function joinStrings(string1, string2){
    if (typeof string1 === num || typeof string2 === num){
        let string1 = String(string1)
        let string2 = String(string2)
        console.log(`${string1} ${string2}`)    
     }else{
        console.log(`${string1 } ${string2}`);
     }
}

joinStrings()
   
//https://www.codewars.com/kata/582e4c3406e37fcc770001ad
