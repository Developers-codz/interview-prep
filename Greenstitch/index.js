// Given two strings s and t, return the number of distinct subsequences of s which equals t.

// Input: s = "rabbbit", t = "rabbit"
// s = "rbabbitt" , t = "rabbit"
// Output: 3

function removeExtra(alphabet, s) {
    return s
}



function findDistinctSubsequence(string1, string2) {
    count = 0;
    const s = string1?.split("");
    const t = string2?.split("");
    for(let i = 0; i < s.length; i++ ) {
      if(s[i] !== t[i]){
        removeExtra(s[i], s)
        s.splice(s[i], 1)
        console.log(s,  s.splice(s[i], 1))
      }
    }
    console.log(s?.join())
}

findDistinctSubsequence("rbabbitt", "rabbit")

// s = "rbabbitt" , t = "rabbit"

function matchAlphabets(a,b, p1, p2) {
    if(p2 < b?.length) {
        if(a[p1] === b[p2]) {
           return matchAlphabets(a, b, p1+1, p2+1)
        } else {
            return matchAlphabets(a, b, p1+1, p2)
        }
    } else {
        return 1
    }
}

function checkString(s, t) {
    let pointer1 = 0;
    let pointer2 = 0;
    matchAlphabets(s, t, pointer1, pointer2)
}





