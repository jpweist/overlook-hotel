// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// import Manger from 'Manger'
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Manager from '../src/Manager';
import Customer from '../src/Customer';
import Bookings from '../src/Bookings';
import Rooms from '../src/Rooms';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
$( document ).ready(function() {
let manager, customer, bookings;
let rooms;
let roomData, bookingsData;
let getCounter = 0;

function getRoomsData() {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  .then(data => data.json())
  .then(data => rooms = new Rooms(data.rooms))
  .then(data => console.log(rooms))
  .catch(err => console.log(err));
};

getRoomsData();

function getBookingsData() {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  .then(data => data.json())
  .then(data => bookings = new Bookings(data.bookings))
  .then(data => console.log(bookings))
  .catch(err => console.log(err));
}
getBookingsData();

// function theInitializer() {
//   getHelper('rooms/rooms', (roomData) => {
//     rooms = new Rooms(roomData);
//   });
// }

// ##############################
// fetch request to: (make DRY like last project)
// https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users
// https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms
// https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings
//
// Allow customers and managers to add a room service charge to a booking by utilizing the:
// https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices

  //
  // function theInitializer() {
  //   getHelper('users/users', (data) => {
  //     customerData = data.userData;
  //     customer = new Customer(customerData);

  //     rooms = new Rooms(userData);
  //     getHelper('rooms/rooms', (roomData) => {
  //       sleepData = sleepData;
  //       sleep = new Sleep(userData, sleepData.sleepData);
  //     })
  //     getHelper('activity/activityData', (actData) => {
  //       actData = actData;
  //       activity = new Activity(userData, actData.activityData);
  //     })
  //     getHelper('hydration/hydrationData', (hydData) => {
  //       hydData = hydData;
  //       hydration = new Hydration(userData, hydData.hydrationData);
  //     })
  //   })
  // }
  //
  // theInitializer();
  //
  // function getCheck() {
  //   if (getCounter === 4) {
  //     initDom();
  //   }
  // }
  //
  // function initDom() {
  //   const userIdNum = generateRandomUserId();
  //   const currentDate = '2019/06/30';
  //   const user = userRepo.returnUserData(userIdNum);
  //   const newUser = new User(user);
  //   const friendNames = returnFriendListNames();
  //   const friendSteps = returnFriendListSteps();
  //   const stepsTrend = (activity.returnThreeDayStepStreak(user.id)[0]);














$('.login-button').on( "click", function() { // login manager or customer

  let userName = $('.user-login').val();
  let userpassword = $('.password').val();

  if (userName === 'manager' && userpassword === 'overlook2019') {
    let manager1 = new Manager(userName);
    // let bookings1 = new Bookings(bookingsData);
    // getHelper('rooms/rooms', (roomData));
    window.location = 'manager.html';
  }
   if (userName === 'customer' && userpassword === 'overlook2019') {
     let customer1 = new Customer(userName);
     console.log(customer1)
    window.location = 'customer.html'
  }
  if (userName !== 'manager' && userpassword !== 'overlook2019' || userName !== 'customer' && userpassword !== 'overlook2019') {
    console.log('failed login')
  }
})













// var ctx = $('#myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',
//
//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },
//
//     // Configuration options go here
//     options: {}
// });





}); // end jQuery
