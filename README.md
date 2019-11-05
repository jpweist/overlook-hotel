# Overlook
Is a hotel app that allows the manager or customer to book rooms and
see their bookings and room charges.

The manager can view the openings for today and the profit from today.

## Setup

After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo.

Then install the library dependencies. Run:

npm install

To verify that it is setup correctly, run `npm start` in your terminal. Go to the url `http://localhost:8080/`. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

## Iterations
Login
Your app should support two different types of users: a customer and a manager. When first arriving at the site, a user should be able to log in with a username and password. If it is a manager logging in, they should log in with the following credentials:

username: manager
password: overlook2019
If it is a customer logging in, they should log in with the following credentials:

username: customer
password: overlook2019

page currently either login to customer page or manager page.


## fetch
Datasets
You will use the following endpoints for fetching your data:

https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users

https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms

https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings


currently fetching data from urls. The data is also stored in sample-data in src.


## classes
the Manger class is set up to extend the Hotel class.
the Customer class would be set up to extend Hotel class.

# Tests
The tests are just basic.

![Login Screen]("https://raw.githubusercontent.com/jpweist/overlook-hotel/master/src/images/overlook-login.png")


![Manager Screen]("https://raw.githubusercontent.com/jpweist/overlook-hotel/master/src/images/overlook-manager.png")

![Customer Screen]("https://raw.githubusercontent.com/jpweist/overlook-hotel/master/src/images/overlook-customer.png")
