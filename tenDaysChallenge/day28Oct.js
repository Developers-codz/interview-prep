// // Find the second largest number


// function findSecondLargestNumber(arr) {
//     let first = -Infinity, second = -Infinity
//     for(let num of arr) {
//         if(num > first) {
//             second = first; // -infinity // 3 //
//             first = num // 3 // 5 //
//         } else if (num > second && num !== first) {
//       second = num;
//     }
//     }
//     return second
// }

// const arr = [3,5,2,7,7,6]

// console.log("findSecondLargestNumber", findSecondLargestNumber(arr))

// console.log([...new Set(arr)])


// console.log(arr.filter((el, i) => arr.indexOf(el) === i))

const lights = ["red", "yellow", "green"]

const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const lightNode = document.querySelectorAll(".light")

let startIndex = 0;
let timerId;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        lightNode[startIndex].classList.remove("active")
        startIndex = (startIndex + 1) % lights?.length;
        lightNode[startIndex].classList.add("active")
    }, 1000)
})

stopBtn.addEventListener("click", () => {
    clearInterval(timerId)
})

const circularProgress = document.getElementById("circular-progress")

let progress = 0;
const interval = setInterval(() => {
    progress += 5;
    circularProgress.style.background = `conic-gradient(#4caf50 ${progress}%, #ddd ${progress}% 100%)`;
    if(progress >= 100) {
        clearInterval(interval)
    }
    circularProgress.innerHTML = `${progress}%`
},1000)

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("stopwatch-time");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((ms % 1000) / 10);

  return (
    // padStart will add leading zeros if the string is shorter than 2 characters
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + ":" +
    String(milliseconds).padStart(2, "0")
  );
}

function startTimer() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  display.textContent = "00:00:00";
}

document.getElementById("startTimerBtn").addEventListener("click", startTimer);
document.getElementById("stopTimeBtn").addEventListener("click", stopTimer);
document.getElementById("resetTimeBtn").addEventListener("click", resetTimer);

console.log("start");

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
      return count;
    },
  };
}

const counter = createCounter(); // { increment: [Function: increment] }

setTimeout(() => {
  counter.increment();
}, 0);

Promise.resolve().then(() => {
  counter.increment();
});

console.log("end");

// start
// end
// 1
// 2


// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// }).then(() => {
//   console.log("D");
// });

// queueMicrotask(() => {
//   console.log("E");
// });

// console.log("F");

// A
// F
// E
// C
// D
// B


// function checkIfPalindrome(str) {
//   const strWithoutSpace = str.split(' ').join('').toLowerCase();
//   console.log(strWithoutSpace)
//   let p1 = 0;
//   let p2 = strWithoutSpace.length - 1;
//   while(p1<p2) {
//     if(strWithoutSpace[p1] !== strWithoutSpace[p2]) {
//       return "not a palindrome";
//     }
//     p1++;
//     p2--;
//   }
//   return "yup palindrome";
// }

// console.log(checkIfPalindrome("A man a plan cc a canal Panama"))







