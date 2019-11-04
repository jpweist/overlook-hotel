import chai from 'chai';
const expect = chai.expect;

import Rooms from '../src/Rooms';

describe('Rooms Class tests', function() {
  let rooms1 = {};

  beforeEach(() => {
    rooms1 = new Rooms({
      "number":1,
      "roomType":"residential suite",
      "bidet":true,
      "bedSize":"queen",
      "numBeds":1,
      "costPerNight":358.4
    });
  });
  it('should be an instanceof Rooms', function() {
    expect(rooms1).to.be.an.instanceof(Rooms);
  });
});
