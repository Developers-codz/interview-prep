// Sum of two integers
 

function sumOfTwoIntegers(a ,b) {
    while(b != 0) {
        let sum = a ^ b;
        let carry = (a & b) << 1;

        a = sum;
        b = carry
    }

    return a
}


// Number of 1 bits
function numberOfOneBit(n) {
    let count = 0;
    while(n !== 0) {
        if( n & 1 === 1) {
            count++
        } 
        n = n >> 1
    }

    return count
}

// Counting Bits

function countEcahOneBit(n) {
    let arr = new Array(n+1).fill(0)

    for(let i =1; i < n; i++) {
        arr[i] = arr[i >> 1] + (i & 1)
    }

    return ans
}

// Find missing Numbers

function findMissingNumber(nums) {
    let result = nums.length;

    for(let i = 0; i < nums.length; i++ ) {
        result ^= i;
        result ^= nums[i];
    }

    return result;
}