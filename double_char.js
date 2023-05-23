// My solution for Double Char
function doubleChar(str) {
    let new_str = "";
    for (let index = 0; index < str.length; index++){
      for(let repeat = 0; repeat < 2; repeat++){
        new_str += str[index];
      }
    }
    return new_str;
}
