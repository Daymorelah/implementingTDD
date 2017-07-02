/*This script file shows how to solve the factorial of a number*/

//'use strict' ; // confines javscript to a strict version

var factorial = function (number) { //function statement

	if(typeof(number) == 'string'){
		return 'You entered a string.' ;
	}; //end of if statement
	if(number === 1){
		return 1 ;
	}; //end of if statement
	if (number<0) {
		return 'undefined'
	};//end of else if statement
	let result = 1 ;
	for (let i = number; i>=1; i--){
		result = result*i ;
	} // end of for loop
	return result ;
} // end of fucntion factorial

module.exports = factorial
//Note: you can also do: exports.anyVarName = factorial; but in test.js u call it as 'myScritp.anyVarName()'.

/*You can also export objects via d obect method as show below
var factorial ={}; //declare an empty object
factorial.factorial =  function (number) { 	//using function statement
	if (number<0) {
		return 'undefined'
	};//end of if statement
	let result = 1 ;
	for (let i = number; i<=1; i--){
		result = result*i ;
	} // end of for loop
	return result ;
} // end of fucntion factorial

module.exports = factorial;
then in the test.js u call d function as 'myScript.factorial()'

You can also do thus: 
var factorial = {
	factorial : function(number){
	....Code goes here!
	}
}; // end of factorial object
module.exports = factorial;
u call the function in test.js as 'myScript.factorial()'

*/