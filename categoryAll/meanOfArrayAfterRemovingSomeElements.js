var trimMean = function (arr) {
    let fivePercent = 0.05 * arr.length
    arr.sort(function (a, b) { return a - b })
    let returnArr = arr.slice(fivePercent, arr.length - fivePercent)
    return mean(returnArr)
};

const mean = arr => arr.reduce((p, c) => p + c, 0) / arr.length;