
var findDisappearedNumbers = function(nums) {
    result = Array()
    for(i=1;i<nums.length+1;i++){
        if(nums.includes(i)){
            continue
        }
        result.push(i)
    }
    return result
};