//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

function cockroachSpeed(s) {
    return Math.floor(s / 3600 * 100000) //divided by number of secs in hr, then converted km -> cm
  }