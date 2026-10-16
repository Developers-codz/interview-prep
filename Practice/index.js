// Why use hasOwnProperty / i in arr?

// Because sparse arrays exist.

// // forEach

// Array.prototype.myForEach = function (cb) {
//     for(let i = 0; i < this.length; i++) {
//         if(this.hasOwnProperty(i)) {
//             cb(this[i], i, this)
//         }
//     }
// }

// // map pollyfill

// Array.prototype.myMap = function(cb = () => {}) {
//     const result = [];
//     for(let i = 0 ; i < this.length; i++) {
//         if (this.hasOwnProperty(i)){
//             result.push(cb(this[i], i, this))
//         }
//     }

//     return result;
// }


// // MY filter

// Array.prototype.myFilter = function(cb) {
//     let result = [];
//     for(let i = 0; i<this.length; i++) {
//         if(this.hasOwnProperty(i) && cb(this[i],i, this)) {
//             result.push(this[i])
//         }
//     }

//     return result
// }

// // reduce

// Array.prototype.myReduce = function(cb, initialValue){
//     let acc = initialValue;
//     let startIndex = 0
//     if(acc === undefined) {
//         let acc = this[0];
//          let startIndex = 1
//     }

//     for(let i = startIndex; i < this.length; i++) {
//         if(this.hasOwnProperty(i)) {
//             acc = cb(acc, this[i], i, this)
//         }
//     }
//     return acc
// }



// // flat

// Array.prototype.myFlat = function(depth) {
//     const result =[]
//     function flattenArray(arr, depth) {
//         for(let i = 0; i < arr.length; i++) {
//             if(i in arr) {
//                 if(Array.isArray(arr[i]) && depth > 0) {
//                     flattenArray(arr[i], depth - 1)
//                 } else {
//                     result.push(arr[i])
//                 }
//             }
//         }
//     }
//     flattenArray(this, depth)

//     return result
// }

// // Promises Pollyfill

// // Promise.all


// Promise.all = function(promises) {
//     return new Promise((res, rej) => {
//         result = [];
//         count = 0
//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//             .then(value => {
//                 result[index] = value;
//                 count++
//                 if(count === promises.length) {
//                     res(result)
//                 }
//             })
//             .catch(err => {
//                 rej(err)
//             })
//         })
//     })
// }

// // Promise.race

// Promise.race = function(promises) {
//     return new Promise((res,rej) => {
//         promises.forEach((promise) => {
//             Promise.resolve(promise)
//             .then(value => res(value))
//             .catch(error => rej(error))
//         })
//     })
// }


// // Promise.any 

// Promise.any = function(promises) {
    
//     return new Promise((res, rej) => {
//      if(!promises.length) {
//            rej(new AggregateError([], "All promises were rejected"))
//         }
//         let rejArr = []
//         let count = 0
//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//             .then(value => res(value))
//             .catch((err) => {
//                 rejArr[index] = err
//                 count++
//                 if(count === promises.length) {
//                    rej(new AggregateError(rejArr, "All promises were rejected"))
//                 }
//             })
//         })
//     })
// }

// // promise.allSettled

// Promise.myAllSettled = function(promises) {
//     return new Promise((res, rej) => {
//     if(!promises.length ) {
//             return res([])
//         }

//         let result = []
//         let count = 0;
//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//             .then(value => {
//                 result[index] = {
//                     status: "fullfiled",
//                     value
//                 }
//             })
//             .catch(err => {
//                 result[index] = {
//                     status: "rejected",
//                     reason: err
//                 }
//             })
//             .finally(()=> {
//                 count++;
//                 if(count === promises.length) {
//                     res(result)
//                 }
//             })

//         })
//     })
   
// }

// // call Pollyfill

// let obj1 = {
//     name: "kajal"
// }

// let obj2 = {
//     name: "Himadri"
// }


