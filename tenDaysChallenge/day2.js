// Polyfill for call

const obj = {
    fname: "kajal"
}

function printAge(age, random) {
    console.log(`${this.fname} is ${age} year old and ${random}% beautiful`)
}

Function.prototype.myCall = function(context, ...args) {
    if(typeof this !== "function") {
        throw new Error("not callable")
    }
    // if context is undefined then global context or global object
    context = context ?? globalThis


    // creates a unique so that no clash if any existing key is present can be used here obj.fn = this; 
    const fnSymbol = Symbol();
    context[fnSymbol] = this;

    const result = context[fnSymbol](...args)
    delete context[fnSymbol]
    return result
}

// printAge.myCall(obj, 24)


// pollyfill for apply

Function.prototype.myApply = function(context, argsArray) {
    if(typeof this !== "function") {
        throw new Error("Function not callable")
    }

    context = context ?? globalThis;

    const functTemp = Symbol()
    context[functTemp] = this;


    let result;
    if(argsArray == null) {
        result = context[functTemp]()
    } else {
        if(!Array.isArray(argsArray) && !(argsArray instanceof Object)) {
            throw new TypeError("Create List From ArrayLike called on non-object")
        }
        result = context[functTemp](...argsArray)
    }

    delete context[functTemp]
    return result
 }

 printAge.myApply(obj, [24,100])

 // pollyfill for bind

 Function.prototype.myBind = function(context, ...boundArgs) {
    if(typeof this !== "function") {
        throw new Error('not callable')
    }

    const fn = this;

    function boundFunction(...args) {
        const isNew = this instanceof boundFunction;
        return fn.apply(isNew ? this: context, [...boundArgs, ...args])
    }

    boundFunction.prototype = Object.create(fn.prototype);
    return boundFunction
 }

 printAge.myBind(obj, 24)()
