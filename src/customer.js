class Customer {
  constructor(array) {
    this.allUsers = array;
  }
  seeAvailableRoomsDate(date) {
    //see all the available rooms by date
    let findDate = bookingsData1.date.find((day) => day === date)
    return findDate;
  }
  allBookings() {
    //return all the past present and upcoming bookings
  }
  totalSpent() {
    //total ammount the the customer has spent
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
// {"id":1572293130160,
// "userID":1,
// "date":"2019/11/18",
// "roomNumber":5,
// "roomServiceCharges":[]}

// {"id":1572293130170,
// "userID":1,
// "date":"2019/12/05",
// "roomNumber":5,
// "roomServiceCharges":[]}

// {"id":1572293130178,
// "userID":1,
// "date":"2019/12/11",
// "roomNumber":19,
// "roomServiceCharges":[]}
