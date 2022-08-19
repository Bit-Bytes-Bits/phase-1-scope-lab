// Write your solution in this file!
// const log = console.log;
var customerName = 'bob'
// let bestCustomer;
const leastFavoriteCustomer = 'Queen';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}
// log(upperCaseCustomerName());

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}
// log(setBestCustomer());

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return ;
}
// log(overwriteBestCustomer());

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = '';
    return leastFavoriteCustomer;
}
changeLeastFavoriteCustomer();