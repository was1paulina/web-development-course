//reverse the string
function reverseStr(myString) {
	 var strArray = myString.split("");
	 strArray.reverse();
	 var reversedString = strArray.join("");
	 return reversedString;
}

//return factorial of the provided integer
// 3! = 1*2*3= 6
function factorialize(num) {
	factor = 1;
	if (num === 0 || num === 1) {
		factor = 1;
	}
	else if (num > 1) {
		i = 1;
		while (i <= num) {
			factor *= i;
			i++;
		}		
	} else {
		console.log("Invalid input. Try another number.");
	}
	return factor; 
}

//return true if the string is a palindrome
//result.replace(/[\W_,\,]/g,""):
	// \W -> any non alphabetic character
	// \W_ -> any non alphabetic + special character
	// /g -> find globally
	// "" - replace with an empty string, ie remove it 
function palindrome(str) {
	str = str.toLowerCase();
	str = str.replace(/[\W_]/g, "");
	for (var i = 0; i < (str.length-1)/2; i++) {
		if (str[i] !== str[(str.length-1)-i]) {
			return false;
		}
	}
  	return true;
}


//find the longest word in the string
function findLongestWord(str) {
	//split the string
	arr = str.split(" ");
	//compare words
	var longest = "";
	for (i = 0; i < arr.length; i++) {
		if (arr[i].length > longest.length) {
			longest = arr[i];
		}
	}
  return longest;
}

//return the string with the first letter of each word capitalized
function titleCase(str) {
	//split the string to words
	arr = str.split(" ");

	//uppercase the first letter while lowercasing all the other letters
	for (var i = 0; i < arr.length; i ++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();		
	}
	//join everything together back to the string
  return uppercaseStr = arr.join(" ");
}

//return an array of largest numbers of each of 4 sub arrays
function largestOfFour(arr) {
	var largestNumArr = [];
	var largestNum = 0;
  //loop throught the parent array and subarrays
  for (var i = 0; i < arr.length; i ++) {
  	largestNum = 0;
  	for (var j = 0; j < arr[i].length; j ++) {
  		 // compare the numbers to find the largest
  		if (arr[i][j] > largestNum) {
  			largestNum = arr[i][j];
  		}
  	} 
  	 //store the number in new array
  	largestNumArr.push(largestNum);
  }
  return largestNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//check if the string (first argument) ends with the given target string (second argument)
function confirmEnding(str, target) {
	if (str.substring(str.length - target.length) === target) {
		  return true;
	}	else {
		return false;
	}
}

confirmEnding("Bastian", "n");

//repeat a string (first argument) n amount of times (second argument)
//return an ampty string if n is negative number

function repeatStringNumTimes(str, num) {
  var newStr = "";
  if (num > 0) {
  	var i = 0;
  	while (i < num) {
  		newStr += str;
  		i ++;
  		}
  } else {
  	newStr = "";
  }
  return newStr;
}


//truncate a string (first argument) if it is longer 
//than the given max string length (second argument).
//return the truncated string with a ... ending 
//NOTE: ... adds 3 char to the string length
//if the max length is <= 3 then ... doesn't add to the string length
function truncateString(str, num) {
  var trunc = "";
  if (str.length > num && num > 3) {
  	trunc = str.slice(0, num - 3) + "...";
  } else if (str.length > num && num <= 3) {
  	trunc = str.slice(0, num) + "...";
  } else if (str.length <= num) {
  	trunc = str;
  } else {
  	trunc = "...";
  }
  return trunc;
}

//split an array (first argument) into groups the length of size (second argument)
//return as a two-dimensional array
function chunkArrayInGroups(arr, size) {
	var chunkedArr = [];
	for (var i = 0; i < arr.length; i += size) {
		var chunk = arr.slice(i, size + i);
		chunkedArr.push(chunk);
	}
  return chunkedArr;
}

var arr = [[2,4,76,1], [0, -2, -8, -1], [98, 32, 99, 1], [3, 2, 1, 2], [5, 5, 5, 5, 1], [0, 1, 0, 1, 0, 1], [99, 99, 98, 98, 97, 97], [1000, 1001, 1002, 1003], [4, 2, 5, 3, 1, 8], [-2, -7, -9, -1, -7], [0, 0, 0, 0]];

//return the remaining elements of an array 
//after choppung off n elements from the head
function slasher(arr, howMany) {
  var tempArr = arr.splice(0, howMany);
  return arr;
}

//return true if the string in the first element of the array
//contains all of the letters of the string
//in the second element of the array
function mutation(arr) {
	var str1 = arr[0].toLowerCase();
	var str2= arr[1].toLowerCase();
	for (var i = 0; i < str2.length; i++) {
		if (str1.indexOf(str2[i]) === -1) {
			return false;
		} 
    }
    return true;
}

//remove all falsy values from an array
// false, null, 0, "", undefined, NaN
function bouncer(arr) {
  return arr.filter(Boolean);
  //The value passed as the first parameter 
  //is converted to a boolean value, if necessary. 
  //If the value is omitted or is 
  //0, -0, null, false, NaN, undefined, or the empty string (""), 
  //the object has an initial value of false. 
  //If the DOM object document.all is passed as a parameter, 
  //the new boolean object also has an initial value of false. 
  //All other values, including any object or the string "false", 
  //create an object with an initial value of true.
}

//Remove all elements from the initial array that are of the same value as these arguments
//destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
function destroyer(arr) {
	/* the problem here is that arr returns only the array
	and not the other arguments since they don't have a parameter name 
	coz it was never set.
	To access them we have to call them by arguments[1] and arguments[2].
	arr can also be called arguments[0]
	*/
	var newArr = arguments[0];
	//converting arguments to a real array
	//since the argument[0] is an array, we need to slice from 1
	var params = Array.from(arguments).slice(1);
	//now we can compare elements of both arrays
	var result = newArr.filter(function(value) {
		return params.indexOf(value) === -1;
		});
	return result;
}

//return the lowest index at which a value 
//should be inserted into an array
//once it has been sorted
function getIndexToIns(arr, num) {
  //sort the array
  //compare num to array elements
  //if (num > i-1) && (num < i) => num should get i index assigned to it
  var newArr = arr.sort(function(a, b) {
  	return a - b;
  });
  for (var i = 0; i < newArr.length; i++) {
  	if (num === newArr[i]) {
  		return i;
  		}
  	else if (num >= newArr[i] && num <= newArr[i+1]) {
  		return i + 1;
  		}
  	else if (num > newArr[newArr.length-1]) {
  		return i + 3;
  		}
  	} 
}

//function that takes ROT13 encoded string and returns a decoded string
//non-alphabetical characters should be passed as they are
function rot13(str) { // LBH QVQ VG!
	var newStr = str.split("");
	var letters = [];
	for (var i = 0; i < newStr.length; i++) {
		var char = newStr[i].charCodeAt(newStr[i]);
		if ( char >= 65 && char < 78) {
			newStr[i] = char + 13;
		} else if (char >= 78 && char <= 90) {
			newStr[i] = char - 13;
		} else {
			newStr[i] = char;
		}
		letters.push(String.fromCharCode(newStr[i]));
	}
  return letters.join("");
}