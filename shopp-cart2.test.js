// Tests for shopping-cart.js
const chai = require('chai')
const expect = chai.expect
const should = chai.should()
const cart = require('./shopping-cart')

it('Should create a new item with name and price', () => {
    const results = cart.newItem("Mug", 10);
    // { name, price, qty }
    results.should.equal([{"Mug": 10}])
    results.should.be('object')
    results.should.to.have.proterty('name')
    results.should.have.property('price')
});
// object with name and price and count?
it('Should add a new item to the shopping cart', () => {
    const apple = cart.newItem('Apple')
});
// add the item object to the array
it('Should return the number of items in the cart', () => {

});
// get array length
it('Should return an array containing all items in cart');
// get the array, make sure it is an array
it('Should remove items from cart');
// get an array that had less items

//Stretch

it('Should update the count of items in the cart');
// check for an increase in count of items
it('Should remove an item when its count is 0');
// make sure there are no objects with count = 0
it('Should return the total cost of all items in the cart');