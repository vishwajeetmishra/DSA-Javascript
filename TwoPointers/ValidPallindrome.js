// Valid Palindrome
/*
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. 
It is also case-insensitive and ignores all non-alphanumeric characters.

Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.
*/

// Naive approach brute force O(n2)
function validPallindromeBruteForce(s){
    let str = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    for(let i=0;i<=Math.floor(str.length/2);i++){
        for(let j=str.length-1;j>=Math.floor(str.length/2);j--){
            if(i === j && str[i] === str[j]) return true;
            if(str[i] === str[j]){
                i++;
                continue;   
            }else{
                return false;
            }
        }
    }
    return false;
}

console.log(validPallindromeBruteForce("Was it a car or a cat I saw?"))

// using two pointers
function validPallindrome(s){
    let str = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let left = 0;
    let right = str.length - 1; // minus 1 because array starts from 0. start at last character

    while(left < right){
        if(str[left] === str[right]){
            left++;
            right--;
        }else{
            return false;
        }
    }
    return true;
}

console.log(validPallindrome("Was it a car or a cat I saw?"))