class Rooms {
  constructor(object) {
    this.number = object.number;
    this.roomType = object.roomType;
    this.bidet = object.bidet;
    this.bedSize = object.bedSize;
    this.numBeds = object.numBeds;
    this.costPerNight = object.costPerNight;
  }

}

export default Rooms;



// {"number":1,
// "roomType":"residential suite",
// "bidet":true,
// "bedSize":"queen",
// "numBeds":1,
// "costPerNight":358.4}
