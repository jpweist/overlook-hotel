import chai from 'chai';
const expect = chai.expect;

import Manager from '../src/Manager';
import Hotel from '../src/Hotel';
import bookingsData from '../src/sample-data/bookings.js';
import roomsData from '../src/sample-data/rooms.js';

describe('Manager Class tests', function() {
  let manager1;
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
    manager1 = new Manager(rooms1, bookings1, {
      "user": 'manager'
    });
  });

  it('should be an instanceof Manager', function() {
    expect(manager1).to.be.an.instanceof(Manager);
  });
  it('should return the available rooms today', function() {
    console.log(manager1)
    expect(manager1.returnAllRoomsAvaiableToday()).to.deep.equal('')
  })

});
