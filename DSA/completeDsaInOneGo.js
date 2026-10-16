// // Array and strings

// // two sum 
 
// // If array is sorted then two pointer approach is optimal solution (Using two pointer)
// // function twoSum(arr,k) {
// //     let left = 0;
// //     let right = arr.length-1;
// //     while(left < right) {
// //         if(arr[left] + arr[right] === k) {
// //             return [left, right]
// //         } else if(arr[left] + arr[right] > k ) {
// //             right--
// //         } else {
// //             left++
// //         }
// //     }
// //     return -1
// // }

// console.log(twoSum([-1,2,3,4,8], 5))

// // If array is unsorted then (Using Hasmap)


// function twoSum(arr, k) {
//   const map = new Map();
//   for(let i = 0; i < arr.length; i++) {
//     let compliment = k - arr[i];
//     if(map.has(compliment)) {
//         return [map.get(compliment),i]
//     }
//     map.set(arr[i],i)
//   }
//   return -1
// }
// console.log([4,6,5,2,8])
// console.log(twoSum([4,6,5,2,8], 8))


// // Group Anagram

// const anagaramArr = ["eat", "tea", "tan", "ate", "nat", "bat"]

// function groupAnagram(arr) {
//     const map = new Map();
//     for(let i = 0 ; i < arr.length; i++) {
//         const sortedItem = arr[i]?.split("").sort().join("")
//         if(!map.has(sortedItem)){
//             map.set(sortedItem,[])
//         }
//         map.get(sortedItem).push(arr[i])
//     }

//     return Array.from(map.values())
// }

// console.log(groupAnagram(anagaramArr))

// // using frequency Map


// function groupAnagramFrequency(arr) {
//     let map = new Map();
//     for(let word of arr) {
//         let count = new Array(26).fill(0);
//         for(let char of word) {
//             count[char.charCodeAt(0) - 97]++
//         }
//         let key = count.join("#");
//         if(!map.has(key)) {
//             map.set(key,[])
//         }
//         map.get(key).push(word)
//     }
//     return Array.from(map.values())
// }  
// console.log("frenquency",groupAnagramFrequency(anagaramArr))

// group Anagram




// // First non repeating characters

// function firstNonRepeatingChars(str) {
//     const map = new Map();
//     for(let char of str) {
//         map.set(char, (map.get(char) || 0) + 1 )
//     }

//    for(let char of str) {
//         if(map.get(char) === 1) {
//             return char
//         }
//    }
//    return -1
// }


// // Longest Substring without repeating characters

// function findLongestSubString(str) {
//     let left = 0;
//     let maxLength = 0
//     let set = new Set()
//     for(let right = 0; right < str.length; right++) {
//         while(set.has(str[right])) {
//             set.delete(str[left])
//             left++
//         }
//         set.add(str[right])
//         maxLength = Math.max(right-left+1, maxLength)
//     }
//     return maxLength

// }

// const str = "abcddefabcdj"

// console.log(findLongestSubString(str))


// // Move zeros to the end use two pointer approach


// function moveZeroesToEnd(arr) {
//     let p1 = 0;
//     for(let p2 = 0; p2 < arr.length; p2++) {
//         if(arr[p2] !== 0) {
//             let temp = arr[p2];
//             arr[p2] = arr[p1];
//             arr[p1] = temp;
//             p1++;
//         }
//     } 
//     return arr
// }

// console.log(moveZeroesToEnd([0,1,0,3,12]))

// // Product of array Except self


// var productExceptSelf = function(nums) {
//     let prefixArr = new Array(nums.length).fill(1);
//     let suffixArr = new Array(nums.length).fill(1)
//     let result =  new Array(nums.length).fill(1)
//    let prefix = 1;
//    let suffix = 1
//    for(let i = 0; i < nums.length; i++) {
//         prefixArr[i] = prefix; 
//         prefix *=nums[i]
//    }

//    for(let j = nums.length-1; j >= 0 ; j--) {
//     suffixArr[j] = suffix;
//     suffix *= nums[j]
//    }

//    for(let i = 0; i < nums.length; i++) {
//         result[i] = prefixArr[i] * suffixArr[i]
//    }

//    return result

// };

// console.log(productExceptSelf([1,2,3,4]))

// // A valid palindrome


// const strg = " A man, a plan, a canal: Panama "

// function isAlphaNum(char) {
//     let code = char.charCodeAt(0);

//     // 0-9
//     if (code >= 48 && code <= 57) return true;

//     // A-Z
//     if (code >= 65 && code <= 90) return true;

//     // a-z
//     if (code >= 97 && code <= 122) return true;

//     return false;
// }


