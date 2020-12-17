var fib = function (num) {
    if (num == 0) {
        return 0
    }
    const arr = [1, 1];
    for (let i = 2; i < num; i++) {
        const a = arr[i - 1];
        const b = arr[i - 2];
        arr.push(a + b);
    };
    return arr[num - 1];
};
