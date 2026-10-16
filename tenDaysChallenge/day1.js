// Promises Questions

// easy
// Write a function delay(ms) that returns a Promise which resolves after ms milliseconds.
// How would you use delay(2000) to print "Hello after 2s"?

function delay(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => res("Hello"), ms)
    }) 
}

delay(2000).then(res => console.log(res))

// Medium 

// You have 3 functions that each return a promise:
// The task:
// Get the user
// Get their posts
// Get comments for the first post
// Log the comments


function getUser() {
  return Promise.resolve({ id: 1, name: "Kajal" });
}

function getPosts(userId) {
  return Promise.resolve(["post1", "post2"]);
}

function getComments(post) {
  return Promise.resolve(["comment1", "comment2"]);
}

// my solution wrong one 
// getUser().then(res => console.log(res.name))
// getPosts().then(res => res).
// getComments(getPosts().then(res => res[0])).then(res => res)
// getComments().then(res => res)


// correct solution
getUser()
.then(user => {
    return getPosts(user.id)
})
.then(post => {
    return getComments(post[0])
})
.then(comments => console.log(comments))
.catch(err => console.log(err))

async function showFirstComment() {
    try{
        const user = await getUser();
        const posts = await getPosts(user.id)
        const comments = await getComments(posts[0])
        console.log(comments)
    } catch(err){
        console.log(err)
    }
}

showFirstComment()


// pollyfills for Map

// debounce

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeOut(() => {
            fn.apply(this,args)
        }, delay)
    }
}

// throtle

function throtle(fn, delay) {
    let lastCall = 0
    return function(...args) {
        let now = Date.now();
        if(now - lastCall >= delay) {
            lastCall = now
            fn.apply(this, args)
        }
    }
}

// Topics
// Explain Execution Context in JavaScript.
// What is Hoisting? And how is var different from let and const in hoisting?
// What is the difference between: == and ===
// What is a Closure in JavaScript?




