import chai from 'chai';
const expect = chai.expect;

import Bookings from '../src/Bookings';

describe('Bookings See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
  let bookingsData1 = {};
  beforeEach(() => {
    bookingsData1 = new Bookings(
      {"id":1572293130160,
        "userID":1,
        "date":"2019/11/18",
        "roomNumber":5,
        "roomServiceCharges":[]
      })
  })
  it('should have an instanceof of Bookings', function() {
    expect(bookingsData1).to.be.an.instanceof(Bookings);
  })

});
