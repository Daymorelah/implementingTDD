/*This file tests the factorial fucntion using mocha test framework and chai assertion library*/

//You can also do "var assert = require ('assert');//this uses nodes's implicit assert module. "
//const assert = require ('chai').assert; //we need the assert library from chai
//const myScript = require ('../src/factorial.js') ;
const assert = require('chai').assert
import factorial from '../src/factorial'

describe('Factorial Function', ()=>{
	
	describe('Invalid Input', ()=>{
		it('should return undefined for inputs less than zero', ()=>{
			assert.equal(factorial(-1),'undefined');
		}); //end of it block 
		it('should return 1 for inputs equal to one', ()=>{
			assert.equal(factorial(1),1);
		}); //end of it block 
		it('should return not an integer for inputs that are not integers', ()=>{
			assert.equal(factorial('well'),'You entered a string.');
		}); //end of it block 
	}); // end of inner test suite

	describe('Valid Input', ()=>{
		it('should return 120 for input of 5',()=>{
			assert.equal(factorial(5),120);
		}); //end of it block 
		}); //end of secind inner test suite
}); // end of outter test suite