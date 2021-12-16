//https://www.codewars.com/kata/57613fb1033d766171000d60

function uefaEuro2016(teams, scores){
    for(let i = 0; i < scores.length; i++){
      if(scores[i] > scores[i + 1]){
        return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
      }if(scores[i] < scores[i + 1]){
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
      }else{
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
      }
    }
}