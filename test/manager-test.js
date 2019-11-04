import chai from 'chai';
const expect = chai.expect;

import Manager from '../src/Manager';


describe('Manger See if the test are running', function() {
  let manager1 = {};

  beforeEach(() => {
    manager1 = new Manager({
      "user": 'manager'
    });
  });

  it('should be an instanceof Manager', function() {
    expect(manager1).to.be.an.instanceof(Manager);

  });

});










// describe('Customer See if the tests are running', function() {
//   it('should return true', function() {
//     expect(true).to.equal(true);
//   });
//   let customer1;
//
//   beforeEach(() => {
//     customer1 = new Customer({
//         "id":1,
//         "name":"Leatha Ullrich"
//     });
