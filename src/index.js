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

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
$( document ).ready(function() {

$('.login-button').on( "click", function() { // login manager or customer

  let userName = $('.user-login').val();
  let userpassword = $('.password').val();

  if (userName === 'manager' && userpassword === 'overlook2019') {
    let manager1 = new Manager(userName);
    // let bookings1 = new Bookings(bookingsData);
    console.log(manager1)
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
