// // // pollyfill

// // // map

// Array.prototype.myMap = function(callback) {
//     if(typeof callback !== "function") {
//         throw new TypeError(callback, "is not defined")
//     }

//     let newArr = []
//     for(let i = 0; i < this.length; i++) {
//         newArr.push(callback(this[i], i, this))
//     }

//     return newArr
// }





// // let arr = [1,2,3,4]
// // console.log(arr.map(el => el+1))

// // console.log(arr.myMap(el => el+1))


// // // Filter


// // Array.prototype.myFilter = function(callback) {
// //     if(typeof callback !== "function") {
// //         throw new TypeError(callback, "is not defined")
// //     }

// //     let newArr = []

// //     for(let i = 0; i < this.length; i++) {
// //         if(callback(this[i], i, this)) {
// //             newArr.push(this[i])
// //         }
// //     }

// //     return newArr
// // }

// // console.log(arr.myFilter(el => el >1))

// // Array.prototype.myReduce = function(cb, initialValue) {
// //     let accumulator = initialValue;
// //     let startIndex = 0;
// //     if(accumulator == undefined) {
// //         accumulator = this[0]
// //         startIndex = 1
// //     }

// //     for(let i = startIndex; i < this.length; i++) {
// //         if(this.hasOwnProperty(i)) {
// //             accumulator = cb(accumulator, this[i], i , this)
// //         }
// //     }
// //     return accumulator
// // }

// // console.log(arr.myReduce((acc, curr) => {
// //     return acc+curr
// // }, 0))




// // // flat

// // const flattenArr = [1,2,[3,4,[4,5]]].flat(3)
// // console.log(flattenArr)

// // Array.prototype.myFlat = function(depth = 1){
// //     if(this == null) {
// //         throw new TypeError("array is undefined or null")
// //     }
// //     let result = [];
// //     (function flatten(arr, d) {
// //         for(let i = 0; i < arr.length; i++) {
// //             if (i in arr) {
// //                 if(Array.isArray(arr[i]) && d > 0){
// //                     flatten(arr[i], d-1)
// //                 } else {
// //                     result.push(arr[i])
// //                 }
// //             }
// //         }
// //     })(this, depth)
// //     return result
// // }



// [1,2,[3,4,[4,5,[6,7,7, [8,5]]]]].myFlat(3)

// // console.log([1,2,[3,4,[4,5,[6,7,7, [8,5]]]]].myFlat(3))
// // console.log([1,2,[3]].myFlat(3))

// // Promise Methods


// // Promise.all
// // Promise.race
// // Promise.allSettled
// // Promise.any

// // const promise = new Promise((res,rej) => {
// //     console.log("one")
// //     rej(2)
// //     res(1)
// //     console.log("three")
// // })


// // Promise.resolve(19).then(value => {
// //     console.log(value)
// // }).catch(err => console.log(err))
// // .finally(() => console.log("hahahhahahahha"))


// // const allPr = Promise.all([
// //     Promise.resolve(2),
// //     Promise.reject(4)
// // ])

// // const racePr =  Promise.race([
// //     new Promise((res, rej) => setTimeout(() => res(1), 100)),
// //     new Promise((res, rej) => setTimeout(() => rej(1), 300))
// // ])

// // const stPr = Promise.allSettled([
// //     Promise.resolve(2),
// //     Promise.reject(4)
// // ])

// // const anyPr = Promise.any([
// //     Promise.reject(2),
// //     Promise.reject(4)
// // ])

// // console.log(1 ,allPr);
// // console.log(2,racePr)
// // console.log(3,stPr)
// // console.log(4,anyPr)


// // // Pollyfill for promise.all

// Promise.myAll = function(promises) {
//     return new Promise((res, rej) => {
//         if(!promises.length) {
//             return res([])
//         }
//         const result = [];
//         let count = 0
//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//             .then(value => {
//                 result[index] = value
//                 count++;
//                 if(count === promises.length) {
//                     res(result)
//                 }
//             }).catch(err => rej(err))
//         });
//     })
// }


// // Pollyfill for Promise.race
// Promise.myRace = function(promises) {
//     return new Promise((res, rej) => {
//         if(!promises.length) {
//             return

