//Binary Search
/*
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in O(log n) time.

Example 1:

Input: nums = [-1,0,2,4,6,8], target = 4

Output: 3
*/

//linear search O(n)
function linerSearch(nums,target){
    //edge cases
    if(!nums || !nums.length || !target) return undefined;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linerSearch([-1,0,2,4,6,8],9));

// Binary search O(log n)
function binarySearch(nums, target){
    //edge cases 
    if(!nums || nums.length === 0) return undefined;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let middleIdx = Math.floor((left+right) / 2);
        let currentNum = nums[middleIdx];
        if(currentNum === target) return middleIdx;
        if(target > currentNum){
            left = middleIdx + 1;
        }else{
            right = middleIdx - 1;
        }
    }
    return -1;
}

console.log(binarySearch([-1,0,2,4,6,8],4));
