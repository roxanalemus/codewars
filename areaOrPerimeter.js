//check to see if the length and width of polygon are equal or not
  //if the length and width of the polygon are equal, return the area (l * w)
  //if the length and width of the polygon are not equal, return the perimeter (l*2 + w*2)
// };

//initial answer
const areaOrPerimeter = function(l , w) {
    if(l === w){
      return l * w
    }else{
      return (l*2) + (w*2)
    }
}

//second answer: using ternary operator:
    /*  
    const areaOrPerimeter = function(l , w) {
    return l === w ? l * w: (l*2) + (w*2)
    }
    */