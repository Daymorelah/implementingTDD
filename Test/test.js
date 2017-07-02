/*This file tests the factorial fucntion using mocha test framework and chai assertion library*/

var assert = require ('assert') ; //we need the assert library from chai
var myScript = require ('../src/factorial.js') ;

describe('Factorial Function', function(){
	describe('Invalid Input', function(){
		it('should return undefined for inputs less than zero', function(){
			assert.equal(myScript.anyVarName(-1),'undefined');
		}); //end of it block 
	}); // end of inner test suite
}); // end of outter test suite