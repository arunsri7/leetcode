var canBeEqual = function (target, arr) {
    target = target.sort()
    arr = arr.sort()
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != target[i]) {
            return false
        }
    }
    if (target.length === arr.length) {
        return true
    }
    return false
};