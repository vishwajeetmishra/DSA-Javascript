// Max Sub array
// find the max sum of k 
function maxSubArray(nums,k){
    if(!nums.length) return 0;
    let maxSum = nums.slice(0,k).reduce((total,currentValue) => currentValue+total);
    let tempSum = maxSum;
    for(let i=k;i<nums.length;i++){
        tempSum = tempSum - nums[i-k] + nums[i]
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}

console.log(maxSubArray([2,3,5,6,7,5,3,5,67,8],3))