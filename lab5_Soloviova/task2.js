var array1 = 
[
	["A", "B"],
	["A", "B"],
	["A", "B"]
];

var array2 = 
[
	["A","B","C"],
	["B","C","A"],
	["C","A","B"],
	["C","B","C"]
];

function isWristBand(arr)
{
	// row
	var val1 = true, val2 = true, val3 = true, val4 = true;

	for(i = 0; i < arr.length; ++i)
	{
		verification = true;
		for(j = 1; j < arr[i].length; ++j)
		{
			if(arr[i][j]!==arr[i][j-1])
			{ 
				verification = false;
			}
		}
		if(verification === false)
		{
			val1 = false;
		}
	}
	// column
	for(j = 0; j < arr[0].length; ++j)
	{
		verification = true;
		for(i = 1; i < arr.length; ++i)
		{
			if(arr[i][j] !== arr[i-1][j]) 
			{
				verification = false;
			}
		}
		if(verification === false)
		{
			val2 = false;
		}
	}
	// diagonal left
	for(i = 0; i < arr.length; ++i)
	{
		for(j = 0; j < arr[0].length; ++j)
		{
			temp = "";
			for(z = 0; z < arr[0].length-j && z < arr.length-i; ++z)
			{
				temp+= arr[i+z][j+z];
			}
			if((temp.split(temp[0]).length - 1)!== temp.length)
			{
				val3=false;
			}
		}	
	}
	// diagonal right
	for(i = 0; i < arr.length; ++i)
	{
		for(j = arr[0].length-1; j >= 0 ; --j)
		{
			temp = "";
			for(z = 0; z < arr.length-i && j-z>=0; ++z)
			{
				temp+= arr[i+z][j-z];
			}
			if((temp.split(temp[0]).length - 1)!== temp.length)
			{
				val4=false;
			}
		}
	}
	return val1||val2||val3||val4;
}

console.log("Task 2");
console.log(array1[0][0] + " " + array1[0][1]);
console.log(array1[1][0] + " " + array1[1][1]);
console.log(array1[2][0] + " " + array1[2][1]);
console.log("Result:" + isWristBand(array1));

console.log(array2[0][0] + " " + array2[0][1] + " " + array2[0][2]);
console.log(array2[1][0] + " " + array2[1][1] + " " + array2[1][2]);
console.log(array2[2][0] + " " + array2[2][1] + " " + array2[2][2]);
console.log(array2[3][0] + " " + array2[3][1] + " " + array2[3][2]);
console.log("Result:" + isWristBand(array2));