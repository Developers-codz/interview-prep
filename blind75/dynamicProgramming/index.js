```
Basics: 
Try to analyze the problem in term of index
Do all possible stuffs on that index and in according to the problem statements
Sum of all stuffs -> Count all ways
min (of all stuffs) -> find min
```


// Climbing Stairs Problem

function climbingStairs(n) {
    if(n <= 2) return n;
    const dp = new Array(n+1);

    dp[1] = 1;
    dp[2] = 2

    for(let i = 3; i< n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}

// Coin change ||

function coinChange(amount, coins){
    const dp = new Array(amount+1).fill(0);

    dp[0] =1;
    for(let coin of coins) {
        for(let i = coin; i <= amount; i++) {
            dp[i] += dp[i-coin]
        }
    }

    return dp[amount]
}