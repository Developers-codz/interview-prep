// const str = "kajal".split("")

// const { useCallback } = require("react");

// Card Shuffle Problem

// const cards = [1,2,3,4,5,"a"]


// function shuffleCards(cards) {
//     for(let i = cards.length -1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i +1))
//         [cards[i], cards[j]] = [cards[j], cards[i]];
//     }
//     return cards
// }



// Async Task Runner



// Recursion Revision

// Print number 1 to n using recursion

// function print1ToN(n) {
//     if(n === 0) return;
//     print1ToN(n-1)
//     console.log(n)

// }

// print1ToN(6)

// // factorial
// function factorial(n) {
//     if(n === 0 || n === 1) return 1;
//     return n * factorial(n-1)
// }

// console.log(factorial(4))

// // sum of array
// function sumOfArr(arr, i = 0) {
//     if(i === arr.length) return 0;
//     return arr[i] + sumOfArr(arr, i+1)
// }

// console.log("sum of array", sumOfArr([1,2,3,4,5,6,7]))

// // Check if array is sorted or not

// function isSorted(arr, i = 0) {
//     if(i === arr.length - 1) return true;
//     if(arr[i]> arr[i+1]) return false;
//     return isSorted(arr,i + 1)
// }

// console.log("Sorted array", isSorted([1,2,8,4,5,6,7]))

// // reverse a string using recursion

// // function reverseString(str) {
// //     if (str.length === 0) return ""


// //     return reverseString(str.slice(1)) + str[0]
// // }

// // method 2 and optimised solution


// function reverseArray(arr, l = 0, r = arr.length - 1) {
//     if ( l > r) return;
//     [arr[l], arr[r]] = [arr[r], arr[l]]
//     reverseArray(arr, l+1, r-1)
// }
   

// reverseArray(str)

// console.log(str.join(""))


// // palindrome or not

// function isPalindrome(arr, l = 0, r = arr.length -1) {
//     if(l === r) return true;
//     if(arr[l] !== arr[r]) return false
//     return isPalindrome(arr, l+1, r -1)
// }

// const str2 = "madam".split("")

// console.log(isPalindrome(str))


// // Maximum character replacement string

// function characterReplacement(s, k) {
//     let freq = {};
//     let left = 0;
//     let maxFreq = 0;
//     let ans = 0;

//     for(let right = 0; right < s.length; right++) {
//         freq[s[right]] = (freq[s[right]] || 0) + 1;
//         maxFreq = Math.max(maxFreq, freq[s[right]])
//         while((right - left + 1) - maxFreq > k) {
//             freq[s[left]]--;
//             left++;
//         }

//         ans = Math.max(ans, right - left + 1);
//     }
//     console.log(ans)
//     return ans;
// }

// console.log("characterReplacement", characterReplacement("aabcbacc", 2))

// function twoSumSorted(nums, target) {
//     let l = 0;
//     let r = nums.length - 1;
//     while(l < r) {
//         sum = nums[l] + nums[r];
//         if(sum === target) {
//             return [l, r]
//         } else if(sum > target) r--;
//         else l++;
//     }
// }

// // three sum 

// function threeSum(nums, target) {
//     nums.sort((a,b) => a-b);
//     const res = []
//     for(let i= 0; i < nums.length - 2; i++) {
//         let l = i+1;
//         let r = nums.length - 1
//         while(l < r) {
//             let sum = nums[i] + nums[l] + nums[r];
//             if(sum === target) {
//                 res.push(nums[i], nums[l], nums[r])
//             } else if (sum < target) l++;
//             else r--
//         }
//     }

//     return res;
// }

// // container with most water problem

// function maxWaterContainer(arr){
//     let maxArea = 0;
//     let l = 0;
//     let r = arr.length -1;
//     while(l < r) {
//         const minStick = Math.min(arr[l], arr[r])
//         const area = minStick * (r-l)
//        maxArea = Math.max(area, maxArea)
//        if(arr[l] < arr[r]) l++;
//        else r--
//     }
// return maxArea

// }


// Searching and sorting,

// Linear Search
// Binary Search

function linearSearch(arr, target) {
    for(i = 0; i< arr.length; i++) {
        if(arr[i] === target) {
            return i
        } 
    }
    return -1
}

// console.log("linearSearch",linearSearch(arr, 4))



// // Binary Search

