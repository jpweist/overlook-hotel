import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
  let customer1 = {};
  beforeEach(() => {
    customer1 = new Customer({
        "id":1,
        "name":"Leatha Ullrich"
    })
  });
  it('should should be an instance of customer', function() {
    expect(customer1).to.be.an.instanceof(Customer);
  })

}); // end



// import User from '../src/User';
//
// describe('User', function() {
//   let user;
//   beforeEach(() => {
//     user = new User ({
//       "id": 1,
//       "name": "Luisa Hane",
//       "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
//       "email": "Diana.Hayes1@hotmail.com",
//       "strideLength": 4.3,
//       "dailyStepGoal": 10000,
//       "friends": [16, 4, 8]
//     });
//   });
//
//   it('should be a function', function() {
//     expect(User).to.be.a('function');
//   });
//
//   it('should be an instance of User', function() {
//     expect(user).to.be.an.instanceof(User);
//   });
//
//   it('should have a name', function() {
//     expect(user.name).to.equal('Luisa Hane');
//   });
//
//   it('should return the first name', function() {
//     expect(user.returnUserFirstName()).to.equal('Luisa');
//   })
// });
