// Encode and Decode Strings
/* 
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
*/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = [];
        for(let i=0;i<strs.length;i++){
            result.push(strs[i].length+"#"+strs[i]);
        }
        return result.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    let result = [];
    let i=0;
    while(i < str.length){
        let j = i;
        while(j < str.length && str[j] !== "#") j++;
            let wordLength = parseInt(str.slice(i,j));
            result.push(str.slice(j+1,wordLength+j+1));
            i = j+1+wordLength;
    }
    return result;
    }
}
