// 1s approach
    var fib = function(N) {
    if (N < 2) {
        return N;
    }
    	return fib(N - 1) + fib(N - 2);
	}
    fib(4) // 36.63% faster

// 2nd appraoch
const memo = [0, 1];
var fib = function(N) {
    if (memo[N] !== undefined) {
        return memo[N];
    }
    const result = fib(N - 1) + fib(N - 2);
    memo[N] = result;
    return result
};
fib(4) // 94.25% faster

// 3rd approach
var fib = function(N) {
    if (N < 2) {
        return N;
    }
    let a = 1;
    let b = 1;
    for (let i = 3; i <= N; ++i) {
        a = a + b;
        b = a - b;
    }
    return a;
};
fib(4) // 100% faster