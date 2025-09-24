// Merge Intervals
/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

// brute force solutions O(n2)
function mergeIntervals(intervals) {
    let merged = [...intervals];
    merged.sort((a,b) => a[0] - b[0]);
    for(let i=0;i<merged.length;i++){
        const [a,b] = merged[i];
        for(let j=i+1;j<merged.length;j++){
            const [c,d] = merged[j];
            if(a <= d && c <= b){ // overlapping interval found
                merged[i] = [a,d];
                merged.splice(j,1);
                continue;
            }
        }
    }
    return merged;
};

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))

// greedy approach (O(n log n))
function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];
    // Step 1: sort by start
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    // Step 2: iterate and merge
    for (let i = 1; i < intervals.length; i++) {
        let lastMergedInterval = result[result.length - 1];
        let currentInterval = intervals[i];
        // overlap check
        // if current.start <= lastMergedInterval.end, then they overlap
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // overlap → extend last
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // no overlap → add new interval
            result.push(currentInterval);
        }
    }

    return result;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))