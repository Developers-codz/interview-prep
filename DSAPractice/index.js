// Valid Anamgram

function isValidAnagram(s,t){
    let sCount = new Map();
    let tCount = new Map();
    if(s.length !== t.length) {
        return false
    }

    for(let i = 0; i < s.length; i++) {
        sCount.set(s[i], (sCount.get(s[i]) || 0) +1)
    }

    for(let i = 0; i< t.length;i++) {
        tCount.set(t[i], (tCount.get(t[i]) || 0) + 1);
    }

     for(let i = 0; i< t.length;i++) {
        if(sCount.get(s[i]) !== tCount.get(s[i])) {
            return false
        }
     }

     return true
}  

// Input:
let s = "anagram"
let t = "nagaram"

console.log(isValidAnagram(s,t))

// Group anagram

function groupAnagram(arr){
    let map = new Map();
    for(let word of arr) {
        let count = new Array(26).fill(0)
        for(let char of word) {
            count[char.charCodeAt(0) - 97]++
        }
        let keys = count.join("#")
        if(!map.has(keys)){
            map.set(keys, [])
        }

        map.get(keys).push(word)
    }

    return Array.from(map.values())
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))

//Most frequent Element

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

function mostFrequentEle(nums, k){
    let map = new Map();
    for(let items of nums) {
        map.set(items, (map.get(items) || 0) + 1)
    }
    const mapVaues = Array.from(map.entries())
    
    mapVaues.sort((a,b) => b[1]- a[1])
    return mapVaues.slice(0,k).map(el => el[0])
    
}

console.log(mostFrequentEle([1,1,1,2,2,3,3,3,3], 2))

// Encode and decode string

// function encode(arr){
//     const encodedStr = arr.map(el => `${el.length}#${el}`).join("")
//     return encodedStr
// }

// function decode(str){
//     let decodedArr = [];
//     //5#hello5#world8#leetcode
//     let itemLen = Number(str[0])
//     let i = 0;
//     while(i < str.length) {
//         let hashIndex = str.indexOf("#", i);
//         let start = hashIndex + 1;
//         let end = start + itemLen;

//         let item = str.slice(start, end);
//         decodedArr.push(item);
//         i = end
//     }
//     return decodedArr

// }

// const encodedStr = encode(["hello", "world", "leetcode"])
// const decodedStr = decode(encodedStr)
// console.log(decodedStr)

// contiguous subarrays whose sum is exactly equal to k

function subArrSumEqualK(arr, k) {
    const map = new Map()
    map.set(0, 1)
    let prefixSum = 0;
    let count = 0;
    for(let num of arr) {
        prefixSum+=num;
        if(map.has(prefixSum - k)) {
            count+=map.get(prefixSum - k) 
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
    }
    return count
}

console.log(subArrSumEqualK([1, 2, 3], 3))


// 1. You are given an array of numbers and a number `n`.

// Write a function that **groups the array elements into subarrays of size `n`**.

// If the number of remaining elements is **less than `n`**, include them **as is** at the end

let array = [1,2,3,4,5,6,7,8,9,10]
let n = 3
function subArr(arr, n) {
    let result = [];

    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }

    return result;
}

console.log(subArr([1,2,3,4,5,6,7,8,9,10], 3));

console.log("heyyyy",subArr(array, n))

function transformIntoNestedArray(arr){
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let nested = "";
        for(let j = 0; j < arr[i]; j++) {
            nested += arr[i];
        }
        for(let j = 0; j < arr[i]; j++) {
            nested = [nested];
        }
        result.push(nested)
    }
    return result
}

console.log("nestinggg", transformIntoNestedArray([1,2,3,4,5,6]))

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function largestPossibleSum(arr) {
   let currentSum = arr[0];
   let maxSum = arr[0];
   for(let i = 1; i < nums.length; i++ ) {
        currentSum = Math.max(arr[i], currentSum + arr[i])
        maxSum = Math.max(currentSum, maxSum)
   }

   return maxSum
}
largestPossibleSum(arr)

// // Three Sum 


// function threeSum(nums){
//     // increasing order
//     nums.sort((a,b) => a-b)
//     const res = []
   
// }

// two Sum

function twoSum(arr, k){
    let map = new Map()
    for(let i = 0; i <arr.length; i++) {
        let compliment = k - arr[i] 
        if(map.has(map.has(compliment))) {
            return [map.has(compliment), i]
        }
        map.set(arr[i], i)
    }
}

// Contains Duplicate

