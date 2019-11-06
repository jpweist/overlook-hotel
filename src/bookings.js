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
