function swapValues() {
    const args = Array.prototype.slice.call(arguments); // [ [ 1, 2 ] ]
    const temp = args[0][0];// args[0] === [ 1, 2 ]
    args[0][0] = args[0][1]; //args[1] === undefined
    args[0][1] = temp; //
  }