//https://www.codewars.com/kata/5748a883eb737cab000022a6

const cannonsReady = (gunners) => {
    return Object.values(gunners).includes("nay") ? "Shiver me timbers!" : "Fire!"
}