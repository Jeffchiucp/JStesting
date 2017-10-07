//Contains test for utils.js
const chai = require('chai');
const util = require('./util');
const expect = chai.expect;



it('should calculate-area', ()=> {
	//run test
	const result = util.area(10,20)
	expect(result).to.equal(10 * 20)
	// if (result !== 10 * 20) {
	// 	throw new Error("Expected 200 but got " + result)		
	// }
	// throw new Error("Could not calculate area")
});

it('should calculate perimeter', () => {
	//run perimeter test
	const result = util.perimeter(5,2)
	//result.should.equal(5*2 + 2*2);
	if (result !== 5*2 + 2*2) {
		throw new Error("Expected 14" + result)
	}
});


