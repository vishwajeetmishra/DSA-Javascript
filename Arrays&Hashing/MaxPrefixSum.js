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
*/

function maxPrefixes(arr, leftIndex, rightIndex){

}

console.log(maxPrefixes([-1, 2, 3, -5],[0, 1],[3, 3]))