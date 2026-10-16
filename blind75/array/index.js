// Two Sum 

class Solution {
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i< nums.length; i++) {
            let compliment = target - nums[i]
            if(map.has(compliment)) {
                return  [map.get(compliment),i]
            }
           map.set(nums[i],i)
        }

        return map
    }
}

// Best time to buy and sell a stock

class Solution {
    stockBuySell(arr, n) {
        let maxProfit = 0;
        let minPrice = arr[0]
        for(let i = 1; i < arr.length; i++) {
            minPrice = Math.min(minPrice, arr[i]);
            let profit = arr[i] - minPrice
            maxProfit = Math.max(profit, maxProfit)
        }

        return maxProfit
     
    }
}

//Contains Duplicate : Check if a value appears atleast twice 

function containsDuplicate(arr) {
    const set = new Set()
    for(let i = 0; i < arr.length; i++) {
        if(set.has(arr[i])) {
            return true
        }
        set.add(arr[i])
    }
    return false
}




//Product of array except self

function productArrExceptSelf(arr) {
    let prefixArr = new Array(arr.length).fill(1);
    let suffixArr = new Array(arr.length).fill(1);
    let result = new Array(arr.length).fill(1)
    let suffix = 1;
    let prefix = 1;
    for(let i=0; i < arr.length; i++) {
        prefixArr[i] = prefix
        prefix = prefix * arr[i]
    }
    for(let i = arr.length-1; i >= 0; i--) {
            suffixArr[i] = suffix;
            suffix = suffix*arr[i]
    }

    for(let i = 0; i< arr.length; i++) {
        result[i] = prefixArr[i] * suffixArr[i]
    }

    return result
}   


// Maximum Subarray Sum 


function MaximumSubArraySum(arr) {
  let currSum = arr[0];
  let maxSum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    currSum = Math.max(currSum, currSum + arr[i]);
    maxSum = Math.max(currSum, maxSum)
  }
  return maxSum
}

// Maximum product subarray in an array 


function MaximumProductSubArray(arr) {
    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for(let i = 1; i < arr.length; i++) {

        let curr = arr[i];

        let prevMax = maxProduct;
        let prevMin = minProduct;


        maxProduct = Math.max(
          maxProduct,
            curr * prevMax,
            curr* prevMin
        );
        minProduct = Math.min(
              minProduct,
            curr * prevMax,
            curr* prevMin
        );

        result = Math.max(result, maxProduct)
    }

    return result
}

// Find minimum in Rotated Sorted Array


// solution 1 good
function minInRotatedArr(arr) {
    let min = arr[0]
    for(let i = 1; i <arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }

    return min
}

// worst solution easy pizy but not a good interview quality
arr.sort((a,b) => a-b)

// best solution
// Using Binary Search

function findMin(arr) {
  let left = 0; 
  let right = arr.length -1;
  while(left < right) {
    let mid = Math.floor((right + left)/2)
    if(arr[mid] > arr[right]) {
         left = mid+1
    } else {
        right = mid;
    }
  }

  return arr[left]
 }


 // Search in rotated sorted array-I

function search(arr, target){
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let mid = Math.floor((left+right)/2)

        if(arr[mid] === target) {
            return mid
        }


        // left half is sorted
        if(arr[left] <= arr[mid]) {
            if(arr[left] < target && target < arr[mid]) {   
                right = mid - 1; 
            } else {
                left = mid + 1;
            }
        }

        // rigth half is sorted
        else {
            if(target < arr[right] && arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
}

 // Container with most water problem

function maxArea(height) {
    let left = 0;
    let right = height = height.length -1;
    let max = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(
            height[left, right]
        )
        const area = width * currentHeight
        max = Math.max(max, area)
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

// Three Sum

function threeSum(arr, target) {
    arr.sort((a,b) => a-b)
    for(let i = 0; i < arr.length -2; i++) {
        let left = i+1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[left] + arr[right] + arr[i]
            if(sum === target) {
                return [left, right, i]
            } else if(sum > target) {
                right --
            } else {
                left++
            }
        }
    }
}




