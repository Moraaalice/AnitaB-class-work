arr = [12,45,67,89,23,45];
function merge(arr){
    if(arr.length<=1){
        return arr;
    };
    middleArray = Math.floor(arr.length/2);
    leftArray = arr.slice(0,middleArray);
    rightArray = arr.slice(middleArray);
    console.log("middle",middleArray);
    console.log("left",leftArray);
    console.log("right",rightArray);
    return mergeArray(merge(leftArray),merge(rightArray));
}
function mergeArray(leftArray,rightArray){
    emptyArray=[];
    while(leftArray&&rightArray){
        if(leftArray[0]<= rightArray[0]){
            emptyArray.push(leftArray.shift());
        }else{
            emptyArray.push(rightArray.shift());
        }
    console.log("empty",emptyArray);
    return[...emptyArray,...leftArray,...rightArray];
    }
}
console.log(merge(arr));


