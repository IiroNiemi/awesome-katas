let array_of_ints = [11, 22, 33, 44, 55, 66, 77, 88, 99]

console.log(chop(array_of_ints));

function chop(arrayOfInts){
	var cutPoint = Math.round(arrayOfInts.length / 2);
	var firstSlice = arrayOfInts.slice(0, Math.round(arrayOfInts.length / 2));
	var secondSlice = arrayOfInts.slice(cutPoint, arrayOfInts.length);

	console.log(firstSlice);
	console.log(secondSlice);

	var retval = arrayOfInts.map(Math.sqrt);

	return retval;
}

