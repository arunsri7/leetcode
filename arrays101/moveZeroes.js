/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(i of nums){
        console.log(nums[i],nums)
        if(i==0){
            nums.push(i)
            nums.splice(nums.indexOf(i),1)
        }
    }
};