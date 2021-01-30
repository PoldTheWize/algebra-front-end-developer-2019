var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function getLongWord(words){
    var longWordSort = words.sort((a,b)=>b.lenght-a.lenght);
    var longWord = longWordSort[0];
    return longWord;
}

var longWord = getLongWord(words);

console.log(longWord);

//---------------------Pokušaj Mastera

function getLong(arr){
    var longestWord = "";

    for(var i = 0; i < arr.lenght; i++){
        var currentWord;

        if(arr[i].lenght > longestWord.lenght){
            longestWord = currentWord;
        }
    }

    return longestWord;
}