// function binarySearch(arr, target) {
//     let sortedArr = arr.sort((a,b) => a-b)
//     let l = 0;
//     let r = arr.length -1;
//     while(l <= r) {
//         let mid = l + Math.floor(r-l/2)
//         if(sortedArr[mid] === target) {
//             return mid
//         } else if(sortedArr[mid] < target) l = mid+1
//         else r = mid - 1
//     }
//     return -1
// }



// function binarySearch(a, target) {
//     let arr = a.sort((a,b) => a-b);
//     let l = 0, r =arr.length-1
//     while(l <= r) {
//         let mid = l + Math.floor(r-l/2)
//         if(arr[mid] === target) {
//             return mid
//         } else if(arr[mid] < target) l = mid+1
//         else r = mid -1
//     }
// }

// [2,3,4,5,6,7]
// // bubbleSort


// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j <arr.length -i - 1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }

// // selection sort

// function selectionSort(arr) {
//     const n = arr.length

//     for(let i = 0; i<n; i++) {
//         let minIndex = i;
//         for(let j = i+1; j < n; j++) {
//             if(arr[j] < arr[minIndex])
//             minIndex = j
//         }
//         if(minIndex !== i) {
//             [arr[i], arr[minIndex]] =  [arr[minIndex], arr[i]] 
//         }
//     }
//     return arr
// }

// // find a number in rotated sorted array


// function SearchRotatedSearch(nums, target) {
//     let left = 0;
//     let right = nums.length -1
//     while(left <= right) {
//         let mid = (left+right)/2
//         if(target === nums[mid]) return mid;
//         if(nums[left] <= nums[mid]) {
//             if(target >= nums[left] && target < nums[mid]) {
//                 right = mid-1
//             } else {
//                 left = mid+1
//             }

//         }
//         else {
//             if(target > nums[mid] && target <= nums[right]) {
//                 left = mid+1
//             } else {
//                 right = mid-1
//             }
//         }

//     }
//     return -1
// }


// // polyfill for map and filter


// Array.prototype.myMap = (cb) => {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       result.push(cb(this[i], i, this));
//     }
//   }
//   return result;
// }


//  Partition Labels

/**
 * @param {string} s
 * @return {number[]}
 */
// var partitionLabels = function(s) {
//    const first = Array(26).fill(-1)
//    const last = Array(26).fill(-1)
//    let ans = [];

//    for(let i = 0; i < s.length; i++) {
//     let curr = s.charCodeAt(i) - 97
//     if(first[curr] < 0) {
//             first[curr] = i
//         } 
//     last[curr] = i
//    }

//    console.log("first", first, "last", last)

//    let startParition= endPartition = 0
//    for(let i = 0; i< s.length; i++) {
//     let curr = s.charCodeAt(i) - 97;
//     if(endPartition <  first[curr]) {
//         ans.push(endPartition - startParition + 1)
//         startParition = endPartition = i
//     }
//     endPartition = Math.max(endPartition, last[curr])

//    }
//    if(endPartition - startParition + 1 > 0) {
//     ans.push(endPartition - startParition + 1)
//    }

//    return ans

// };


// console.log("Kajal",partitionLabels("ababcbacadefegdehijhklij"))

// // Non Overlapping intervals


// /**
//  * @param {number[][]} intervals
//  * @return {number}
//  */
// var eraseOverlapIntervals = function(intervals) {
//     // Sort the interval

//     const sortedInterval = intervals.sort((a,b) =>  a[1] - b[1])
//     console.log("sortedInterval", sortedInterval)

//     let k = -Infinity;
//     let removeCount = 0;
//     for(let i =0; i < intervals.length; i++) {
//         if(arr[i][0] < k) {
//             ++removeCount
//         }
//         k = arr[i][1]
//     }
//     return removeCount
// };

// console.log("Hahaha",eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))


const str = "hello world";

// output "olleh dlrow"

function reverseStr(str) {
    return str.split(" ").map(el => el.split("").reverse().join("")).join(" ")
}
// console.log(reverseStr(str))

// const sentence = "i love js"

// function reverseSentence(sentence) {
//     return sentence.split(" ").reverse().join(" ")
// }

// console.log("reverseSentence", reverseSentence(sentence))

// let str1 = "lisen"
// let str2 = "silent"

// function isTwoStringAnagram(s1, s2) {
//     return s1.split("").sort().join("") === s2.split("").sort().join("")
    
// }

