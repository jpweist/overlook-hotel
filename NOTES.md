1. Login
Your app should support two different types of users: a customer and a manager. When first arriving at the site,
a user should be able to log in with a username and password. If it is a manager logging in, they should log in
with the following credentials:

username: manager
password: overlook2019
If it is a customer logging in, they should log in with the following credentials:

class Manger {
  constructor(userName)
  this.user = userName;

}
or if manager then

username: customer50 (where 50 is the ID of the user)
password: overlook2019

2. Dashboard
As a manager, upon logging in:

I should see a dashboard page that shows me:
_Total Rooms Available for today’s date_
_Total revenue for today’s date_
_Percentage of rooms occupied for today’s date_

# manager access
  - totalRoomsAvilableTodayDate
  - totalRevenueforTodayDate
  - percentageRoomsOccupiedTodayDate



As a customer, upon logging in:

I should see a dashboard page that shows me:
_Any room bookings I have made (past or present/upcoming)_
_The total amount I have spent on rooms_

# customer view
 - anyBookingsPast/Present
 - totalSpentOnRooms


3. Customer Interaction
# As a customer:
_I should be able to select a date for which I’d like to book a room for myself_
_Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date_
_I should be able to filter the list of available rooms by their roomType property_
_I should be able to select a room for booking_
_In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search_

# customer access
  - bookRoombyDate (filter)
  - availableRoomsByDate
  - filterAvailableRoomsByroomType
  - selectRoomForBooking
  - ifNoRoomAvailableApologizingNote


Booking a room will require a POST request to the bookings endpoint, like so:

Room Booking: https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings

{
    "userID": 48,
    "date": "2019/09/23",
    "roomNumber": 4
}

##############################
fetch request to: (make DRY like last project)
https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users
https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms
https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings

Allow customers and managers to add a room service charge to a booking by utilizing the:
https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices

user data:
{
    "id":1,
    "name":"Leatha Ullrich"
}

rooms data:
{
    "number":1,
    "roomType":"residential suite",
    "bidet":true,
    "bedSize":"queen",
    "numBeds":1,
    "costPerNight":358.4
}

bookings data:
{
    "id":1572293130156,
    "userID":19,
    "date":"2019/11/06",
    "roomNumber":18,
    "roomServiceCharges":[]
}

###################################




4. Manager Interaction
As a manager:

I should be able to search for any user by name and:
View their name, a list of all of their bookings, and the total amount they’ve spent
Add a room booking for that user
Delete any upcoming room bookings for that user (they cannot delete a booking from the past)
Deleting an upcoming booking will require a DELETE request to the bookings endpoint, like so:
  manager Actions
  - searchForUserByName
  - addBookingForUser
  - viewNameBookingsTotalSpent
  - deleteUpcomingRoomBooking (DELETE request to the bookings endpoint)

{
    id: 12085397154
}



#######################
If somebody wants to use separated html for every board (customer / manager ) you need to add all html into webpack.config file

// Below is needed for webpack-dev-server
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'user-deck.html',
      template: './src/user-deck.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'manager-deck.html',
      template: './src/manager-deck.html'
    })
  ],

  $('.login-form button').on('click', function() {
  if ($user === 'manager') {
    window.location = "./manager-deck.html";
  } else {
    window.location = "./user-deck.html";
  }
});

######################
