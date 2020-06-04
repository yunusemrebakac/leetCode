let canBeEqual = function (target, arr) {
	let sorted1 = target.sort((a, b) => a - b);

	let sorted2 = arr.sort((a, b) => a - b);

	return sorted1.every((ele, i) => sorted1[i] === sorted2[i]);
};

console.log(canBeEqual([2, 1, 3, 4, 7], [1, 2, 3, 4, 7]));
console.log(canBeEqual([2, 1, 3, 4, 7], [1, 2, 3, 4]));
