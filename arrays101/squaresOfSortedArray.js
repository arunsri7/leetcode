/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(x=>{return x*x}).sort((a,b)=>{return a-b})
};