/*This script file shows how to solve the factorial of a number*/

'use strict' ; // confines javscript to a strict version

const factorial = (number) =>{
	let result = 1 ;
	for (let i = number; i<=1; i--){
		result = result*i ;
	} // end of for loop
	return result ;
} // end of fucntion factorial