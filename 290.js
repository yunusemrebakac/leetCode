/**
 * @param {string} pattern
 * @param {string} string
 * @return {boolean}
 */
let wordPattern = (pattern, string) => {

    pattern = pattern.trim();
    string = string.trim();

    let ptr = pattern.split(''),
        strCollection = string.split(' '),
        ptrMatch = {},
        i = 0;

    if (ptr.length !== strCollection.length || pattern.length === 0 || strCollection.length === 0) return false;


    for (i; i < strCollection.length; i++) {
        if (ptrMatch[pattern.charAt(i)] === undefined) {
            if (!ptrMatch.getKeyByValue(strCollection[i])) {
                ptrMatch[pattern.charAt(i)] = strCollection[i]
            } else {
                return false
            }
        } else if (ptrMatch[pattern.charAt(i)] !== strCollection[i]) {
            return false
        }
    }

    return true
};


Object.prototype.getKeyByValue = function (value) {
    for (let prop in this) {
        if (this.hasOwnProperty(prop)) {
            if (this[prop] === value)
                return true;
        }
    }
    return false;
}


console.log(wordPattern('abbaba', 'leet project project leet project leet'));
console.log(wordPattern('abba', 'cat dog dog cat'));
console.log(wordPattern('abbz', 'cat dog dog cat'));
console.log(wordPattern('abba', 'cat dog dog bird'));