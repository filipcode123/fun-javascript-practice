// My solution for Tally it up
var scoreToTally = function(score){
  pairs = [["a",1],["b",2],["c",3],["d",4],["e",5]]
  let result = "";
  index = pairs.length-1;
  while(index >= 0 && score != 0){
      if (score - pairs[index][1] >= 0){
        result += pairs[index][0];
        score -= pairs[index][1];
        if (pairs[index][0] === "e"){
          result += " <br>";
        }
      }
      else{
        index--;
      }
  }
  return result;
}
