var lodash = require('../node_modules/lodash/dist/lodash.js');
var chai = require('chai')
var assert = chai.assert;

describe('Calculator', function(){
	describe('#multiply', function(){
		it('Should return the multiple of 2 numbers.', function(){
			var Calculator = require('../dist/calculator.min.js');
			var calc = new Calculator();
			assert.equal(2*2, calc.multiply(2, 2));
			assert.equal(-1*2, calc.multiply(-1, 2));
			assert.equal(1*2, calc.multiply(0, 2));
		});
		it('Should throw an error when a non-number is supplied.', function(){
			var Calculator = require('../dist/calculator.min.js');
			var calc = new Calculator();
			assert.throw(function () { calc.multiply('hi', 2) });
			assert.throw(function () { calc.multiply(1, 'clarice') });
			assert.throw(function () { calc.multiply(1, {}) });
			assert.throw(function () { calc.multiply({}, {}) });
			assert.throw(function () { calc.multiply(1, []) });
		})
	})
})