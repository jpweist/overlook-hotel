import './css/base.scss';
import Manager from '../src/Manager';
import Customer from '../src/Customer';
import Bookings from '../src/Bookings';
import Rooms from '../src/Rooms';
import './images/turing-logo.png';
$( document ).ready(function() {
let manager, customer, bookings;
let rooms;
let roomData, bookingsData;
let getCounter = 0;

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
}); // end jQuery
