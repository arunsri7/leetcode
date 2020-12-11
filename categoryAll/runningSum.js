var runningSum = function (nums) {
    arr = Array()
    for (i = 1; i < nums.length + 1; i++) {
        a = nums.slice(0, i)
        a = a.reduce(sum)
        arr.push(a)
    }
    return arr
};

let sum = (a, b) => a + ba