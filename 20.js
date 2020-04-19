/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = (s) => {
    if (!s) return true;

    let repo = [];

    let first = ['(', '[', '{'];
    let last = [')', ']', '}'];
    let match = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let i in s) {

        if (first.indexOf(s[i]) > -1) {
            repo.push(s[i]);
        }


        if (last.indexOf(s[i]) > -1) {

            let repoStr = repo.pop();

            if (match[s[i]] != repoStr) {
                return false;
            }
        }
    }


    return repo.length == 0;
};

console.log(isValid('( { { } [ ] [ [ [ ] ] ] } )'));
