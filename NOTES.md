1. Login
Your app should support two different types of users: a customer and a manager. When first arriving at the site,
a user should be able to log in with a username and password. If it is a manager logging in, they should log in
with the following credentials:

username: manager
password: overlook2019
If it is a customer logging in, they should log in with the following credentials:

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

 customer view
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
