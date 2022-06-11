
var day = document.getElementById("day");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second= document.getElementById("second");


function countDawon(){
    var eventTime = new Date("23 jun 2022 10:10:00")
    var currentTime = new Date();
    var totalTime = eventTime - currentTime;

    var totalSecond = totalTime / 1000;
    var totalMinute = totalSecond /60;
    var totalHoure =  totalMinute /60;
    var totalDay = totalHoure / 24;

    var dayRemain = Math.floor(totalHoure / 24);
    var houreRemain = Math.floor(totalHoure % 24);
    var minuteRemain = Math.floor(totalMinute % 60);
    var secondRemain = Math.floor(totalSecond % 60);

    // console.log(secondRemain)

    day.innerHTML = dayRemain;
    hour.innerHTML = houreRemain;
    minute.innerHTML = minuteRemain;
    second.innerHTML = secondRemain;

}
countDawon();
setInterval(countDawon, 1000)

// console.log(setInterval(countDawon()), 1000)