// console.log("isTwoStringAnagram", isTwoStringAnagram(str1, str2))


// // Pollyfill for map

// Array.prototype.myMap = function(cb = ()=>{}) {
//     let result = [];
//     for(let i = 0; i< this.length; i++) {
//         if(this.hasOwnProperty(i)) {
//             result.push(cb(this[i], i, this))
//         }
//     }

//     return result

// }

Array.prototype.myMap = function(cb) {
    let result = [];
    for(let i = 0; i < this.length; i++){
        if(this.hasOwnProperty(i) && cb(this[i], i , this)  ) {
            result.push(this[i])
        }
    }
}

// // pollyfill for filter


// Array.prototype.myFilter = function(cb) {
//     let result = []
//     for(let i = 0; i < this.length; i++) {
//         if(cb(this[i], i, this)) {
//             result.push(this[i])
//         }
//     }

//     return result
// }

// // Pollyfill for reduce 

// Array.prototype.myReduce = function(cb, initialValue) {
//    let acc = initialValue;
//    let startIndex = 0
//    if(!acc) {
//     acc = this[0]
//     startIndex=1
//    }

//    for(let i = startIndex; i< this.length; i++) {
//     if(this.hasOwnProperty(i)) {
//         acc = cb(acc,this[i], i, this)
//     }
//    }
//    return acc;
// }

Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue;
    let startIndex = 0
    if(acc === undefined) {
        acc = this[0];
        startIndex = 1;
    }
    for(let i = startIndex; i < this.length; i++) {
        if(this.hasOwnProperty(i)) {
            acc = cb(acc, this[i], i, this)
        }
    }
    return acc;
}




// useRef, closure, aaj class aa gya h js me usse phle kya use hota Tha
// event bubbling and capturing
// useMemo, memo, useCallback
// const x = {} // obj
// const x = 10
// both in useEffect dep?


// Object.is comparison
// primitive type and non primitive type
// rerender in context?? its performance, why or why not context
// check the status of inner child when parent state changes normally and in context as well
// customHooks, renderProp, HOC
// Pollyfills, all dsa 

// ref in closures 
// Event Delegation
// Virtualisation
// citation -> lazy loading in popover
// isLazy ? chakra popover

// Basic Custom Even Emmiter

class EventEmmiter{
    constructor() {
        this.events = {}
    }
    on(eventName, cb){
        if(!this.events[eventName]) {
            this.events[eventName] =[]
        }
         this.events[eventName].push(cb)
    }
    off(eventName, cb){
  if(this.events[eventName]) {
    this.events[eventName] =  this.events[eventName].filter(event => event !== cb)
  }
    }
    emit(eventName, data) {
        if(this.events[eventName]) {
            this.events[eventName].forEach(event => event(data))
        } 
    }
}

const emitter = new EventEmmiter();
emitter.on("loginUser", greet)

function greet(name) {
    console.log(`Hello ${name}`)
}

emitter.emit("loginUser", "kajal")

// Time Complexity
// on → O(1)
// emit → O(n)
// off → O(n)

// Browser flow:

// li clicked
// ↓
// event bubbles to ul
// ↓
// ul listener catches it
// ↓
// e.target tells original clicked element

// That’s Event Delegation.

// Delegation means:
// “Let parent handle children events.”
// In react one listener is attahced to root
// Then internally React figures out:

// which component triggered event
// which handler to call

// This is React’s event delegation system.

// Create a function to check equality of 2 variables in js

// Create tabs / autocomplete component

// Pagination/ infinite loading

// Observers

// Critical render path

// Folder structure like vs code in react

// Promise based questions

// Callback based q

// Reddit like n level nested comment section

// Js output based q related to hoisting set timeout promise callbacks

// Callback queue / micro task queue


button.addEventListener("click", (e) => {
   console.log(e);
});
// In JS e means native browser event

// In React This e is NOT native directly. React creates syntheticEvent which wraps the native element


// Pollyfill for flat

function countVovCons(str) {
    let vowels = ["a", "e", "i", "o", "u"]
    let vowelCount = 0
    let constants = 0
    for(let i =0; i< str.length; i++) {
        if(vowels.includes(str[i])) {
            vowelCount++;
        } else if(str[i] >= "a" && str[i] <= "z") constants++;
        
    }

    return {
        viwels: vowelCount,
        consonants:consonants
    }

}

countVovCons("hello akash");

