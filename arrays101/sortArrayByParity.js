/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let even = A.filter(number => number % 2 === 0)
    let odd = A.filter(number => number % 2 != 0)
    return [...even, ...odd]
  };