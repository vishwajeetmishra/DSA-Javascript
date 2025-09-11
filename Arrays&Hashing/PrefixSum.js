/**
 * 
 * @param {*} arr = [1,2,3,4,5]
 * takes input array and return prefix sum of array 
 */
function createPrefixSum(arr){
    //edge case
    if(!arr || arr.length === 0) return [];
    let prefix = [];
    prefix[0] = arr[0];
    for(let i=1;i<arr.length;i++){
        prefix[i] = prefix[i-1] + arr[i];
    }
    return prefix;
}

function getRangeOfSum(prefixSum,start,end){
    //edge case
    if(start < 0 || end >= prefixSum.length || start > end) return 'invalid range';
    console.log('Prefix sum ::: ', prefixSum);
    if(start === 0){
        return prefixSum[end];
    }else{
        return prefixSum[end] - prefixSum[start - 1];
    }
}

const arr = [1,2,3,4,5];
const prefixSum = createPrefixSum(arr);
console.log(getRangeOfSum(prefixSum,4,4));