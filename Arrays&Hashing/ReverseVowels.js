// Rerverse Vowels of a string
/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"


*/

function reverseVowels(s) {
    let regex = /^[aeiouAEIOU]$/;
    let left = 0;
    let right = s.length-1;
    let str = s.split('');
    const isVowel = (char) => {
        return regex.test(char);
    }

    while(left<right){
        while(left<right && !isVowel(str[left])) left++;
        while(left<right && !isVowel(str[right])) right--;
        [str[left],str[right]] = [str[right],str[left]];
        left++;
        right--;
        
    }
    return str.join('');
};

console.log(reverseVowels("IceCreAm"));