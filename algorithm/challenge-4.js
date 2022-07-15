function identicalFilter(strArr){
     let newStrArr=[]
    for(let i=0;i<strArr.length;i++){
        let item=strArr[i].split("");
        if(isIdentical(item)){
            newStrArr.push(item);
        }
    }
    return newStrArr;
}
//helper function
function isIdentical(arr){
    let triar=arr[0];
    for(let j=0;j<arr.length;j++){
        if(arr[j]!==triar)return false;
    }
    return true;
}

console.log(identicalFilter(["nnnn", "bb","be","11"]))