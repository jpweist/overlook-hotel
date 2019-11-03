// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// import Manger from 'Manger'
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

$( document ).ready(function() {

$('.login-button').on( "click", function() {

  let userName = $('.user-login').val();
  let userpassword = $('.password').val();

  if (userName === 'manager' && userpassword === 'overlook2019') {
    window.location = 'manager.html';

    // window.locagtion.assign("manager.html");
    // window.location.href = 'http://www.google.com';
    // $("#div1").load("demo_test.txt");

    // filename: 'manager.html',
    // template: './src/manager.html'

// window.location.assign()

    console.log(userName, userpassword)
  }
   if (userName === 'customer' && userpassword === 'overlook2019') {
    window.location = 'customer.html'
  }
  if (userName !== 'manager' && userpassword !== 'overlook2019' || userName !== 'customer' && userpassword !== 'overlook2019') {
    console.log('failed login')
  }
})







}); // end jQuery
