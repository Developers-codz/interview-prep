// CSS Transitions (transition: all 0.3s ease)
// CSS Keyframes Animation
// requestAnimationFrame (how it differs from setInterval)
// Transform & Translate (move or rotate elements smoothly)
// Z-index & positioning
// Canvas basics (optional) – if mentioned in job role

// Problem Solving Questions

// Reverse string / array
// Palindrome
// Count characters
// Remove duplicates
// Find max / second max
// Merge arrays
// Sort logic (custom comparator)

// React

// useState, useEffect
// Handling intervals/timers in useEffect
// Conditional rendering
// Component re-renders
// Passing props and state updates


// ✅ JS: setInterval, setTimeout, closures, event loop
// ✅ DOM: querySelector, classList, style updates
// ✅ UI Logic: timers, progress bars, traffic light
// ✅ CSS: transitions, keyframes, conic-gradient
// ✅ React (if asked): useState, useEffect, cleanup
// ✅ Communication: explain thought process
// ✅ Bonus: repaint/reflow, requestAnimationFrame

// Sliding Window
// Three sum
// roman to number conversion


  function setOfTen(arr, num) {
       arr.sort((a,b) => a-b)
       for(let i = 0; i < arr.length; i++) {
        let left = 0;
        let right = 0;
        while(left < right) {
          const sum = arr[i] + arr[left] + arr[right];
          if(sum === num) {
            return [arr[i], arr[left], arr[right]]
          } else if(sum < num) {
            left++;
          } else {
            right--;
          }
        }
       }
    }

console.log(setOfTen([1,2,3,4,5,6,7,8], 14))



// longest substring without repeating characters


function longestSubstringWithoutRepeatingCharacters(s) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let charSet = new Set();
    for(right = 0; right < s.length; right++) {
        while(charSet.has(s[right])) {
            charSet.delete(s[left])
            left++;
        }
        charSet.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)

    }
    return maxLength;
}

// container with most water

let height = [1,8,6,2,5,4,8,3,7]

