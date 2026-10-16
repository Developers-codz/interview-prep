//  Print n to 1
// print 1 to n
//  get sum of n numbers
// n+sum(n+1)
// sum of all items in an arrays
// sum of all odd number
// factorial 
// powerOfTwo

// function printNToOne(n) {
//     if(n === 0) return 
//     console.log(n)
//     printToN(--n)
// }
// printNToOne(10)



// function printToN(x) {
//     if(x === 0) return;
//     printToN(x-1)
//     console.log(x)
// }

// printToN(10)


// function sumOfNNumber(n) {
//     if(n === 0) return 0;
//     return n + sumOfNNumber(n-1)
// }

// console.log(sumOfNNumber(5))

// // sum of all items in an arrays

// function sumOfArrItems(arr, index = 0) {
//     if(index === arr.length) return 0
//     return arr[index] + sumOfArrItems(arr, index+1)
// }

// console.log(sumOfArrItems([1,2,3,4,5]))


// const arr = [1,2,3,4,5,11]

// function sumOfOdd(n) {
//     const isOdd = arr[n] % 2 !== 0;
//     if(n === 0) {
//         return isOdd ? arr[n] : 0
//     }
//     return (isOdd ? arr[n] : 0) + sumOfOdd(n-1)
// }

// console.log(sumOfOdd(arr.length - 1))


// function factorial(n) {
//     if(n === 1 || n === 0) return 1
//     return n * factorial(n-1)
// }

// console.log(factorial(5))
// console.log(factorial(0))


// if n is power of 2 then if we keep dividing by 2 then it reaches one\
// odd number cant be power of 2

// function powerOfTwo(n) {
//     if(n === 1) return true;
//     if ( n < 1 || n % 2 !== 0) return false
//     return powerOfTwo(n/2)
// }

// console.log(powerOfTwo(0))

// function fibonacci(n) {
//     if(n <= 1) return n
//     return fibonacci(n-1) + fibonacci(n-2)
// }

// console.log("fibonacci", fibonacci(5))

