class Bookings {
  constructor(array) {
    this.allBookings = array;
  }
  // bookings.allBookings[0].date
  seeAvailableRoomsDate(date) {
  let data = bookings.allBookings;
  data.reduce((acc, num) => {
    console.log(acc)
    return acc;
  },[])
      // see all the available rooms by date
    }
}
export default Bookings;



// {"id":1572293130160,
// "userID":1,
// "date":"2019/11/18",
// "roomNumber":5,
// "roomServiceCharges":[]}






// class Customer {
//   constructor(object) {
//     this.id = object.id;
//     this.name = object.name;
//   }
//   seeAvailableRoomsDate(date) {
//     //see all the available rooms by date
//   }
//   allBookings() {
//     //return all the past present and upcoming bookings
//   }
//   totalSpent() {
//     //total ammount the the customer has spent
//   }
//   bookRoom() {
//     //book selected room
//   }
//
// }
//
// export default Customer;
