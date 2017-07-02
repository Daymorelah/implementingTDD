/*This file tests the factorial fucntion using mocha test framework and chai assertion library*/

//You can also do "var assert = require ('assert') "
var assert = require ('chai').assert; //we need the assert library from chai
var myScript = require ('../src/factorial.js') ;

describe('Factorial Function', function(){
	
	describe('Invalid Input', function(){
		it('should return undefined for inputs less than zero', function(){
			assert.equal(myScript(-1),'undefined');
		}); //end of it block 
		it('should return 1 for inputs equal to one', function(){
			assert.equal(myScript(1),1);
		}); //end of it block 
		it('should return not an integer for inputs that are not integers', function(){
			assert.equal(myScript('well'),'You entered a string.');
		}); //end of it block 
	}); // end of inner test suite

	describe('Valid Input', function(){
		it('should return 120 for input of 5', function(){
			assert.equal(myScript(5),120);
		}); //end of it block 
		}); //end of secind inner test suite
}); // end of outter test suite