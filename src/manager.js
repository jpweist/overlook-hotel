import Hotel from '../src/hotel.js';

class Manager extends Hotel{
  constructor(rooms, bookings, userName) {
    super(rooms, bookings, userName)
    this.userName = userName;
  }


}
export default Manager;











// class Customer {
//   constructor(object) {
//     this.id = object.id;
//     this.name = object.name;
//   }
//   seeAvailableRoomsDate(date) {
//     //see all the available rooms by date
//     let findDate = bookingsData1.date.find((day) => day === date)
//     return findDate;
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