//         }
//         promises.forEach((promise) => {
//             Promise.resolve(promise)
//             .then(value => res(value))
//             .catch(err => rej(err))
//         })
//     })
// }


// // // Pollyfill for Promise.any

// Promise.myAny = function(promises) {
//     return new Promise((res, rej) => {
//         if(!promises.length) {
//            rej(new AggregateError(errors, "All promises were rejected"))
//         }
//         let rejArr = [];
//         let count = 0
//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//             .then((value) => res(value))
//             .catch(err => {
//                 rejArr[index] = err
//                 count++
//                 if(count === promises.length) {
//                     rej(new AggregateError(errors, "All promises were rejected"))
//                 }
//             }
//             )
//         })
//     })
// }


// // // Promise.allSettled

// Promise.myAllSettled = function(promises) {
//     return new Promise((res, rej) => {
//         if(!promises.length) {
//             return res([])
//         }
//         let result = []
//         let count = 0
//         promises.forEach(((promise, index) => {
//             Promise.resolve(promise)
//             .then(value => {
//                 result[index] ={ 
//                     status: "fulfilled",
//                     value};
//             })
//             .catch(err => result[index] = {
//                 status: "rejected",
//                 reason:err
//             })
//             .finally(() => {
//              count++;
//             if(count === promises.length) {
//                 res(result)
//             }
//         })
//         }))
//     })
// }

// // This
// // What is this ?
// // this in strict and non strict mode
// // this refers to global window object
// // this in object function
// // this in arrow function
// // this inside constructor function
// // this in class
// // this in event listner
// // call, apply, bind


// // Question practice on string and arrays

// const str = "JavaScript";
// const subStr = str.slice(4)
// console.log(subStr)

// // Convert the first letter of each word to uppercase.

// // const str = "hello world";

// // const res = str.split(" ").map(el => el.slice(0,1).toUpperCase() + el.slice(1)).join(" ")
// // console.log(res)

// // //const arr = [1, 2, 3, 4, 5];

// // arr.map(el => el*el)
// // // only even number
// // const arr = [1, 2, 3, 4, 5, 6];

// // arr.filter(el => el%2 ===0)

// // // const str = "apple,banana,orange";

// function reverse(x) {
//     let rev = []
//     for(let i = x.length-1; i >= 0 ; i++) {
//         rev.push(x[i])
//     }
//     return rev
// }

// console.log(reverse([1, 2, 3, 4, 5]))

// // // check palindrome
// // const str = "racecar";

// // function isPalindrome(str) {
// //     let start = 0;
// //     let end = str.length -1;
// //     let isPalindrome = true;
// //     for(let i = 0; i < str.length/2; i++) {
// //         if(str[start]!==str[end]) {
// //             isPalindrome = false
// //         } 
// //             start++;
// //             end--
// //     }
// //     return isPalindrome
// // }
// // isPalindrome(str)


// // flatten a nested array
// // const arr = [1, [2, [3, [4, 5]]], 6];

// // function flattenArray(arr) {
// //     if(!arr.length) {
// //         return []
// //     }
// //     let result = [];
// //     (function flatten(a){
// //         for(let i = 0; i < a.length; i++) {
// //                 if(Array.isArray(a[i])) {
// //                    flatten(a[i]) 
// //                 } else {
// //                     result.push(a[i])
// //                 }
// //             }
// //     })(arr)
// //     return result 
// // }
// // console.log(flattenArray(arr))

// const arr = [1, 2, 3, 4, 5];
// const k = 3;


// function reverseArr(arr, start = 0, end = arr.length-1) {
//     while(start < end) {
//         let temp = arr[start];
//         arr[start]= arr[end];
//         arr[end] = temp;
//         start++;
//         end--
//     }
//     return arr
// }

// function rotateArrayByK(arr,k) {
//     reverseArr(arr, 0, arr.length-1)
//     reverseArr(arr, 0, k-1)
//     reverseArr(arr,k, arr.length-1)
//     return arr
// }

// console.log(rotateArrayByK(arr,k))

// //First Non-Repeating Character
// // const str = "leetcode";


