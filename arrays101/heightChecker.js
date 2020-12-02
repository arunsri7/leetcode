var heightChecker = function(heights) {
    let sorted = [...heights]
    sorted = sorted.sort((a,b)=>{return a-b})
    count = 0
    for (i=0;i<heights.length;i++){
        console.log(i,heights[i],sorted[i])
        if(sorted[i]!=heights[i]){
            count += 1
        }
    }
    return count
};