let text = "NGQ K CNGZ";
let num = -2;

function shiftCipher(input, shift){
  let code = input.toUpperCase();
  let getCharCode = [];
  let getChar = [];
  let encryption;

  if(shift !== NaN){

    for(let i = 0; i < code.length; i++){
      
      if(code[i] === ' '){
        getCharCode.push(code.charCodeAt(i));
      }else{
        getCharCode.push(code.charCodeAt(i) + shift);

        if(getCharCode[i] < 65){getCharCode[i] = getCharCode[i] + 26;}
        if(getCharCode[i] > 90){getCharCode[i] = getCharCode[i] - 26;}
      }

      getChar.push(String.fromCharCode(getCharCode[i]));

      encryption = getChar.join('');
    }
  }
  return encryption;
}

console.log(shiftCipher(text, num));