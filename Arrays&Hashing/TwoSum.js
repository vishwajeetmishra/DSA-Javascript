//Two Sum
/*
Given an array of integers nums and an integer target, 
return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
*/

// Bruteforce solution O(n2)
function twoSumBruteForce(nums,target){
    //edge cases 
    if(!nums || !nums.length || !target) return undefined;

    let result = [];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                result.push(i,j)
            }
        }
    }
    return result;
}

console.log(twoSumBruteForce([4,5,6],10))

// Optimized solution O(n)
function twoSum(nums,target){
    // edge cases
    if(!nums || !nums.length || !target) return undefined;
    let seen = {};
    for(let i=0;i<nums.length;i++){
        let current = nums[i];
        let needed = target - current;
        if(seen[needed] !== undefined){
            return [seen[needed],i];
        }
        seen[current] = i;
    }
    return [];
}

console.log(twoSum([3,4,5,6],7));
