import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel'

describe('Hotel Class tests', function() {
  let hotel1;
  let rooms1 = {
    "number":1,
    "roomType":"residential suite",
    "bidet":true,
    "bedSize":"queen",
    "numBeds":1,
    "costPerNight":358.4
  };
  let bookings1 =
    {"id":1572293130160,
      "userID":1,
      "date":"2019/11/18",
      "roomNumber":5,
      "roomServiceCharges":[]
    };

  beforeEach(() => {
      hotel1 = new Hotel(rooms1, bookings1);
  })

  it('should be an instance of Hotel', function() {
    expect(hotel1).to.be.an.instanceof(Hotel);
  });
  
})
