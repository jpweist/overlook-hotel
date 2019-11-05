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

// fetch request to: (make DRY like last project)
// https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users
// https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms
// https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings

function getData(ext, callback) {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/' + ext)
  .then(data => data.json())
  .then(data => {
    callback(data);
  })
  .catch(err => console.log(err));
}
makeClasses()

function makeClasses() {
  getData('bookings/bookings', (data) => {
    bookings = new Bookings(data.bookings);
    console.log(bookings);
  });
  getData('rooms/rooms', (data) => {
    rooms = new Rooms(data.rooms);
    console.log(rooms)
  });
  getData('users/users', (data) => {
    customer = new Customer(data.users);
    console.log(customer);
  })
}





$('.login-button').on( "click", function() { // login manager or customer

  let userName = $('.user-login').val();
  let userpassword = $('.password').val();

  if (userName === 'manager' && userpassword === 'overlook2019') {
    let manager1 = new Manager(userName);
    // let bookings1 = new Bookings(bookingsData);
    // getHelper('rooms/rooms', (roomData));
    bookings.seeAvailableRoomsDate('2019/11/06');
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