// function getName(age) {
//     console.log(`${this.name} is ${age} years old `)
// }
// // Function.prototype.myCall = function(obj = {}, ...args) {
// //     if(typeof this !=="function") {
// //         throw new Error("function not callable")
// //     }
// //         obj.fn = this
// //         const result = obj.fn(...args)
// //         delete obj.fn
// //         return result
    
// // }

// // getName.myCall(obj1,25)

// // apply 
// // Function.prototype.myApply = function(obj={}, args) {
// //     if(typeof this !=="function") {
// //         throw new Error("function not callable")
// //     }
// //     if(!Array.isArray(...args)) {
// //         throw new Error("typeError", "CreateListFromArrayLike called on non-object")
// //     }
// //     obj.fn = this
// //     const result = obj.fn(...args)
// //     delete obj.fn
// //     return result
// // }

// // getName.myApply(obj2,[25])

// Function.prototype.myBind = function(obj = {}, ...args) {
//     if(typeof this !== "function") {
//         throw new Error("function is not callable")
//     }
//     obj.fn = this
//     return function(...args2) {
//         return obj.fn(...args,...args2)
//     }
// }

// // Debounce


// function debounce(cb, delay){
//     let timerId = null
//     return function(...args) {
//         if(timerId) clearTimeout(timerId)
//         timerId = setTimeout(() => {
//             cb.apply(this, args)
//     }, delay)
//     }
// }

// // Throttle

// function throttle(cb, delay) {
//     let lastCall = 0;
//     return function(...args) {
//         let now = Date.now();
//         if(now-lastCall >= delay) {
//             lastCall = now;
//             cb.apply(this, args)
//         }
//     }
// }

// // EventEmmiter

// // this is observer design pattern

// // class EventEmitter {
// //     constructor(){
// //         // [event]: listener[]
// //         this.event = {}
// //     }

// //     on(eventName, cb) {
// //         // register the [listener] for [events]
// //         if(!this.event[eventName]){
// //             this.event[eventName] =[]
// //         }
// //         this.event[eventName].push(cb)
// //     }
// //     off(eventName, cb) {
// //         if(this.event[eventName]) {
// //             this.event[eventName] = this.event[eventName].filter(ev => ev!==cb)
// //         }
// //     }
// //     emit(eventName, ...args) {
// //         if(!this.event[eventName]) {
// //             return false;
// //         }
// //         if(this.event[eventName]) {
// //             this.event[eventName].forEach(listener => listener(...args))
// //         }
// //     }
// //     once(eventName, cb) {
// //         const wrapperFn = (...args) => {
// //         cb(...args);
// //         this.off(eventName, wrapper)
// //         }
// //         this.on(eventName, wrapperFn)
// //     }
// // }


// // const emitter = new EventEmitter();
// // function greet(data) {
// //     console.log("hello", data)
// // }

// // emitter.on("greet", greet)
// // emitter.on("greet", () => console.log("bbbyyyee"))
// // emitter.emit("greet", "kajal")


// // Vashnavi's interview Questions


// // function chunkArray(arr,n) {
// //     const result = [];
// //     for(let i = 0; i < arr.length; i+=n) {
// //         const chunk = arr.slice(i, i+n)

// //         if(chunk.length < n) {
// //             for(let i = 0; i<chunk.length; i++)
// //             result.push(chunk[i])
// //         } else {
// //             result.push(chunk)
// //         }

// //     }
// //     return result
// // }

// // const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,124,1223,12,34,34];
// // const n = 7;

// // console.log(chunkArray(array, n));

// //  for array = [1,2,3]
// // output = [
// // [1], [2,2],[3,3,3]
// // ]



// // function transformArray(arr) {
// //     return arr.map(num => {
// //         let nested = Array(num).fill(num)

// //         for(let i = 1; i < num; i++) {
// //             nested = [nested]
// //         }

// //         return nested
// //     })
// // }

// // console.log(transformArray([1, 2, 3]));
// // console.log(transformArray([4]));

// // // Check Equality Function

// // function deepEqual(a,b) {
// //     if(a === b) return true
// //     if(a === null || b === null) return false
// //     if(typeof a !== "object" || typeof b !== "object") {
// //         return false
// //     }

