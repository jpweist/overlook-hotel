class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  allBookings() {
    //return all the past present and upcoming bookings
  }
  totalSpent() {
    //total ammount the the customer has spent
  }
  seeAvailableRoomsDate() {
    //see all the available rooms by date
  }
  bookRoom() {
    //book selected room
  }

}

export default Customer;


// user data:
// {
//     "id":1,
//     "name":"Leatha Ullrich"
// }
//
// rooms data:
// {
//     "number":1,
//     "roomType":"residential suite",
//     "bidet":true,
//     "bedSize":"queen",
//     "numBeds":1,
//     "costPerNight":358.4
// }
//
// bookings data:
// {
//     "id":1572293130156,
//     "userID":19,
//     "date":"2019/11/06",
//     "roomNumber":18,
//     "roomServiceCharges":[]
// }
