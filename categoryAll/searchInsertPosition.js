var searchInsert = function(nums, target) {
    index = nums.indexOf(target)
    if(index!= -1){
        return index
    }
    nums.push(target)
    nums.sort((a,b)=>{return a-b})
    return nums.indexOf(target)
};