// //     //keys
// //     const keysA = Object.keys(a)
// //     const keysB = Object.keys(b)
// //     if(keysA.length !== keysB.length) return false

// //     // recursive comparison

// //     for(let key of keysA) {
// //         if(!keysB.includes(key) || !deepEqual(a[key],b[key])) {
// //             return false
// //         }
// //     }

// //     return true
// // }

// // console.log(deepEqual(5,5))

// // Deep clone polyfill

// function deepClone(obj) {
//     if(obj === null || typeof obj !== "object") {
//         return obj;
//     }
//     console.log("obj",obj)
//     console.log("clonedd",obj.map(deepClone))
//     if(Array.isArray(obj)) {
//         return obj.map((el)=>deepClone(el))
//     }

//     const cloned = {}

//     for(let key in obj) {
//         cloned[key] = deepClone(obj[key])
//     }
//     return cloned
// }

// let obj = {
//     name: "kajal",
//     age: 25,
//     nums: [1,2,3,4]
// }

// let arr = [1,3,4]

// console.log(deepClone(obj))
// console.log(deepClone(arr))



// // 
// // null vs undefined

// //prototype
// // this
// // garbage collector
// // first class function
// // HOD


// // function statement  or Function declaration  both are same
// function a() {

// }

// //function expression
// var b = function(){

// }


// // Anonymous function
// // function (){

// // }

// // named function

// var b = function xyz(){

// }

// //  calling xyz() will give reference error

// //  Difference between paramneters and arguments ?

// var b = function(params){ // identifiers or labels

// }
// b(arguments)


// // first class function

// // functions can be passed inside functions as an arguements and can return a function as well
// // the ability to use functions as value and it can be passed to other function as an argument and can be returned from the function, this ablity in js 
// // is called first class function

// // functions are first class citizens

// // arrow function
// const fn = () => {}

// callback function in js

setTimeout(() => {
    console.log("timer")
},5000)

function x(y) {
    console.log("x")
    y()
}

x(function y(){ console.log("y")})

// MutationObserver and promises -> microtask queue

// Starvation of macrotask queue

// currying in JS

function currySum(a) {
    return function(b) {
        if(b!== undefined) {
            return currySum(a+b)
        }
        return a
    }
}


console.log(currySum(1)(2)(12)(12)())

// polyfill for currying


function curry(fn) {
    return function curried(...args) {
        if(args.length >=fn.length) {
            return fn(...args)
        }

        return function(...nextArgs){
            return curried(...args,...nextArgs)
        }
    }
}


function curry(fn) {
    return function curried(...args){
        if(args.length >= fn.length) {
            return fn(...args)
        } 
        return function(...nextArgs) {
            return curried(...args, ...nextArgs)
        }
    }   
}

// Memoisation

function memoize(fn) {
    const cache = {}
    return function(...args){
       const key = JSON.stringify(args)
       if(cache[key]) {
        console.log("from cache")
        return cache[key]
       } 
       console.log("computed");
       const result = fn(...args)
       cache[key] = result

       return result
    }
}
// better use map instead of object


function memoizeWithMap(fn) {
    const cacheMap = new Map()
    return function(...args){
       const key = JSON.stringify(args)
       if(cache.has(key)) {
        console.log("from cache")
        return cache.get(key)
       } 
       console.log("computed");
       const result = fn(...args)
       cache.set(key,result)

       return result
    }
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));

// Useful for:

// recursive problems
// API response caching
// React optimizations
// selectors
// heavy computations

// Remove Duplicate Characters from String

const str = "aabbcc";

const unique = [...new Set(str)].join("");

console.log(unique);

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

const unique = [
  ...new Map(
    users.map((user) => [user.id, user])
  ).values(),
];

console.log(unique);

// using reduce

const arr = [1, 2, 2, 3];

const unique = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }

  return acc;
}, []);

console.log(unique);


// Simple

const arr = [1, 2, 2, 3, 4, 4];

const unique = [...new Set(arr)];

console.log(unique);