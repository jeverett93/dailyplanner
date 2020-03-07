$(document).ready(function() {

// Getting current time to pop up
var dayAndTime = moment().format('LLLL');

$("#currentDay").append(dayAndTime);

});