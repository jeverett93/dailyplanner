$(document).ready(function(){

// Getting current time to pop up
var dayAndTime = moment().format('LLLL');
var container = $("#container");
var workData = {"9AM": "", "10AM": "", "11AM": "", "12PM": "", "1PM": "", "2PM": "", "3PM": "", "4PM": "", "5PM": ""};
var savedTasks = JSON.parse(localStorage.getItem("tasks")) || workData;

// var currentSlot = {9: "9AM", 10: "10AM", 11: "11AM", 12: "12PM", 13: "1PM", 14: "2PM", 15: "3PM", 16: "4PM", 17: "5PM"}[moment().hour()]

var currentHour = moment().hour();
var currentSlot = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

$("#currentDay").append(dayAndTime);

function createTimeBlocks() {
    var blocks = "";

    currentSlot.forEach(function(time) {
      var hourBlock = "" +
          '<div class="input-group mb-3">' +
          '<div class="input-group-prepend">' +
          '<span class="input-group-text">' + time + ":00" + '</span>' +
          '</div>' +
          `<input type="text" class="form-control" id="input-${time}" value="${savedTasks[time]}"/>` +
          '<div class="input-group-append">' +
          '<button class="btn btn-primary save-button" data-time="'  + time + '"><i class="fa fa-save"></i></button>' +
          '</div>' +
          '</div>';
      blocks += hourBlock;

    });

    container.append(blocks);

    $(".save-button").on("click", function(event) {
        var timeSlot = event.currentTarget.getAttribute('data-time')

        var userTask = $('#input-' + timeSlot).val();
        console.log(userTask);
        // savedTasks.push(userTask);
        savedTasks[timeSlot] = userTask
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });



}

createTimeBlocks();

for (var i = 0; i < currentSlot.length; i++) {
  console.log('currentHour', currentHour)
  console.log('currentSlot', parseInt(currentSlot[i]))

  if (currentHour === parseInt(currentSlot[i])) {
    $("#input-" + currentSlot[i]).attr('style', 'background-color: lightgreen;')
  }

  if (currentHour > parseInt(currentSlot[i])) {
    $("#input-" + currentSlot[i]).attr('style', 'background-color: pink;')
  }

  if (currentHour < parseInt(currentSlot[i])) {

    $("#input-" + currentSlot[i]).attr('style', 'background-color: aqua;')
  }
}





})

