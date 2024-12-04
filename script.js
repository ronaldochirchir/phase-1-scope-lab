var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  var bestCustomer = 'not bob';
}

let leastFavoriteCustomer = 'Bob';

function changeLeastFavoriteCustomer(name) {
  // We cannot re-declare 'leastFavoriteCustomer' here with 'let' again.
  leastFavoriteCustomer = name;
  console.log(leastFavoriteCustomer);
}

console.log(leastFavoriteCustomer);  // Logs 'Bob'
changeLeastFavoriteCustomer('Jane');  // Change to 'Jane'
console.log(leastFavoriteCustomer);  // Logs 'Jane'
changeLeastFavoriteCustomer('Alice');  // Change to 'Alice'
console.log(leastFavoriteCustomer);  // Logs 'Alice'

let history = [];

function changeLeastFavoriteCustomerHistory(name) {
  history.push(leastFavoriteCustomer);
  leastFavoriteCustomer = name;
}

console.log(history);  // Logs an empty array initially
changeLeastFavoriteCustomerHistory('Tom');  // Adds 'Alice' to history, change to 'Tom'
console.log(history);  // Logs history: ['Alice']
console.log(leastFavoriteCustomer);  // Logs 'Tom'

