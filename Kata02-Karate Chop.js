let arrayOfInts = [11, 22, 33, 44, 55, 66, 77, 88]





var BinarySearch = function(find, arrayOfInts, left, right) {
	if(right >= 1){
		

		//How this should be rounded properly?
		let mid = Math.round(left + (right - left) / 2);


		if(arrayOfInts[mid] == find){
			return mid;
		}
		
		console.log(mid);
		console.log(arrayOfInts[mid])

		if(arrayOfInts[mid] > find){
			return BinarySearch(find, arrayOfInts, left, mid - 1)
		}
		
		return BinarySearch(find, arrayOfInts, mid + 1, right)

	}

	return -1;

}

let index = BinarySearch(11, arrayOfInts, 0 , arrayOfInts.length - 1)	

console.log("Result: " + index);