function containDuplicate(arr){
    let set = new Set()
    for(let i =0; i <arr.length;i++) {
      if(set.has(arr[i])) return true
        set.add(arr[i])
    }
    return false
}

// Valid Anagram

function validAnagram(s,t) {
    let charOfS = new Map()
    let charOfT = new Map()

    for(let i = 0; i< s.length; i++){
        charOfS.set(s[i], (map.get(s[i]) || 0) +1)
    }
    for(let i = 0; i< t.length; i++){
         charOfT.set(t[i], (map.get(t[i]) || 0) +1)
    }

    for(let i = 0; i < s.length;i++ ) {
        if(charOfS.get(s[i]) !== charOfT.get(s[i])) {
            return false
        }
    }

    return true
}

// Group anagram

function groupAnagram(arr){
    let map = new Map()
    for(let words of arr) {
        let arrOfIndex = new Array(26).fill(0)
        for(let char of words) {
            arrOfIndex[char.charCodeAt(0) - 97]++
        }
        let key  = arrOfIndex.join("#")
        if(!map.has(key)) {
            map.set(key, [])
            
        }
        map.get(key).push(words)
    }

    return Array.from(map.values())
}


// First non-repeating character

function firstNonRepeating(str){
    const map = new Map();
    for(let i = 0; i< str.length; i ++) {
       map.set(str[i], (map.get(str[i] || 0)) +1) 
    }

    for(let s of str) {
        if(map.get(s) === 1) {
            return s
        }
    }
    return -1
}

// Top K Frequent Elements

function topKFrequentElement(arr, k){
    let map = new Map()
    for(let item of arr) {
        map.set(item, (map.get(item) || 0) + 1)
    }

    const arr1 = [...map.entries()]
    const sortByEnd = arr1.sort((a,b) => b[1] - a[1])
    return sortByEnd.slice(0,k).map(el => el[0])
}

// Subarray Sum Equals K

function subArraySumEqualK(arr, k){
    let prefixSum = 0;
    let count = 0;
    let map = new Map();
    map.set(0,1);
    for(let n of arr) {
        prefixSum+=n;
        count+=map.get(prefixSum-k) || 0
        map.set(prefixSum, (map.get(prefixSum) || 0) +1)
    }

    return count
}


// Repeating and missing number

function repeatingAndMissingNumber(arr) {
    let set = new Set();
    let repeating;
    for(let item of arr) {
        if(set.has(item)) {
           repeating= item 
        }
        set.add(item)
    }
    let missing;
    for(let i = 1; i<= arr.length; i++) {
        if(!set.has(i)) missing = i
    }

    return [repeating, missing]
}

// Three Sum

// Container With Most Water

function containerWithMostWater(arr){
    let left = 0;
    let right = arr.length-1;
    let maxArea = 0;
    while(left <= right){
    let width = right-left
    let length = Math.min(arr[left], arr[right])
    maxArea = Math.max(width*length, maxArea)

    if(arr[left] < arr[right]) {
        left++
    } else {
        right--
    }
    }

    return maxArea
}

// Valid Palindrome

function isValidPalindrome(st) {
    const str = st.toLowerCase();
    let left = 0;
    let right = str.length-1;
    while(left <= right) {
        if(!(str[left] >= "a") || (str[left] <= "z")) {
            left++
        } else if(!(str[right] >= "a") || (str[right] <= "z")) {
            right--
        } else {
            if(str[left] !== str[right]) return false
        }
        left++;
        right--;
    }

    return true
}

// Move Zeroes to 

function moveZeroesToEnd(arr){
    let p1 = 0;
    for(let p2 = 0; p2 <arr.length; p2++) {
        if(arr[p2] !== 0) {
            [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
            p1++
        }
    }
    return arr
}

// Reverse string / array

// if string then dont forget to do aplit on it
function reverseStr(arr){
    let l = 0;
    let r = arr.length-1
    while(l <= r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++;
        r--
    }

    return arr
}

// .. Reverse each word

function reverseEachWord(str){
    let arr = str.split(" ")
    return arr.map(el => el.split("").reverse().join("")).join(" ")
}
// Reverse word order

function reverseWordOrder(str){
    return str.split(" ").reverse().join(" ")
}

// Rotate Array by K

function reverseStr(arr, left, right) {
    while(left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }

    return arr
}
function rotateArraybyK(arr, k){
    reverseStr(arr, 0, arr.length-1)
    reverseStr(arr, 0, k)
    reverseStr(arr, k, arr.length -1)
    return arr
}

// Longest Substring Without Repeating Characters

function longestSubSting() {
    
}



