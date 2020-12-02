/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for(i of arr){
        index = arr.indexOf(i)
        arr[index] = Math.max(...arr.slice(index,arr.length))
    }
    arr[arr.length] = -1
    arr.shift()
    return arr
};