// function isValidPalindrome(str) {
//     let left = 0;
//     let right = str.length-1
//     while(left < right) {
//         const isLeftValid = isAlphaNum(str[left]) 
//         const isRightValid =  isAlphaNum(str[right])
//         if(!isLeftValid){
//             left++
//             continue
//         }
//         if(!isRightValid) {
//             right--;
//             continue
//         }
//         if(str[left].toLowerCase() !== str[right].toLowerCase()) 
//             return false;
//         left++;
//         right--
//     }
//     return true
// }

// console.log(isValidPalindrome(strg))



// // Subarray sum equals K

// function subArrayEqualK(nums, k) {
//     const map = new Map()
//     map.set(0,1)
//     const count = 0;
//     const sum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         sum+=nums[i];
//         if(map.has(sum - k)) {
//             count += map.get(sum-k)
//         }
//         map.set(sum, (map.get(sum) ||0) + 1)
//     }

//     return count
// }

// Top k frequent Element

// function topKFrequency(nums,k) {
//     let map = new Map();
//     for(let num of nums) {
//         map.set(num, (map.get(num) || 0) + 1)
//     }

//     const arr = Array.from(map.entries())
//     arr.sort((a,b) => b[1]- a[1])
//     return arr.slice(0,k).map(el => el[0])
// }

// // Optimal Code
// var topKFrequent = function(nums, k) {
//     let map = new Map();

//     for (let num of nums) {
//         map.set(num, (map.get(num) || 0) + 1);
//     }

//     let bucket = Array(nums.length + 1).fill().map(() => []);

//     for (let [num, freq] of map.entries()) {
//         bucket[freq].push(num);
//     }

//     let result = [];

//     for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
//         if (bucket[i].length > 0) {
//             result.push(...bucket[i]);
//         }
//     }

//     return result.slice(0, k);
// };

// console.log(topKFrequency([1,1,1,2,2,3],2))

// // valid parenthesis problem



// function isValidParenthesis(str) {
//     let stack = [];
//     for(let char of str) {
//         if(char === "(") stack.push(")")
//         else if(char === "{") stack.push("}")
//         else if(char === "[") stack.push("]")
//         else {
//             if(stack.length === 0 || stack.pop() !== char) return false
//         }
//     }
//     return stack.length === 0
// }



// best time to buy and sell stock

// function maxProfit(prices) {
//     let maxProfit = 0;
//     let minPrice = Infinity
//     for(let price of prices) {
//         if(price < minPrice) {
//             minPrice = price
//         } else {
//             maxProfit = Math.max(maxProfit, price-minPrice)
//         }
//     }

//     return maxProfit
// }

// console.log(maxProfit([7,1,5,3,16,4]))


// Minimum room required

// function minRoomReq(intervals) {
//     if(intervals.length === 0) return 0;
//     let i = 0;
//     let j = 0;
//     let start = intervals.map(el => el[0]).sort((a,b) => a-b)
//     let end = intervals.map(el => el[1]).sort((a,b) => a-b)
//     let maxRoom = 0;
//     let rooms = 0;
//     while(i < start.length) {
//         if(start[i] < end[j]) {
//             rooms++;
//             i++;
//         } else {
//             rooms--;
//             j++;
//         }
//         maxRoom = Math.max(maxRoom, rooms)
//     }
//     return maxRoom
// }

// Merge Interval
// [[1,3],[2,6],[8,10],[15,18]]

function mergeInterval(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    let result = [intervals[0]]

    for(let i = 1; i <intervals.length; i++) {
        let last = result[result.length - 1]
        let curr = intervals[i]
        if(last[1] >= curr[0]) {
            last[1] = Math.max(last[1], curr[1])
        } else {
            result.push(intervals[i])
        }
    }
    return result
}


console.log(mergeInterval([[1,3],[2,6],[8,10],[15,18]]))
// intervals = [[1,3],[6,9]]
// newInterval = [2,5]
// [[1,5],[6,9]]

function insertInterval(intervals, newInterval) {
    let result = [];

    for(let i = 0; i < intervals.length; i++) {
        let curr = intervals[i];

        if(curr[1] < newInterval[0]) {
            result.push(curr)
        }
        else if(curr[0] > newInterval[1]) {
            result.push(newInterval)
           for(let j = i+1; j < intervals.length; j++) {
                result.push(intervals[j])
            }
            return result
          
        }
        else {

            newInterval[0] = Math.min(newInterval[0],curr[0])
           newInterval[1] = Math.max(newInterval[1],curr[1])
           result.push(newInterval);

           
        }
        
    }
    return result;

}

// Insert Interval
// intervals = [[1,3],[6,9]]
// newInterval = [2,5]
// [[1,5],[6,9]]