function containerWithMostWater(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while(left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        maxArea = Math.max(maxArea, area)
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}
console.log(containerWithMostWater(height))

// 5xx response vs 4xx response


// React hook form and when to use it
// JWT key session key difference
// How authentication works
// HTTP vs HTTPS

// React architecture -> 
// Monolith vs Monorepo vs Microfrontend
// SSR, SSG, CSR, ISR

// System Design

// Group Anagrams
// Valid Anagram
// Longest Substring Without Repeating Characters
//  Valid Parentheses


// QUESTIONS RANDOMLY FROM LINKEDIN

// 1️⃣ Difference between == and === in JavaScript
//  2️⃣ How do Promises work? Explain .then() and .catch()
//  3️⃣ What is Hoisting in JavaScript?
//  6️⃣ How does async / await work internally?
//  7️⃣ What is Lazy Loading and why is it useful?
//  8️⃣ Difference between Observables and Subjects in RxJS
//  🔟 What is CORS and where do we enable it?

// 💻 Round 2 – Practical & Scenario-Based

//  1️⃣ Bind API response data into a table with pagination and search
//  2️⃣ Implement form validation and display dynamic error messages
//  3️⃣ Create a component and pass data using @Input() and @Output()
//  4️⃣ How would you optimize a slow Angular page?
//  5️⃣ Difference between Local Storage, Session Storage, and Cookies
//  6️⃣ Implement Debouncing for a search input field
//  7️⃣ Difference between Subject and BehaviorSubject
//  8️⃣ Explain the use of trackBy in *ngFor for performance optimization
//  9️⃣ How to handle Route Guards in Angular?
//  🔟 Create a Custom Pipe and Directive




// time complexity O(nlogn)

noOfMeetingRooms([[0, 30], [2, 10], [15, 20]])

noOfMeetingRooms([[0, 9], [2, 10], [8, 20]])

noOfMeetingRooms([[3, 30], [2, 10], [15, 20]])

// https://leetcode.com/problems/container-with-most-water/description/
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/


// Bundle size
// webpack


// Promises

let Promise1 = new Promise((res,rej) => {
    let success = false;
    if(success) {
        res("1")
    } else {
        rej("Rejectedt due to problem")
    }
})


Promise1
.then((data) => console.log(data))
.catch((err) => console.log(err))
.finally(() => console.log("Promise run"))


async function fetchData() {
    try {
        const data = await Promise1;
        console.log(data)
    } catch(err) {
        console.log(err)
    }
    
}


// loading
// error
// pending state

// You can use built-in async patterns.

// <form action={submitForm}>



function decompressString(str) {
  let result = "";
  let currNum = 0;
  const stack = [];

  for (let char of str) {
    if (!isNaN(char)) {
      currNum = currNum * 10 + Number(char);
    } else if (char === "(") {
      stack.push([result, currNum]);
      result = "";
      currNum = 0;
    } else if (char === ")") {
      const [prevStr, num] = stack.pop();
      result = prevStr + result.repeat(num);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(decompressString("3(a)")); // "aaa"
console.log(decompressString("2(ab3(c))")); // "abcccabccc"
console.log(decompressString("x2(yz)k")); // "xyzyzk"

// ================================

// Given a tunnel of fixed size n, and a train with m bogies,
// simulate the process of the train
// passing through the tunnel such that:
// One bogie enters the tunnel per second.
// Capture the snapshot of the tunnel’s content every second.
// Continue capturing snapshots until the entire train has passed
// through and the tunnel is empty.
// 1. Inputs
// n → Integer representing the tunnel size (number of bogies that
// can fit at once).
// m → Integer representing the train size (number of bogies).

// 2. Outputs
// A list (or array) of string snapshots, each representing the
//  state of the tunnel at that second.

// Each snapshot must be exactly n characters long.
// "B" represents a bogie.
// "." (or similar) represents an empty space.

function simulateTrainThroughTunnel(tunnelSize, boggieLength) {
  let snapshots = [];
  const tunnel = Array(tunnelSize).fill(".");

  for (let time = 0; time < boggieLength + tunnelSize; time++) {
    tunnel.pop();

    if (time < boggieLength) {
      tunnel.unshift("B");
    } else {
      tunnel.unshift(".");
    }

    snapshots.push(tunnel.join(""));
  }

  return snapshots;
}

console.log(simulateTrainThroughTunnel(5, 3));
// ===============
function foo() {
  var bar = "I'm a bar variable";
  function bar() {
    return "I'm a bar function";
  }
  return bar();
}

console.log(foo());
// ===============

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 123
// ===============

console.log("Start");

const p1 = new Promise((resolve, reject) => {
  console.log("1");
  resolve("2");
  console.log("3");
});

p1.then((res) => console.log(res));
console.log("End");

start
1
3
end
2

// ===============

function output() {
  return new Promise((resolve, reject) => {
    reject("error occurred");
  });
}

output()
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function () {
    console.log("Success 4");
  });


  // LinkedIn resource

//   Here are some of the questions that were asked 👇
// 🔹 What is Closure?
//  🔹 What is Hoisting?
//  🔹 Explain Callback Hell
//  🔹 Explain Redux Architecture
//  🔹 What is a Promise?
//  🔹 Async / Await
//  🔹 How to optimize a slow React UI?
//  🔹 What is ForwardRef?
//  🔹 Explain Compound Components
//  🔹 What are Children Props?
//  🔹 What is Middleware?
//  🔹 API Integration approaches
//  🔹 What is JWT and how does it work?
//  🔹 What is Virtual DOM?
//  🔹 Why is the key prop important in React?
//  🔹 What is React Portal?
//  🔹 Explain your current project architecture

// 💻 Coding Question:

// Find the first non-repeating character in an array/string.
function firstNonRepeatingChar(str) {
 const count = {};

 // Count occurrences
 for (let char of str) {
  count[char] = (count[char] || 0) + 1;
 }

 // Find first non-repeating character
 for (let char of str) {
  if (count[char] === 1) {
   return char;
  }
 }

 return null;
}
console.log(firstNonRepeatingChar("aabbcddeff")); // c

// Interview  React JS Task Assignment

// First, there will be an input field.
// The user will enter a number, such as 5.
// Based on that input, 5 dynamic input fields will be rendered.
// The value of each field will be stored in a separate state variable.
// Upon submission, all the values ​​will be retrieved.


// 𝗠𝗶𝗻𝗱𝘁𝗶𝗰𝗸𝗹𝗲 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗜𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 👨‍💻

// 𝗥𝗼𝘂𝗻𝗱 𝟭 — 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗙𝘂𝗻𝗱𝗮𝗺𝗲𝗻𝘁𝗮𝗹𝘀
// Focused heavily on core JavaScript concepts and implementation-based questions. Topics included polyfills, currying, memoization, and understanding function behavior in depth.

// 𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗿𝗼𝘂𝗻𝗱:
// - 𝗥𝗲𝗱𝘂𝗰𝗲 𝗣𝗼𝗹𝘆𝗳𝗶𝗹𝗹 [ https://lnkd.in/dfn6Mkpf ]

// - 𝗖𝘂𝗿𝗿𝘆𝗶𝗻𝗴 [ https://lnkd.in/edHCc3Vd ]

// - 𝗠𝗲𝗺𝗼𝗶𝘇𝗲 [ https://lnkd.in/eNekbB3m ]

// 𝗥𝗼𝘂𝗻𝗱 𝟮 — 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗖𝗼𝗱𝗶𝗻𝗴
// Asked to build a React app with focus on clean component structure, edge case handling, responsiveness, and maintainable code practices.

// 𝗦𝗶𝗺𝗶𝗹𝗮𝗿 𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻: https://lnkd.in/epFpajBW

// 𝗥𝗼𝘂𝗻𝗱 𝟯 — 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗖𝗼𝗻𝗰𝗲𝗽𝘁𝘀
// Discussion around advanced JavaScript concepts followed by a practical JSON prettifier implementation and data formatting discussion.

// 𝗥𝗼𝘂𝗻𝗱 𝟰 — 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱/𝗦𝘆𝘀𝘁𝗲𝗺 𝗗𝗲𝘀𝗶𝗴𝗻
// Designed a synchronous task runner with concurrency control. The discussion revolved around async execution flow, queue management, scalability, and handling parallel tasks efficiently.



// 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗜𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 𝗮𝘁 𝗣𝗮𝘆𝗣𝗮𝗹
// 𝗥𝗼𝗹𝗲: 𝗦𝗲𝗻𝗶𝗼𝗿 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿 (𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱)

// 𝗥𝗼𝘂𝗻𝗱 𝟭: 𝗢𝗻𝗹𝗶𝗻𝗲 𝗛𝗮𝗰𝗸𝗲𝗿𝗥𝗮𝗻𝗸 𝗔𝘀𝘀𝗲𝘀𝘀𝗺𝗲𝗻𝘁

// - String-based DSA problem
// - Questions on JavaScript classes [𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀: https://lnkd.in/dQpwSp25]
// - Build a UI component in React [𝗦𝗶𝗺𝗶𝗹𝗮𝗿 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻: https://lnkd.in/dv8dEc_5]

// 𝗥𝗼𝘂𝗻𝗱 𝟮: 𝗗𝗦𝗔 𝗿𝗼𝘂𝗻𝗱

// - Triangle (DP)
// - Min Stack (O(1) operations)
// - Topological sort (approach discussion)

// 𝗥𝗼𝘂𝗻𝗱 𝟯: 𝗦𝘆𝘀𝘁𝗲𝗺 𝗗𝗲𝘀𝗶𝗴𝗻 𝗿𝗼𝘂𝗻𝗱

// - Design a Payment Gateway with discussion around transaction flow, consistency and ledger systems, reliability and fault tolerance.

// 𝗥𝗼𝘂𝗻𝗱 𝟰: 𝗧𝗲𝗰𝗵 𝘀𝗽𝗲𝗰𝗶𝗮𝗹𝗶𝘇𝗮𝘁𝗶𝗼𝗻 𝗿𝗼𝘂𝗻𝗱

// - Quick binary search problem
// - Deep dive into React internals:
//  - Virtual DOM
//  - Reconciliation
//  - Diffing algorithm
// - Small UI React component [𝗣𝗿𝗮𝗰𝘁𝗶𝗰𝗲 𝗵𝗲𝗿𝗲: https://lnkd.in/drv6G_wT]

// 𝗥𝗼𝘂𝗻𝗱 𝟱: 𝗕𝗮𝗿 𝗿𝗮𝗶𝘀𝗲𝗿 𝗿𝗼𝘂𝗻𝗱

// - Past experience deep dive
// - Team conflicts, collaboration, ownership
// - Mentorship and decision-making

// 𝗥𝗼𝘂𝗻𝗱 𝟲: 𝗙𝗶𝗻𝗮𝗹 𝗿𝗼𝘂𝗻𝗱 (𝗗𝗦𝗔 + 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁)

// - String problem (remove minimum substring to make characters unique)
// - Deep copy with custom array transformation

// Key takeaways:

// - Strong DSA is important
// - Strong fundamentals for both React & JavaScript were tested
// - 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗰𝗼𝗱𝗶𝗻𝗴 𝗶𝘀 𝗮 𝗺𝘂𝘀𝘁. 𝗗𝗼 𝗽𝗿𝗮𝗰𝘁𝗶𝗰𝗲 𝗮 𝗹𝗼𝘁 𝗼𝗳 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 𝘁𝘆𝗽𝗲 𝗼𝗳 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 [𝗥𝗲𝗰𝗼𝗺𝗺𝗲𝗻𝗱𝗲𝗱 𝗥𝗲𝘀𝗼𝘂𝗿𝗰𝗲: https://lnkd.in/dMPbUR4z]
// - Senior roles heavily evaluate ownership and decision-making



// Todo App
// Search with debounce
// Auto Complete
// Pagination
// Infinite Scroll
// Accordion
// Tabs
// Modal
// OTP Input
// Star Rating
// Shopping Cart
// Nested Comments
// File Explorer
// Kanban Board (basic)

// functional component doesnt have error boundary 
// class component this can be achieved by using  componentDidCatch()
// and in js static getDerivedStateFromError()

// Class	Functional
// componentDidMount	useEffect(() => {}, [])
// componentDidUpdate	useEffect(() => {}, [deps])
// componentWillUnmount	cleanup function returned from useEffect


// 𝗠𝗮𝗸𝗲𝗠𝘆𝗧𝗿𝗶𝗽 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗜𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 | 𝗦𝗲𝗻𝗶𝗼𝗿 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿-𝟮

// The interview consisted of 4 rounds, covering JavaScript, React, Machine Coding, and debugging.

// 𝗥𝗼𝘂𝗻𝗱 𝟭: 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 & 𝗥𝗲𝗮𝗰𝘁

// Some of the questions included:

// 𝟭. 𝗚𝗿𝗼𝘂𝗽 𝗣𝗿𝗼𝗱𝘂𝗰𝘁𝘀 𝗯𝘆 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆

// The question tested various fundamental concepts like:

// - Array methods
// - Object manipulation
// - Time complexity
// - Writing clean, readable code

// 𝗘𝘅𝗮𝗰𝘁 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻: https://lnkd.in/d-5v8ESx

// 𝟮. 𝗔𝘂𝘁𝗼 𝗥𝗲𝘁𝗿𝘆 𝗣𝗿𝗼𝗺𝗶𝘀𝗲 𝗼𝗻 𝗥𝗲𝗷𝗲𝗰𝘁𝗶𝗼𝗻

// The interviewer was specifically testing async programming and focused on:

// - Promise chaining
// - Error handling
// - Closures
// - Recursive async logic

// 𝗘𝘅𝗮𝗰𝘁 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻: https://lnkd.in/dP5ubcRY

// 𝟯. 𝗜𝗻𝗳𝗶𝗻𝗶𝘁𝗲 𝗦𝗰𝗿𝗼𝗹𝗹 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁

// Build a product listing that automatically loads more data while scrolling. The discussion covered:

// - Pagination
// - Intersection Observer
// - Preventing duplicate requests
// - API cancellation
// - Loading states
// - Skeleton screens

// 𝗦𝗶𝗺𝗶𝗹𝗮𝗿 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻: https://lnkd.in/du7zDDN5

// Overall, this round assessed whether you could build production-ready React applications instead of just answering theoretical questions.

// 𝗥𝗼𝘂𝗻𝗱 𝟮: 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗖𝗼𝗱𝗶𝗻𝗴

// 𝟭. 𝗠𝘂𝗹𝘁𝗶-𝗦𝘁𝗲𝗽 𝗣𝗿𝗼𝗴𝗿𝗲𝘀𝘀 𝗧𝗿𝗮𝗰𝗸𝗲𝗿

// The interviewer evaluated:

// - Component composition
// - State management
// - Reusability
// - UI architecture

// 𝗦𝗶𝗺𝗶𝗹𝗮𝗿 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻: https://lnkd.in/dFBusqXC

// 𝟮. 𝗡𝗲𝘀𝘁𝗲𝗱 𝗖𝗼𝗺𝗺𝗲𝗻𝘁 𝗦𝘆𝘀𝘁𝗲𝗺

// This tested:

// - Recursive rendering
// - Tree data structures
// - Immutable state updates
// - Component design
// - Performance considerations

// 𝗥𝗼𝘂𝗻𝗱 𝟯: 𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁

// Problem was implementing a chainable calculator, and evaluation focused on:

// - Closures
// - Method chaining
// - this
// - Prototype methods

// 𝗦𝗶𝗺𝗶𝗹𝗮𝗿 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻: https://lnkd.in/d-42caFV

// 𝗥𝗼𝘂𝗻𝗱 𝟰: 𝗛𝗶𝗿𝗶𝗻𝗴 𝗠𝗮𝗻𝗮𝗴𝗲𝗿

// Debugging + discussion around an existing React application with several intentional issues:

// - Excessive re-renders
// - Incorrect dependency arrays
// - Expensive computations inside render
// - Improper list keys
// - Memory leaks caused by uncleared timers

// The goal wasn't just to fix the issues but also to explain why they occurred and how they affected performance.


// JioHotstar 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗜𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 | 𝗦𝗗𝗘-𝟮
// I recently interviewed for the SDE-2 Frontend role at JioHotstar. While the technical interviews went well, the overall process lasted more than two months and ultimately ended in a rejection. I'm sharing my experience to help others understand the interview process and set realistic expectations.

// 𝗥𝗼𝘂𝗻𝗱 𝟭: 𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗮𝗹 𝗜𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 (𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱)
// Interviewer: Senior Software Engineer

// The interview began with a detailed discussion of the projects listed on my resume. The interviewer asked several follow-up questions to understand my technical contributions, architectural decisions, and challenges I had solved.

// Topics Covered:
//  • Project deep dive
//  • JavaScript fundamentals
//  • Event Loop
//  • Asynchronous JavaScript
//  • Execution order
//  • Closures and scope
//  • Browser internals

// 𝗖𝗼𝗱𝗶𝗻𝗴 𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀
// I was asked two JavaScript coding questions that tested problem-solving skills along with a solid understanding of core JavaScript concepts.

// The discussion was interactive, and the interviewer appreciated my understanding of JavaScript fundamentals.

// 𝗥𝗼𝘂𝗻𝗱 𝟮: 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗖𝗼𝗱𝗶𝗻𝗴
// Interviewer: Engineering Lead

// This round also began with a discussion about my previous projects before moving on to the coding exercise.

// Machine Coding Task
// Build a reusable Dropdown Component.
// .
// .
// .
// Continue reading it here: https://lnkd.in/eg7NV_e6

// Build a task scheduler with concurrency limits.
// Implement an LRU cache.
// Implement your own Promise.
// Implement EventEmitter.
// Implement Observable.




// ⚛️ React

// 1. useMemo vs useCallback vs useRef
// What problem does each solve, and when can using them actually hurt performance?

// 2. Prop Drilling at Scale
// Imagine a component tree where data is passed through 15–20 layers.

// How would you redesign it?

// Think about: → Context
// → State management
// → Component boundaries
// → Custom Hooks

// 🏗️ System Design

// 3. Design a Chat Application for 100K Concurrent Users

// How would you handle:

// → WebSocket connections
// → Message delivery
// → Presence
// → Message persistence
// → Horizontal scaling
// → Connection management

// 4. Reconnection After Network Failure

// A user loses connectivity for 5 minutes and reconnects.

// How does the application determine which messages or events were missed?

// Consider:

// Sequence IDs → Last-known offset → Sync API → Idempotency → Conflict handling

// 🔐 API & Security

// 5. How Would You Protect APIs From Abuse?

// Don't stop at authentication.

// Discuss:

// → Rate limiting
// → Authentication & authorization
// → Input validation
// → Bot detection
// → Request quotas
// → API gateway controls
// → Logging & monitoring

// 🗄️ Database Reliability

// 6. Your Primary Database Suddenly Goes Down. What Next?

// Explain your recovery strategy:

// → Replication
// → Failover
// → Backups
// → Recovery Point Objective (RPO)
// → Recovery Time Objective (RTO)
// → Data consistency
// → Disaster recovery

// 💡 What These Questions Really Test

// Notice the pattern?

// The interviewer isn't only asking:

// “Do you know React?”

// They're trying to understand whether you can:

// ✅ Design scalable systems
// ✅ Identify bottlenecks
// ✅ Handle failures
// ✅ Make architecture trade-offs
// ✅ Secure production applications
// ✅ Explain why you chose a particular approach

// For experienced developers, knowing the API is only the starting point.

// The real preparation is learning to reason through unfamiliar engineering problems.

// 👇 What is the toughest React, Node.js, System Design, or Full Stack interview question you've faced recently?


// Monolithic repo
// Microfrontend
// Monorepo