// function firstNonRepeatingChars(str) {
//     const freq = new Array(26).fill(0);
//     for(let char of str) {
//         freq[char.charCodeAt(0)- 97]++;
//     }

//     // find the unique 

//     for(let i = 0; i <str.length; i++) {
//         if(freq[str.charCodeAt(i) - 97] === 1) {
//             return i
//         }
//     }
//     return -1
// }

// // For loop 
// // Classic for Loop

// // What it gives you
// // Full control
// // Access to index
// // Can break / continue
// // Can iterate forward or backward

// // When to use?
// // When you need index
// // When you need reverse traversal
// // When performance matters (slightly faster)

// // for...of ✅ (Most Used in Modern JS)

// // What it gives you

// // Direct value
// // Works on iterable objects:
// // Array
// // String
// // Map
// // Set

// // When to use?
// // When you only care about values
// // Cleaner syntax
// // Preferred in interviews for iteration


// // for...in ⚠️ (Be Careful)

// // syntax ->
// //  for (let key in object) {
// // }

// // What it gives you
// // Keys (not values)

// // 🚨 Why for...in is dangerous for arrays?
// // Because it:
// // Iterates over enumerable properties
// // Can include inherited properties
// // Not guaranteed order in some cases
// // Index comes as string

// // Interview rule:
// // 👉 Never use for...in for arrays

// // Debounce 

// function debounce(fn, delay) {
//     let timerId;
//     return function(...args) {
//         if(timerId) clearTimeout(timerId);
//         timerId = setTimeout(() => {
//             fn.apply(this,args)
//         }, delay)
//     }
// }

// function throttle(fn,delay) {
//     let lastCall = 0;
//     return function(...args) {
//         let now = Date.now();
//         if(now - lastCall >= delay) {
//             lastCall = now;
//             fn.apply(this, args)
//         }
//     }
// }


// /**
//  * Function needs to be execute in sendOnce function
//  */
// function send(message) {
//   setTimeout(() => {
//     console.log('send called with message:', message, 'at', new Date().toISOString());
//   }, 1000); // 1 second delay
// }

// /**
//  * sendOnce function should call send function 
//  * next call of sendOnce function should only be called once the send() of previous sendOnce function will be completed.
//  */

// let lastPromise = Promise.resolve()
// function sendOnce(payload, callback) {
//   // Call send function here
//   lastPromise = lastPromise.then(() => {
//     return 
//   })
// }

// // 1st call of sendOnce
// sendOnce({ name: 'call 1' }, () => console.log('Callback'))
// // 2nd call of sendOnce 
// // this call should only be start once the send() of above sendOnce() will complete.
// sendOnce({ name: 'call 2' }, () => console.log('Callback2'))
// // 3rd call of sendOnce
// sendOnce({ name: 'call 3' }, () => console.log('Callback3'))
// // 4th call of sendOnce
// sendOnce({ name: 'call 4' }, () => console.log('Callback4'))

// // Web app
// // API design
// // Web security issues (XSS, XSRF)
// // Browser/DOM events and event handling
// // CSS manipulation
// // Prototypical inheritance
// // DOM API and manipulation
// // XHR requests and HTTP headers


// // Two Sum

// function twoSum(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     // Assuming arr is sorted. If not sorted, sort it first: arr = arr.slice().sort((a, b) => a - b)
//     while (left < right) {
//         const sum = arr[left] + arr[right];
//         if (sum === target) {
//             return [left, right];
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return null;
// }

// function lengthOfLongestSubstring(s) {
//     let maxLen = 0;
//     let left = 0;
//     const seen = new Map();

//     for (let right = 0; right < s.length; right++) {
//         const char = s[right];
//         if (seen.has(char) && seen.get(char) >= left) {
//             left = seen.get(char) + 1;
//         }
//         seen.set(char, right);
//         maxLen = Math.max(maxLen, right - left + 1);
//     }
//     return maxLen;
// }

// // Example usage:
// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // 3
// console.log(lengthOfLongestSubstring(""));         // 0
// console.log(lengthOfLongestSubstring("dvdf"));     // 3

// // Length of longest substring without repeating characters


