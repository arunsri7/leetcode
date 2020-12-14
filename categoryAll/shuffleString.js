var restoreString = function (s, indices) {
    s = s.split('')
    return syncSort(indices, s).join('')
};


let syncSort = (indices, string) => {
    var dict = [];
    for (var j = 0; j < indices.length; j++) {
        dict.push({ 'index': indices[j], 'string': string[j] });
    }
    console.log(dict)
    dict.sort(function (a, b) {
        if ((a.index < b.index)) {
            return -1
        }
        if (a.index == b.index) {
            return 0
        }
        return 1
    });
    console.log(dict)
    for (var k = 0; k < dict.length; k++) {
        indices[k] = dict[k].index;
        string[k] = dict[k].string;
    }
    return string
}