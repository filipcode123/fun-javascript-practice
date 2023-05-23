// One of my solutions for Decode the Morse code
decodeMorse = function(morseCode){
  let message = "";
  const trimmed_morse_code = morseCode.trim();
  const words = trimmed_morse_code.split("   ");
  for(let word_index = 0; word_index < words.length; word_index++){
      const characters = words[word_index].split(" ");
      for(let character_index = 0; character_index < characters.length; character_index++){
          const morse_code_string = characters[character_index];
          message += MORSE_CODE[morse_code_string];
      }
      message += " ";
  }
  return message.trim(" ");
}

// Another one of my solutions for Decode the Morse code
decodeMorse = function(morseCode){
  let message = "";
  const trimmed_morse_code = morseCode.trim();
  let index = 0;
  let current_character = ""
  let previous_item = ""
  while (index < (trimmed_morse_code.length)){
    current_item = trimmed_morse_code[index];
    if(current_item != " "){
      current_character += current_item;
    }
    else if(current_item === " " && previous_item != " "){
      message += MORSE_CODE[current_character];
      current_character = "";
    }
    else{
      message += " ";
      current_character = "";
      index++;
    }
    previous_item = current_item;
    index++;
  }
  if (current_character != ""){
      message += MORSE_CODE[current_character];
      current_character = "";
  }
  return message;
}
