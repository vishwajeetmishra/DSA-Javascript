// Group Anagrams
/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
*/

// naive solution O(m * nlogn)
function groupAnagrams(strs) {
    let map = {};
    for (let value of strs) {
        let sortedValue = value.split('').sort().join('');
        if (map[sortedValue]) {
            map[sortedValue].push(value);
        } else {
            map[sortedValue] = [value];
        }
    }
    return Array.from(Object.values(map));
}

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));


// optimised solution O(n * k)
function groupAnagramByKey(strs){
    let map = new Map();
    for(const str of strs){
        // create a frequency array for 26 lowercase letters
        const count = new Array(26).fill(0);
        for(const char of str){
            count[char.charCodeAt(0) - 97]++; // This gets the integer ASCII (or Unicode) value of the character. Every character has a corresponding number
            // subtracting 97 the unicode value of a gives the position number for 26 lowercase letters
        }
        // convert count array to string key and add # to make it unique
        const key = count.join('#');
        if(!map.has(key)){
            map.set(key,[]);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

console.log(groupAnagramByKey(["act","pots","tops","cat","stop","hat"]));