// function lengthOfLongestSubString(s) {
//     let left = 0;
//     let right = 0;
//     let maxLength = 0;
//     let charSet = new Set()
//     for(right = 0; right < s.length; right++) {
//         while(charSet.has(s[right])) {
//             charSet.delete(s[left])
//             left++;
//         }
//         charSet.add(s[right])
//         maxLength = Math.max(maxLength, right - left + 1)
//     }
//     return maxLength;
//     }


// console.log(lengthOfLongestSubString("abcabcbb")); // 3
// console.log(lengthOfLongestSubString("bbbbb"));    // 1
// console.log(lengthOfLongestSubString("pwwkew"));   // 3
// console.log(lengthOfLongestSubString(""));         // 0
// console.log(lengthOfLongestSubString("dvdf"));     // 3


// // Input:
// // [1, 2, 2, 3, 4, 4, 5]

// // Output:
// // [1, 2, 3, 4, 5]
// // String and Arrays questions

// function removeDuplicate(arr) {
//     let set = new Set()
//     for(let i = 0; i< arr.length; i++) {
//         if(!set.has(arr[i])) set.add(arr[i])
//     }
// return [...set]
// }

// // first non repeating characters

// let s = "loveleetcode"

// function firstNonRepeatingCharacter(str) {
//     const map = new Map()
//     for(let i = 0; i<str.length; i++) {
//         map.set(str[i], map.get(str[i] || 0) +1)
//     }
// // find the character with count 1
//     for(let i = 0; i < str.length; i++) {
//         if(map.get(str[i]) === 1) {
//             return str[i]
//         }
//     }

//     return null

// }

// console.log(firstNonRepeatingCharacter(s))

// Move all the zeroes to the End

// Input:
// [0, 1, 0, 3, 12]

// Output:
// [1, 3, 12, 0, 0]

// let arr = [0, 1, 0, 3, 12]

// function moveZeroToEnd(arr) {
//     let left = 0;
//     let right = 0;
//     for(right; right <arr.length; right++) {
//         if(arr[right] !== 0) {
//             [arr[left], arr[right]] = [arr[right], arr[left]]
//             left++
//         }
//     }

//     return arr
// }

// console.log(moveZeroToEnd(arr))

// // Valid Anagram

// let s = "anagram"
// let t = "nagaram"


// function validAnagram(s,t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     let mapOfS = new Map();
//     let mapOfT = new Map();
//     for(let i = 0;  i < s.length; i++) {
//         mapOfS.set(s[i],mapOfS.get(s[i] || 0) +1)
//     }
//      for(let i = 0;  i < t.length; i++) {
//         mapOfT.set(t[i],mapOfT.get(t[i] || 0) +1)
//     }

//     for(let i = 0; i <s.length; i++) {
//         if(mapOfS.get(s[i]) !== mapOfT.get(s[i])) {
//             return false
//         }

//     }
//     return true


// }

// console.log(validAnagram(s,t))

// let nums = [2, 7, 11, 15]
// let target = 9

// function getSubArrayEqualTarget(arr, target) {
//     let map = new Map()
//     for(let i = 0; i<arr.length; i++) {
//         let compliment = target - arr[i]
//         if(map.has(compliment)) {
//             return [map.get(compliment), i]
//         }
//         map.set(arr[i], i)
//     }
// }

// console.log(getSubArrayEqualTarget(nums,target))

// let str = "A man, a plan, a canal: Panama"

// function isAlphaNumericChar(char){
//     return (char >= "a" && char <= "z") || (char >= "0" && char <= "9")
// } 

// function isPalindrome(str) {

//     let strLower = str.toLowerCase()
    
//     let left = 0;
//     let right = str.length-1;
//     while(left <right) {
//         while(left < right && !isAlphaNumericChar(strLower[left]))  {
//             left++
//         }
//          while(left < right && !isAlphaNumericChar(strLower[right])) {
//             right--
//         }

//         if(strLower[left] !== strLower[right]) {
//             return false
//         }
//         left++;
//         right--;
//     }

//     return true
    
// }

// console.log(isPalindrome(str))

// // best time to buy and  sell a stock
// let prices = [7, 1, 5, 3, 6, 4]


