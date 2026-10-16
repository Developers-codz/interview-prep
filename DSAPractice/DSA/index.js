function twoSum(arr, num){
    let map = new Map();
    for(let i = 0; i < arr.length; i++) {
       let compliment = num - arr[i];
       if(map.has(compliment)) {
        return [i, map.get(compliment)]
       } 
       map.set(arr[i], i)
    }
}

// Three Sum 

function threeSum(nums, target) {
    nums.sort((a,b) => a - b)
   
    for(let i = 0; i< nums.length -2; i++) {
         let left = i+1;
        let right = nums.length-1;
        while(left < right) {
            let sum = nums[left] + nums[right] + nums[i];
            if( sum === target) {
                return [left, right, i]
            } else if(sum > target) {
                right--
            } else {
                left++
            }
        }
    }
}

function containDuplicate(arr) {
    let set = new Set();
    for(let i = 0; i < arr.length; i++) {
        if(set.has(arr[i])) return false;
        set.add(arr[i])
    }
    return false
}

function productOfArrayExceptSelf(arr) {
    let prefix = 1;
    let suffix = 1;
    let prefixArr = new Array(arr.length).fill(1);
    let SuffixArr = new Array(arr.length).fill(1);
    let result = [];
    for(let i = 0; i< arr.length; i++) {
        prefixArr[i] = prefix;
        prefix = prefix * arr[i];

    }

     for(let i = arr.length-1; i >= 0; i--) {
        SuffixArr[i] = suffix;
        suffix = suffix * arr[i];

    }

    for(let i = 0; i< arr.length; i++) {
        result[i] = prefixArr[i] * SuffixArr[i]
    }

    return result
}

function bestTimeToBuyAndSell(arr){
    let maxprofit = 0;
    let minPrice = arr[0];
    for(let i = 1; i< arr.length; i++){
        minPrice = Math.min(minPrice, arr[i]);
        let profit = arr[i] - minPrice;
        maxprofit = Math.max(maxprofit, profit)
    }

    return maxprofit
}

function maxSubArray(arr){
    let currentSum = arr[0];
    let maxSum = arr[0];
    for(let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], arr[i] + currentSum);
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

function moveZeroesToEnd(arr) {
    let left = 0;
    for(let right = 0; right < arr.length; right++) {
        if(arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
        }
    }

    return arr
}

function reverseArr(arr, left, right){
    while(left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

function RotateArrayByK(arr, k){
    reverseArr(arr, 0, arr.length-1)
    reverseArr(arr, 0,k-1)
    reverseArr(arr, k , arr.length-1)
}


// Prefix Sum and hashmap Solution
function subArraySumEqualK(arr, k) {
    let map = new Map();
    map.set(0,1);
    let count = 0;
    let sum = 0;
    for(let i = 0; i< arr.length; i++) {
        sum+=arr[i]
        if(map.has( sum - k)) {
            count+= map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) +1)
    }

    return count
}

function topKFrequency(arr){
    const map = new Map();
    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.get(arr[i] || 0) + 1)
    }


    const arr1 = [map.entries()]
    const sortedArr = arr1[1].sort((a,b) => b[1] - a[1])
    return sortedArr.slice(0,k).map(el => el[0])

}

function repeatingAndMissingNumber(arr){
    let set = new Set();
    let repeating;
    for(let item of arr) {
        if(set.has(item)) {
            repeating = item
        }
        set.add(item)
    }
    let missing;
    for(let i = 1; i <= arr.length; i++) {
        if(!set.has(i)) missing = i
    }

    return [repeating, missing]
}

function containerWithMostWater(arr) {
    let left = 0; 
    let right = arr.length - 1;
    let maxArea = 0;
    while(left <= right) {
        let width = right-left;
        let area = Math.min(arr[left], arr[right]) * width;
        maxArea = Math.max(area, maxArea);
        if(arr[left] < arr[right]) {
            left++
        } else {
            right--
        }
    } 

    return maxArea
}

class LRUCache {
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if(!this.cache.has(key)) {
            return -1;
        }
        let value = this.cache.get(key);

        // move key to end -> recently used

        this.cache.delete(key);
        this.cache.set(key, value);

        return value
    }

    put(key, value){
        // If key already exist remove it first

        if(this.cache.has(key)) {
            this.cache.delete(key)
        }

        // Add it at the end

        this.cache.set(key, value);

        // Remove least recently used

        if(this.cache.size > this.capacity) {
            let firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}