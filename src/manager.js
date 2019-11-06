import Hotel from '../src/hotel.js';

class Manager extends Hotel{
  constructor(rooms, bookings, userName) {
    super(rooms, bookings)
    this.userName = userName;
  }
  // Total Rooms Available for today’s date
  returnAllRoomsAvaiableToday(date) {
  }

}
export default Manager;
