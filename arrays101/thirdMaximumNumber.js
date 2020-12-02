var thirdMax = function(nums) {
    nums.sort((a,b)=>{return b-a})
    var nums =  [...new Set(nums)]
    if(nums.length>2){
    return nums[2]
    }
    return nums[0]
};
