// const list = [
//   "apple",
//   "pineapple",
//   "mango",
//   "grapes",
//   "guava",
//   "pear",
//   "banana",
//   "cucumber",
// ];
// const searchBox = document.getElementById("searchbox");
// const menuBox = document.getElementById("menu");
// const box = document.getElementById("box")

// function debounce(cb, delay) {
//   let timerId;
//   return function (...args) {
//     console.log("args", args)
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       cb.apply(this, args);
//     }, delay);
//   };
// }




// function debounce1() {
//   let timerId;
//   return function (...args) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       cb.apply(this, args);
//     }, delay);
//   };
// }


// const debouncedSearch = debounce(onChangeHandler, 2000);

// searchBox.addEventListener("input", debouncedSearch);

// function onChangeHandler(e) {
//   const inputString = e.target.value;
//   menuBox.innerText = "";
//   const filteredList = list.filter((el) => el.includes(inputString));
//   for (let i = 0; i < filteredList.length; i++) {
//     const elm = document.createElement("li");
//     elm.innerText = filteredList[i];
//     menuBox.appendChild(elm);
//   }
// }

// menuBox.addEventListener("click", menuItemClickHandler);

// function menuItemClickHandler(e) {
//   console.log("e", e.target.tagName, searchBox.textContent);
//   if (e.target.tagName === "LI") {
//     searchBox.value = e.target.innerText;
//   }
// }

// Intersection Observer

// uses - ad revenue, infinite scrolling, lazy loading, scroll based animations


// const observer = new IntersectionObserver((entries) => {
//     for(const entry of entries) {
//         const intersecting = entry.isIntersecting;
//         entry.target.style.backgroundColor = intersecting ? "blue" : "green"
//     }
// })

// observer.observe(box)

// // // 1. list 5 tags introduced in html 5
// // // figure, header, audio, section, nav

// // // 2. psudo classes
// // // .btn:hover, :visited, :active, :link

// // // 3. Parsing JWT token without using any library

// // // JWT -> JSON Web Token
// // // safely transfer data from client to server
// // // using atob() -> Decode base64 encoded string and has three parts ->
// // // header, payload and signature
// // // example 

// // const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
// // const tokenPayload = token.split('.')[1]
// // const decoded = JSON.parse(atob(tokenPayload));
// // console.log(decoded) 

// // // 4. Meta tag in HTML
// // // it always goes inside head of your document and contains metadata of html document, it describes what the site is about, who is 
// // // author and so on, used by browser to optimise the search result

// // // 5. What is CORS
// // // Cross origin resource Sharing
// // // HTTP header based mechanism that allows a server to indicate the origin from where the browser is allowed to laod resources
// // // we can allow in the headers in our request to access resources from a particular site for a particular site

// // // 6. Async / Differ
// // // two diff attributes for script tag, which tells the browser when and how to load the script or JS code when encountered

// // // Difference
// // // async as soon as downloaded, gets rendered irrespective of HTML rendering is done or not on the other hand differ once html rendering and downloading of script is done
// // // then only renders the script

// // // 7. What is webpack ?
// // // it is a static module bundler for JS, it helps us bundle all the js and provide a single or multiple entry points and internally builds a dependency graph
// // // and then combines all in one module or multiple that an app needs

// // // 8. What is critical rendering path ?

// // // CRP is the no of steps the browser has to go through in order to convert HTML, CSS and JS into pixels on the screen
// // // it has 5 steps

// // // A. Document Object Model (DOM)
// // // B. CSSOM
// // // C. Render Tree
// // // D. Layout: It decides the size and the position of the element on the screen
// // // D. Paint: This is the final steps after the render tree and layout are finised, the browser will start painting them on the screen



// // function debounce(func, delay) {
// //   let timeoutId;
// //   return function(...args) {
// //     if(timeoutId) clearTimeout(timeoutId);
// //     setTimeout(() => {
// //       func(...args)
// //     }, delay)
// //   }
// // }


// // function throttle(func, delay) {
// //   let flag = false;
// //   return function(...args) {
// //     if(!flag) {
// //       func(...args)
// //       flag = true
// //       setTimeout(() => {
// //           flag = false
// //       }, delay)
// //     }
// //   }
// // }

// // Implement Currying function 
// // simple currying

// // function sum(a){
// //   return function(b) {
// //     return a+b;
// //   }
// // }


// // sum(2)(4)

// // Generic Version

// function curry(fn) {
//   return function curried(...args) {
//     console.log("args", args)
//     if(args.length >= fn.length) {
//       return fn(...args);
//     } else {
    
//       return function(...nextArgs) {
//         return curried(...args, ...nextArgs);
//       }
//     }
//   }
// }


// function multiply(a,b,c) {
//   return a*b*c
// }

// const multiplyCurried = curry(multiply)

// console.log("multiply", multiplyCurried(1)(2)(3) )



// // polyfill for call apply and bind


// Function.prototype.myCall = function(obj, ...args) {
//     if(typeof this !== "function") {
//       throw new Error("Not Callable");
//     }
//     obj.fn = this;
//     obj.fn(...args)
// }

// // polyFill for apply

// Function.prototype.myApply = function(obj, ...args) {
//   if(typeof this !== "function") {
//     throw new Error("Not Callable");
//   }

//   obj.fn = this;
//   obj.fn(...args)
// }

// Basic Syntax for Promise


const promise = new Promise((resolve, reject) =>{
  // if(success) {
  //   resolve();
  // } else {
  //   reject();
  // }
}) 


// Example
function  fetchData() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Something went wrong");
  }, 1000)
})}

// // fetchData
// // .then((data) => console.log("data", data) )
// // .catch(err => console.log("err", err))
// // .finally(() => console.log("FUUFUFUF")) 

// // Async Await

// async function getData() {
//   try{

//     const data = await fetchData()
//     console.log(data)
//   } catch(err) {
//     console.log(err)
//   }
// }

// fetch("https://api.example.com")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));


// async function getResult() {
//   try{
//     const response = await fetch("https://api.example.com");
//     const data = await response.json();
//     console.log(data)

//   }
//   catch(err){
//     console.log("err", err)
//   }
// }


// doTask1()
//   .then(result1 => doTask2(result1))
//   .then(result2 => doTask3(result2))
//   .then(finalResult => console.log(finalResult))
//   .catch(err => console.error(err))


// async function runTasks() {
//   try{
//     const result1 = await doTask1();
//     const result2 = await doTask2(result1)
//     const finalResult = await doTask3(result2)
//     console.log(finalResult);
//   } catch(err) {
//     console.log(err)
//   }
// }

// Parallel promise with promise.all

// polyfill for promise




















