var reverseWords = function (s) {
    let res = ''
    let word = ''
    for (let i of s) {
        if (i == ' ') {
            res += word + i
            word = ''
            continue
        }
        word = i + word
    }
    return res + word;
};
