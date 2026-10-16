// pollyfill for map

Array.prototype.myMap = function(cb){
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
    }
    return result;
}

console.log([1,2,3,4].myMap(el => el+1))


// pollyfill for Filter

Array.prototype.myFilter = function(cb) {
    const result = [];
    for(let i = 0; i < this.length; i++ ) {
        if(cb(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result;
}

console.log([1,2,3,4].myFilter(el => el >3))


Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue;
    let startIndex = 0;
    if(!initialValue) {
        acc = this[0]
        startIndex = 1
    }
    for(let i = startIndex; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }
    return acc
}
console.log([1,2,3,4].myReduce((acc, curr) => acc + curr))




