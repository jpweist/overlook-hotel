// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
$( document ).ready(function() {

$('.login-button').on( "click", function() {

  let userName = $('.user-login').val();
  let userpassword = $('.password').val();

  if (userName === 'manager' && userpassword === 'overlook2019') {
    console.log(userName, userpassword)
  }
  if (userName === 'customer' && userpassword === 'overlook2019') {
    console.log(userName, userpassword)
  }
  else {
    console.log('failed login')
  }
})


// var location = '';
// if (iName=='love' && AccId=='cat') {
//     location=("page1.html");
// }
// else if (iName=='mom' && AccId=='love') {
//     location=("page2.html");
// }
// else alert('Wrong pair');
//
// this.location.href = location;




}); // end jQuery
