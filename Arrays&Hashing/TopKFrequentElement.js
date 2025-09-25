//Top K Frequent Elements
/*
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
*/

/*
Pseudo Steps for Top K Frequent Elements
    1.	Count frequencies
        •	Create a map/dictionary.
        •	For each number in the array, increment its count.
    2.	Organize by frequency
        •	Create an array of buckets(nums), where the index = frequency.
        •	Put each number into the bucket of its frequency.
    3.	Collect results
        •	Start from the bucket with the highest frequency (end of array).
        •	Keep adding numbers to the result until you have k.
    4.	Return result
        •	Stop once you’ve collected exactly k numbers.
*/

function topKFrequent(nums, k) {
    let freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const buckets = Array(nums.length + 1).fill(null).map(() => []);
    for (const [num, frequency] of freqMap) {
        buckets[frequency].push(num);
    }

    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length) {
            result.push(...buckets[i]);
        }
    }

    // Ensure we only return k elements (in case a bucket added more than needed)
    return result.slice(0, k);
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));