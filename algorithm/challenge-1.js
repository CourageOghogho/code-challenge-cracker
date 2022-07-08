const vowelsAndConsonants=(word)=>{
    let wordCounts={
        consonants: 0,
        vowels: 0,
    };

    let vowels=['a','e','i','o','u']
    wordArr=word.toLowerCase().split("");
    for(let i=0;i<wordArr.length;i++){
        if(vowels.includes(wordArr[i])){
            wordCounts.vowels+=1;
        }
        else{
            wordCounts.consonants+=1;
        }
    }

    return wordCounts;

}
console.log(vowelsAndConsonants("courage"));