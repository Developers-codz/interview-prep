// kuntal.banerjee@scalekit.com


// sum()
// const sum = function(a,b) {
//     return a+b
// }




// function flatArray(arr, depth = 1) {

//    const result =   arr.reduce((curr, acc) => {
//         Array.isArray(curr) ? [...acc, flatArray[curr] ]: acc.push(curr)
//     }, [])

//     console.log("result", result)
// }

// flatArray([1,[2,[3]]])



const btn = document.querySelector(".btn");
const tool = document.querySelector(".tool");

btn.addEventListener(onclick, () => {
    tool.style.display = "block"
})