// function bestTime(arr) {
//     let maxProfit = 0
//     let minPrice = arr[0]
//     for(let i = 1; i< arr.length; i++) {
//         minPrice = Math.min(arr[i], minPrice)
//         let profit =  arr[i] - minPrice;
//         maxprofit = Math.max(maxprofit, profit)
//     }

//     return maxProfit
// }

function maxProfit(arr) {
    let maxProfit = 0;
    let minPrice = arr[0]
    for(let i =0; i < arr.length;i++) {
        minPrice= Math.min(arr[i], minPrice)
        let profit = arr[i] - minPrice;
        maxProfit = Math.max(profit,maxProfit)
    }

    return maxProfit
}


// // Product of Array Except Self

// function productOfArray(arr) {
//     let prefixArr = new Array(arr.length).fill(1)
//     let suffixArr = new Array(arr.length).fill(1)
//     let prefix = 1
//     let suffix = 1
//     let result = new Array(arr.length-1).fill(1)

//     for(let i = 0; i< arr.length; i++) {
       
//         prefixArr[i] = prefix
//         prefix = prefix * arr[i]
//     }
//     for(let i = arr.length-1; i >= 0; i--) {
//         suffixArr[i] = suffix
//         suffix = suffix*arr[i]
//     }

//     for(let i = 0; i< arr.length; i++) {
//         result[i] = prefixArr[i] * suffixArr[i]
//     }
// return result


// }

// // Longest Substring Without Repeating Characters

// let sr = "abcabcbb"

// function longestSubString(str) {
//     let p1 = 0;
//     let p2 = 0;
//     let set = new Set()
//     let maxLength = 0;
//     while(p2 < str.length) {
//         while(set.has(str[p2])) {
//             set.delete(str[p1])
//             p1++
//         }
//         set.add(str[p2])
//         maxLength = Math.max(maxLength, p2-p1+1)
//         p2++
//     }

//     return maxLength

// }

// console.log(longestSubString(sr))

// // Max Subarray
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// function maxSubArray(nums) {
//     let maxSum = nums[0];
//     let currSum = nums[0];
//     let p2 = 0;
//     while(p2 < nums.length) {
//         currSum = Math.max(currSum + nums[p2], nums[p2])
//         maxSum = Math.max(maxSum, currSum)
//         p2++
//     }
//     return maxSum

// }

// console.log(maxSubArray(nums))


// currying

// function curry(a) {
//     return function(b) {
//         if(b) return curry(a+b)
//             else return a
//     }
// }


// function curry(a) {
//     return function(b){
//         return function(c) {
//             if(a === "multiply") return b*c
//             if(a === "add") return b+c
//             if(a === "subtract") return b-c
//             if(a === "divide") return b/c
//         }
//     }
// }

// console.log(curry("multiply")(2)(3))
// console.log(curry("add")(2)(3))
// console.log(curry("subtract")(5)(2))
// console.log(curry("divide")(6)(3))


// function curri(func) {
//     return function curried(...args){
//         if(args.length >= func.length) {
//             return func(...args)
//         }
//         return function(...next) {
//             return curried(...args, ...next)
//         }
//     }
// }

// const sum = (a,b,c) => a+b+c 
// let totaolSum = curri(sum)

// console.log(curri(sum)(2)(3)(4))

// // console.log(curry(2)(3)(4)())

// // Polyfills for  promises function


// // all
// Promise.myAll = function(promises) {
//     return new Promise((res, rej) => {
//         let result = [];
//         let completed = 0;
//         if(promises.length === 0) {
//             return res([])
//         }

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//             .then((value) => {
//                result[index] = value;
//                completed++;
//                if(completed === promises.length) {
//                     res(result)
//                }
//             })

//             .catch(error => rej(error))
//         }
//         )
//     })
// }

// // allSettled

// Promise.myAllSettled = function(promises) {
//     return new Promise((res, rej) => {
//         let result = [];
//         let isCompleted = 0;
//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//             .then((value) => {
//                 result[index] ={
//                     status: "fulfilled",
//                     value
//                 }
//             })
//             .catch(error => result[index] = {
//                 value: error,
//                 status: "rejected"
//             })
//             .finally(() => {
//                 isCompleted++
//                 if(isCompleted === promises.length) res(result)})
//         })
//     })
// }

