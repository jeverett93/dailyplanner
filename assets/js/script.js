$(document).ready(function(){

// Getting current time to pop up
var dayAndTime = moment().format('LLLL');
var container = $("#container");
var workData = {"9": "", "10": "", "11": "", "12": "", "13": "", "14": "", "15": "", "16": "", "17": ""};
var savedTasks = JSON.parse(localStorage.getItem("tasks")) || workData;

var currentSlot = {9: "9", 10: "10", 11: "11", 12: "12", 13: "13", 14: "14", 15: "15", 16: "16", 17: "17"}[moment().hour()]

$("#currentDay").append(dayAndTime);

function createTimeBlocks() {
    var blocks = "";
   

    function setColor(time) {
      if (time === currentSlot) {
        return 'lavender'
      }
      if (time > currentSlot) {
        return 'pink'
      }
      if (time < currentSlot) {
        return 'aqua'
      }
    }

    Object.keys(savedTasks).forEach(function(time) {
      var hourBlock = "" +
          '<div class="input-group mb-3">' +
          '<div class="input-group-prepend">' +
          '<span class="input-group-text">' + time + '</span>' +
          '</div>' +
          `<input type="text" style="background-color: ${setColor(time)}" class="form-control" id="input-${time}" value="${savedTasks[time]}"/>` +
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






})

// Display only standard working hours (i.e. 9 AM - 5 PM) and color code each block based on the current time. (Hint: HTML elements should be dynamically created.)
    // dynamically populate container with time blocks (grab container id to do this)
    // create timeblocks using a variable
    // use for loop to add input attribute to timeblocks
// Clicking each block allows the user to add text.
// Clicking a save button/icon will save the content to localStorage.

 // for (var i = 0; i < workHours.length; i++) {
    //     var hourBlock = "" +
    //         '<div class="input-group mb-3">' +
    //         '<div class="input-group-prepend">' +
    //         '<span class="input-group-text">' + workHours[i] + '</span>' +
    //         '</div>' +
    //         '<input type="text" class="form-control" id="input-' + workHours[i] + '">' +
    //         '<div class="input-group-append">' +
    //         '<button class="btn btn-primary save-button" data-time="'  + workHours[i] + '"><i class="fa fa-save"></i></button>' +
    //         '</div>' +
    //         '</div>';
    //     blocks += hourBlock;
    // }

    // var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

    // '<input type="text" class="form-control" id="input-' + time + '">' + savedTasks[time] + '</input>' +