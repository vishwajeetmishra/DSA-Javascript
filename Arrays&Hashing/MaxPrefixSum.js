// Maximum prefix sum for a given range
/*
You are given an array arr of integers and a list of queries. 
Each query consists of two indices, leftIndex and rightIndex, defining a range in the array. 
For each query, calculate the maximum prefix sum within the given range.

A prefix sum is the sum of all elements from the start of the range up to a certain point within the range.

Examples:

Input: arr = [-1, 2, 3, -5], leftIndex = [0, 1], rightIndex = [3, 3]
Output:[4, 5]
Explanation:For the range [0, 3], the prefix sums are [-1, 1, 4, -1]. 
The maximum is 4. For the range [1, 3], the prefix sums are [2, 5, 0]. The maximum is 5.

Input: arr = [1, -2, 3, 4, -5], leftIndex = [0, 2, 1], rightIndex = [4, 3, 3]
Output: [6, 7, 5]
Explanation: For the range [0, 4], the prefix sums are [1, -1, 2, 6, 1]. 
The maximum is 6. For the range [2, 3], the prefix sums are [3, 7]. The maximum is 7. 
For the range [1, 3], the prefix sums are [-2, 1, 5]. The maximum is 5.

Expected Time Complexity: O(arr.size() * queries)
Expected Auxiliary Space: O(1)
*/


function maxPrefixSumInRanges(arr, leftIndex, rightIndex){
    // edge case
    if(!arr || arr.length === 0) return [];
    if(leftIndex.length !== rightIndex.length) return 'query mismatch'; // length should be the same
    let result = [];
    for(let q = 0;q < leftIndex.length;q++){
        let leftQuery = leftIndex[q];
        let rightQuery = rightIndex[q];

        let currentSum = 0;
        let maxSum = -Infinity;

        for(let i=leftQuery;i<=rightQuery;i++){
            currentSum += arr[i];
            maxSum = Math.max(maxSum,currentSum);
        }
        result.push(maxSum);
    }
    return result;
}

console.log(maxPrefixSumInRanges([-1, 2, 3, -5],[0, 1],[3, 3]))