function peak(arr){
    //input: array of integers
     //return index where sum of elements to the right is of equal value to sum of elements on the left
       //if more than one, return first instance
     //if this doesn't exist, return -1
     
     //loop through the array, beginning at index 1
       //sum elements to the left
       //sum elements to the right
         //compare two sums
           //if two sums strict equal
             //return index between them
        //if loop returns no index, return -1

    for(let i = 1; i < arr.length - 1; i++){

        const left = arr.slice(0, i);
        const sumLeft = sumArray(left);
        const right = arr.slice(i + 1);
        const sumRight = sumArray(right);
        // console.log(left)
        // console.log(sumLeft)
        // console.log(right)
        // console.log(sumRight)
       
        if(sumLeft === sumRight){
            return i
        }
    }
    return -1
    }
   
   function sumArray(arr){
     return arr.reduce((a,c) => a + c, 0)
   }

   console.log( "reduced:", sumArray([1,12,3,3,6,3,1]) )