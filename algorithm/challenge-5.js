var alphabets=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function caesarCifer(str, num){
    let result="";
    let splittedStr = str.split("");
    let targetIndex=0;
    for(let i=0; i<splittedStr.length; i++){
        let originalIndex=alphabets.indexOf(splittedStr[i])
       if(originalIndex+num>25){
        targetIndex=originalIndex+num-26
       }
       else{
        targetIndex=originalIndex+num
       }
       result+=alphabets[targetIndex]
    }
    return result;
}

console.log(caesarCifer("oo", 3))
