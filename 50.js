/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = (x, n) => {
    if (n === 0) return 1;

    if (Boolean(n > (Math.pow(2, 31) - 1) || n < Math.pow(-2, 31))) {
        return 1;
    }
    return Math.pow(x, n)
};

console.log((myPow(-99, Math.pow(2, 32)))); // 1