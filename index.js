// Code your solution in this file!
// declare a variable with const for function returnsFirstTwoDrivers
// assign an anonymous function to it 
// the anonymous function should take an argument an array containing the names of drivers
// slice the array from index 0 to 2 inclusive of and ending at 2

const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2);
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// declare a variable returnLastTwoDrivers 
// assign an anonymous function to it 
// returns array to the last two functions
// slice the array from the index 2 till the last

const returnLastTwoDrivers = function () {
    return drivers.slice(2);
}
// declare an array containing two elements of the functions i have defined 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// create a higher-order function
// the function will take in 1 argument an integer and returns a function that will multiply a fare for a ride accordingly
// declare createFareMultiplier with const
// set the first outer parameter as multiplier
// return a function 
// set inner function parameter as fares

const createFareMultiplier = function (multiplier) {
    return function (fares) {
        return fares * multiplier;
    }
}
// create function fareDoubler
const fareDoubler = function createFareMultiplier(fares) {
    return (fares * 2);
}
// create function fareTripler
const fareTripler = function createFareMultiplier(fares) {
    return (fares * 3);
}
// create function selectDifferentDrivers
// this function will choose different drivers
//this function takes in 2 arguments 
// an array of the names of drivers and 
// either the returnFirstTwoDrivers function or 
// the returnLastTwoDrivers function
const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return (returnFirstTwoDrivers(drivers))
}