// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'John Doe';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane Doe';
}

upperCaseCustomerName();
console.log(customerName);

setBestCustomer();
console.log(bestCustomer);
overwriteBestCustomer();
console.log(bestCustomer);

try {
  changeLeastFavoriteCustomer();
} catch (error) {
  console.log(error.message);
}
