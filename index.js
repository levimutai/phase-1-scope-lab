// Write your solution in this file!
// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  // bestCustomer is not declared with var, let, or const,
  // so it becomes a global variable when this function is called.
  bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
  return bestCustomer;
}

const leastFavoriteCustomer = 'Some initial value';

function changeLeastFavoriteCustomer() {
  // This will cause a TypeError because you cannot reassign a constant variable.
  leastFavoriteCustomer = 'A new value';
  return leastFavoriteCustomer;
}



