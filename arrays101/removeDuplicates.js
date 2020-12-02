/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    len = nums.length-1
    for(i=len;i>0;i--){
        console.log("nums",nums[i])
        if(nums[i] == nums[i-1]){
            nums.splice(i,1)
        }
    }a
};
