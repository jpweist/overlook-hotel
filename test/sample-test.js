import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import Bookings from '../src/Bookings';
import bookingsData from '../src/sample-data/bookings.js';

describe('Customer See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
  let customer1;

  beforeEach(() => {
    customer1 = new Customer({
        "id":1,
        "name":"Leatha Ullrich"
    });
  //   bookingsData1 = new Bookings(
  //   {"id":1572293130160,
  //   "userID":1,
  //   "date":"2019/11/18",
  //   "roomNumber":5,
  //   "roomServiceCharges":[]});
  // });
  it('should be an instance of customer', function() {
    expect(customer1).to.be.an.instanceof(Customer);
  });
  it('should have an id of 1 and a name of Leatha Ullrich', function() {
    expect(customer1.name).to.equal("Leatha Ullrich");
    expect(customer1.id).to.equal(1);
  });
  it('should be an instance of booking', function() {
    expect(bookingsData1).to.be.an.instanceof(Bookings);
  })
  it('should be able to see seeAvailableRoomsDate', function() {
    console.log(customer1.seeAvailableRoomsDate())
    expect(customer1.seeAvailableRoomsDate().to.deep.equal("2019/11/18"))
  });


});
