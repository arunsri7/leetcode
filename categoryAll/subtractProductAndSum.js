var subtractProductAndSum = function (n) {
    n = n.toString().split('')
    return n.reduce(product) - n.reduce(sum)
};

let sum = (a, b) => Number(a) + Number(b)
let product = (a, b) => Number(a) * Number(b)