// console.log(insertInterval([[1,3],[6,9]],[2,5]))
// console.log(insertInterval([[1,3],[6,9]],[4,10]))
// const interval = [[1,2], [3,5], [6,7], [8,10], [12,14]]
// const new1 = [4,8]

// LRU Cache

class Node{
    constructor(key, value){
        this.key =  key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map();

        this.head = new Node(0,0)
        this.tail = new Node(0,0)

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // remove a node from Linkedlist

    remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev
    }

    // Add node right after Head
    addToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node
    }

    // get Method
    get(key){
        if(!this.cache.has(key)) {
            return -1
        }

        const node = this.cache.get(key);

        // Mark as recently used

        this.remove(node)
        this.addToFront(node)
    }
    // put method

    put(key, value) {
        if(this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;

            // move to front

            this.remove(node);
            this.addToFront(node);
            return
        } 
        const node = new Node(key, value);
        this.cache.set(key, node);
        this.addToFront(node)

        // capacity increases
        if(this.cache.length > capacity) {
            const lruNode = this.tail.prev;

            this.remove(lruNode);
            this.cache.delete(lruNode.key)
        }
    }

}


// Two Sum
// Valid Parentheses
// Longest Substring Without Repeating Characters
// Group Anagrams
// Merge Intervals
// Product of Array Except Self

function twoSum(arr, target){
    let map  = new Map();
    for(let i = 0 ; ii <arr.length; i++) {
       let compliment =  target - arr[i];
       if(map.has(compliment)) {
        return [map.get(compliment), i]
       }
       map.set(arr[i], i)
    }

}   

function isValidParenthesis(str) {
    let stack = []
    for(let i = 0; i< str.length; i++ ) {
        if(str[i] === "{" || str[i] === "(" || str[i] === "[") {
            stack.push(str[i])
        }
        else {
            if(stack.length === 0) {
                return false
            } 
            let top = stack.pop()
         if((str[i] === ")" && top !== "(" ) || 
        (str[i] === "}" && top !== "{") || 
        (str[i] === "]" && top !== "[")) {
            return stack.length === 0
        }
    }
}
return true
}

function groupAnagram(arr) {
    let map = new Map();
    for(let word of arr) {
        const count = new Array(26).fill(0);
        for(let char of word){
            count[char.charCodeAt(0) - 97]++
        }
        let key = count.join("#")
        if(!map.has(key)) {
            map.set(key,[])
        }
        map.get(key).push(word)
    }
    return Array.from(map.values())
}

function mergeInterval(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let result = [];
    result.push(intervals[0])
    for(let i = 1; i < intervals.length; i++) {
        let last = result[result.length-1];
        let curr = intervals[i]
        if(curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1])
        } else {
            result.push(intervals[i])
        }
    }
    return result
}

function productOfArrExceptSelf(arr){
    let prefix = 1;
    let suffix = 1;
    let prefixArr = new Array(arr.length).fill(1)
    let suffixArr = new Array(arr.length).fill(1)
    let result = new Array(arr.length).fill(1)

    for(let i = 0; i <arr.length; i++) {
        prefixArr[i] *= prefix;
        prefix = prefix * arr[i];
    }
     for(let i = arr.length-1; i >= 0; i--) {
        suffixArr[i] *= suffix;
        suffix = suffix * arr[i]
    }
     for(let i = 0; i <arr.length; i++) {
        result[i] = prefixArr[i] * suffixArr[i]
    }

    return result
}

function minimumMeetingRoom(arr){
   let start = arr.map(el => el[0]).sort((a,b) => a-b);
let end = arr.map(el => el[1]).sort((a,b) => a-b);

   let p1 = 0;
   let p2 = 0;
   let rooms = 0;
   let maxRoom = 0;
    while(p1 < start.length) {
        if(start[p1] < end[p2]) {
            rooms++;
            p1++;
        } else {
            rooms--;
            p2++;
        }
        maxRoom = Math.max(rooms, maxRoom)
    }
    return maxRoom
}


function reverseLinkedList(head) {
    let prev = null;
    let curr = head;

    while(curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr
        curr = next
    }

    return prev
}

function mergeTwoSortedLinkedList(list1, list2){
    let dummy = new Node(0);
    let tail = dummy;

    let p1 = list1;
    let p2 = list2;

    while(p1 !== null && p2 !== null) {
        if(p1.val < p2.val) {
            tail.next = p1;
            p1 = p1.next
        } else {
            tail.next = p2;
            p2 = p2.next
        }
        tail = tail.next
    }

    if(p1 !== null) {
        tail.next = p1
    } else if(p2 !== null) {
        tail.next = p2
    }

    return dummy.next

}


