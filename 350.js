/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = (nums1, nums2) => {
	const seen = {};
	for (n of nums1) seen[n] ? seen[n]++ : (seen[n] = 1);
	console.log(seen);

	return nums2.filter((e) => (seen[e] ? seen[e]-- : false));
};

console.log(intersect([0, 1, 6, 6, 6], [1, 0, 2, 6]));
