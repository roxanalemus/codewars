//https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

function findDifference(a, b) {

    return a.reduce( (a,b) => a * b ) - b.reduce( (a,b) => a * b ) >= 0 ? a.reduce( (a,b) => a * b ) - b.reduce( (a,b) => a * b) : -1 * ( a.reduce( (a,b) => a * b ) - b.reduce( (a,b) => a * b ) )
    }