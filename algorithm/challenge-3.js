function miniMaxSum(arr){
    //initialize the two sums
    let minSum=0;
    let maxSum=0;
    //get the array sorted
    let sortedArr=arr.sort((a,b)=>{return a-b})
    //save the first 4 ements in minSum
    //save the last 4 elements in maxSum
    let j=sortedArr.length-1;
    for(let i=0; i<4; i++,j--){
        minSum+=sortedArr[i]
        maxSum+=sortedArr[j]
    }
    //return a concat of both
    return minSum+" "+maxSum;
}

console.log(miniMaxSum([2,5,2,7,4,9]))