// // Any

// Promise.myAny = function(promises) {
//     return new promise((res,rej) => {
//         let completed = 0;
//         let rejRes = []
//         promises.forEach((promise, index)=> {
//             Promise.resolve(promise)
//             .then(value => res(value))
//             .catch(error => {
//                 rejRes[index] = error;
//                 completed++;
//                 if(completed === promises.length) {
//                     rej(new AggregateError(
//                             rejRes,
//                             "All promises were rejected"
//                         ));

//                 }
//             }  )
//         })
//     })
// }


// // Race

// Promise.myRace = function(promises) {
//     return new Promise((res, rej) => {
//         promises.forEach((promise) => {
//             Promise.resolve(promise)
//             .then(value => res(value))
//             .catch(err => rej(err))
//         })
//     })
// }


// function debounce(cb, delay) {
//     let timerId = null

//     return function(...args){
//         clearTimeout(timerId)
//         timerId = setTimeout(()=> {
//             cb.apply(this, args)
//         }, delay)
//     }
// }

// function throttle(cb, delay) {
//     let lastCall = 0;
//     return function(...args){
//         let now = Date.now()
//         if(now - lastCall > delay) {
//             lastCall = now
//             cb.apply(this, args)
//         }
//     }
// }

// let hel = "Hello World";

// console.log(hel.split(" ").map(word => word.split("").reverse().join("")).join(" "))

// function revertString(str) {
//     let final = ""
//     for(let word of str.split(" ")) {
//         let res = ""
//         for(let i = word.length -1; i >= 0; i--) {
//             res +=word[i] 
//         }
//         final += res + " "
//     }

//     return final.trim()
// }

// console.log(revertString(hel))

// // count consonant and vowel

// function consonentAndVowel(str) {
//     let smallCaseStr = str.toLowerCase()
//     let vowels = ["a", "e", "i", "o", "u"]
//     let vowelCount = 0;
//     let consonentCount = 0;

//     for(let i = 0; i <smallCaseStr.length; i++) {
//         if(vowels.includes(smallCaseStr[i])) {
//             vowelCount++
//         } else if( smallCaseStr[i] >= "a" &&
//             smallCaseStr[i] <= "z"){
//                 consonentCount++
//         }
//     }
// }

// console.log(consonentAndVowel(hel))

// for (var i = 0; i < 3; i++) {
//  (function(i){
//     setTimeout(() => console.log(i), 0)
//  })(i)
// }

// function minRooms(meetings){
//     const starts = meetings.map(meeting => meeting[0].sort((a,b) => a-b));
//     const ends = meetings.map(meeting => meeting[1].sort((a,b) => a-b));

//     let start = 0;
//     let end = 0;
//     let room = 0;
//     let maxRoom = 0;
//     while(start < meetings.length) {
//         if(starts[start] < ends[end]) {
//             room++;
//             start++
//             maxRoom = Math.max(maxRoom, room);
//         } else {
//             room--
//             end++
//         }
//     }

//     return maxRoom
// }

// subarray sum equal k 
let nums = [1,2,2,1,2]
const k = 3


function SubArraySumCount(nums, k) {
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum+=nums[j]

            if(sum === k) {
                count++
            }
        }
    }
    return count
}

console.log(SubArraySumCount(nums, k))

// optimal Approach


// Arrise
// Design and implement a **chainable calculator** in JavaScript using a **class**, such that it supports the following operations:

// - `add(number)`
// - `subtract(number)`
// - `multiply(number)`
// - `getValue()`


class Calculator{
   constructor(value= 0){
    this.value = value
   }
   add(num) {
    this.value+=num
    return this;
   }

   subtract(num){
    this.value-=num
    return this;
   }

   multiply(num) {
    this.value*=num
    return this;
   }

   divide(num) {
    this.value/=num
    return this;
   }


  getValue() {
    return this.value;
  }



}

class ChainableCounter{
    constructor(value = 0){
        this.value = value
    }

    increement(){
        this.value+=1;
        return this;
    }
     decreement(){
        this.value-=1;
         return this;
    }

