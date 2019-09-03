let arrayOfInts = [11, 22, 33, 44, 55, 66, 77, 88]


var BinarySearch = function(find, arrayOfInts, left, right) {
	
	if (left > right) return -1;
		
		let mid = Math.floor((right + left) / 2);

		if(arrayOfInts[mid] === find){
			return mid;
		}

		if(arrayOfInts[mid] > find){
			return BinarySearch(find, arrayOfInts, left, mid - 1)
		}
		
		return BinarySearch(find, arrayOfInts, mid + 1, right)	

}

let index = BinarySearch(88, arrayOfInts, 0 , arrayOfInts.length - 1)	

console.log("Result: " + index);
