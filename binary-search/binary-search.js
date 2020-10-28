'use strict';

// Complete this algo
const binarySearch = (array, target, pointer, start, end)  => {
	//check to make sure there is a target/array
	//if there's not a target --> false//throw error
	if (!target){
		throw new Error('No target!')
	} 

	if (!array || !Array.isArray(array)){
		throw new Error('No array!')
	}

	//check if array is ordered//sort the array
	// array.sort((a, b) => {return b - a})
	//mid-point when even and odd
	let middleIdx = Math.floor(array.length / 2)

	let root;
	//if pointer is undefined, middle or else its array[pointer]
	if (pointer === undefined){
		root = array[middleIdx]
		start = array[0]
		end = array[array.length - 1]
	} else {
		root = array[pointer]
	}

	if (root === target || end === target || start === target){
		return true
	} else if (root > target){
		return binarySearch(array, target, Math.floor(middleIdx / 2), 0, middleIdx - 1)
	} else if (root < target){
		return binarySearch(array, target, Math.floor(middleIdx + middleIdx / 2), middleIdx + 1, array.length)
	} else {
		return false;
	}
	//true or false if the target is inside the array
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch