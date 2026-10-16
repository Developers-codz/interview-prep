// debounce

function debounce(cb, delay) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

const debouncedFn = debounce(console.log, 1000);

debouncedFn("Hello");

// throttle

function throttle(cb, delay) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        if(now - lastTime >= delay) {
            cb(...args);
        }
    }
}

const throttledFn = throttle(console.log, 1000);

throttledFn("Hello");


// currying

function curry(fn) {
    return function(...args) {
        if(args.length >= fn.length) {
            return fn(...args);
        }
    }
}

const curriedFn = curry(console.log);

curriedFn("Hello");