    getValue(){
        return this.value
    }
}

const counter = new ChainableCounter(0)

counter.increement().increement().decreement().getValue()

class StringBuilder{
    constructor(value = ""){
        this.value = value
    }
    append(str){
        this.value+=str;
        return this;
    }
    prepend(str){
        this.value=str+ this.value;
        return this
    }
    upperCase(){
        this.value = this.value.toUpperCase();
        return this;
    }
     lowerCase(){
        this.value = this.value.toLocaleLowerCase();
        return this;
    }
    getValue(){
        return this.value
    }
 
}

// Query Builder

class QueryBuilder{
    constructor(){
       this.condition = [],
       this.limitValue = null
    }


    where(field, operator, value){
        this.condition.push({
            field, 
            operator,
            value
        })
        return this;
    }

    limit(value){
        this.limitValue = value;
          return this;
    }

    builder() {
        return {
            conditions: this.condition,
            limit: this.limitValue
        }
    }
}

// event Emitter

class EventEmitter{
    constructor(){
        this.events = {}
    }

    on(eventName, callback){

       if(!this.events[eventName]) {   
        this.events[eventName] = []
       } 

       this.events[eventName].push(callback)
    }
    emit(eventName, data) {
         if(!this.events[eventName]) return;
        this.events[eventName].forEach(cb => cb(data))
    }
    off(eventName, callback){
        if(!this.events[eventName]) return;
        this.events[eventName] =  this.events[eventName].filter(cb => cb !== callback)
    }
    once(eventName, callBack){

        const wrapper = () => {
            callback();
            this.off(eventName, wrapper)

        }

        this.on(eventName, wrapper)

    }
}

function createCounter(){
    let count = 0;

    function counter(){
        count++;
        return count;
    }
    function reset(){
        count = 0;
        return count;
    }

    return counter;
}

const counter = createCounter();



// DSA Practice
// Find the number of contiguous subarrays whose sum is exactly k.


// brute force approach

function subArrSumCount(arr, k) {
    let count = 0
    for(let i = 0; i< arr.length;i++){
        let sum = 0
        for(let j = i; j < arr.length; j++){
           sum+=arr[j]

           if(sum === k) count++
        }
    }

    return count
}

console.log(subArrSumCount([1, 2, 3], 3))

// optimal approach


function subArrSumCount(nums, k) {
    let map = new Map()
    map.set(0,1);
    let prefixSum = 0;
    let count = 0;
    for(let num of nums) {
        prefixSum+=num;
        if(map.has(prefixSum - k)) {
            count += map.get(prefixSum - k)
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) +1)
    }

    return count
}

// Merge Interval
// sort interval
// overlapping intervals

function eraseOverlapIntervals(intervals){
    intervals.sort((a,b) => a[1]-b[1])
    let count = 0;
    let prevEnd = intervals[0][1];
    for(let i =1; i < intervals.length; i++) {
        let curr = intervals[i]

        if(curr[0] < prevEnd) {
            count++
        } else {
            prevEnd = curr[1]
        }
    }
    return count;
}

// Find the repeating and missing number

function findMissingRepeatingNum(arr) {
    let lengthOfArr = arr.length;
    let sum = arr.reduce((acc, curr) => acc+curr)
    let actualSum = 0
    for(let i = 0; i<lengthOfArr; i++ ){
        actualSum+=i
    }

}

// concurrency

async function fetchWithConcurrency(urls, limit) {
    const results = [];
    let index = 0;

    async function worker() {
        while (index < urls.length) {
            const currentIndex = index++;
            const url = urls[currentIndex];

            try {
                const response = await fetch(url);
                results[currentIndex] = await response.json();
            } catch (error) {
                results[currentIndex] = error;
            }
        }
    }

    const workers = [];

    for (let i = 0; i < limit; i++) {
        workers.push(worker());
    }

    await Promise.all(workers);

    return results;
}


// three sum 

// Randamise function create a randomize() so console.log(a.randomize()) will shuffle the array and return in random order Fisher yates solution

function randomize(arr) {
    for(let i = arr.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

console.log(randomize([1, 2, 3, 4, 5]))



























