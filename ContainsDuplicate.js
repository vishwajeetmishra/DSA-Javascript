// Contains Duplicate
/* 
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
Input: nums = [1, 2, 3, 3]

Output: true

You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array.

*/

function containsDuplicate(nums){
    //edge cases
    if(!nums || !nums.length) return undefined;
    if(nums.length === 1) return 'no need to check duplicates for single value';
    let set = new Set();
    for(let num of nums){
        if(set.has(num)) return true;
        set.add(num);
    }
    return false;
}

console.log(containsDuplicate([1,2,3,3]));