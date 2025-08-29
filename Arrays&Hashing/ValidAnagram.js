//Valid Anagram

/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true

Example 2:

Input: s = "jar", t = "jam"

Output: false
*/

function validAnagram(s,t){
    // edge cases
    if(s.length !== t.length) return false;
    let map = {};
    for(let char of s){
        map[char] = (map[char] || 0) + 1;
    }

    for(let char of t){
        if(!map[char]) return false;
        map[char]--;
    }
    return true;
}

console.log(validAnagram("racecar","carrace"));