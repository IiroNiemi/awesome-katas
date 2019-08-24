let array_of_ints = [11, 22, 33, 44, 55, 66, 77, 88, 99]

//console.log(chop(array_of_ints));

chop(0, array_of_ints);


function chop(find, arrayOfInts){

	
	while(arrayOfInts.length > 2){
		var containingSlice = ReturnContainingHalf(find, arrayOfInts)	
		console.log(containingSlice);
	}
	

	//return retval;
}

var ReturnContainingHalf = function(find, arrayOfInts){
	if(arrayOfInts.includes(find)){
		return arrayOfInts;
	} else {
		let cutPoint = Math.round(arrayOfInts.length / 2);
		let firstSlice = arrayOfInts.slice(0, Math.round(arrayOfInts.length / 2));
		let secondSlice = arrayOfInts.slice(cutPoint, arrayOfInts.length);
	
		return firstSlice.includes(find) ? ReturnContainingHalf(find, firstSlice) : 
																			ReturnContainingHalf(find, secondSlice); 
	}
	
}

