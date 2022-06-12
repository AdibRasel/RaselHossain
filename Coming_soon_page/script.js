
// header background color change 
var bg_color_header = document.getElementById("bg_color");
bg_color_header.addEventListener("click", function(){
    bg_color_header.style.backgroundColor = bg_color();
})
var time_box_color_1 = document.getElementById("TimeBox_color_1");
time_box_color_1.addEventListener("click", function(){
    time_box_color_1.style.backgroundColor = bg_color();
})
var time_box_color_2 = document.getElementById("TimeBox_color_2");
time_box_color_2.addEventListener("click", function(){
    time_box_color_2.style.backgroundColor = bg_color();
})
var time_box_color_3 = document.getElementById("TimeBox_color_3");
time_box_color_3.addEventListener("click", function(){
    time_box_color_3.style.backgroundColor = bg_color();
})
var time_box_color_4 = document.getElementById("TimeBox_color_4");
time_box_color_4.addEventListener("click", function(){
    time_box_color_4.style.backgroundColor = bg_color();
})
function bg_color() {
    // rgb(0, 0, 0), rgb(255, 255, 255)
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}
// end backgroundColor change 



function test(){
    var datadate = document.getElementById("DateData")
    var date_Show = document.getElementById("dateShow")

    date_Show.innerHTML = datadate;
    var a = new date()
    console.log(a)
}



// time count javascript



// function countDawon(){
//     var eventTime = new Date("23 jun 2022 10:10:00")
//     var currentTime = new Date();
//     var totalTime = eventTime - currentTime;

//     var totalSecond = totalTime / 1000;
//     var totalMinute = totalSecond /60;
//     var totalHoure =  totalMinute /60;
//     var totalDay = totalHoure / 24;

//     var dayRemain = Math.floor(totalHoure / 24);
//     var houreRemain = Math.floor(totalHoure % 24);
//     var minuteRemain = Math.floor(totalMinute % 60);
//     var secondRemain = Math.floor(totalSecond % 60);

//     // console.log(secondRemain)

//     day.innerHTML = dayRemain;
//     hour.innerHTML = houreRemain;
//     minute.innerHTML = minuteRemain;
//     second.innerHTML = secondRemain;

// }
// countDawon();
// setInterval(countDawon, 1000)





// var targetDate = new Date("15 jun 2022 10:00:00");

// var currentTime = new Date();

// var distance = targetDate - currentTime;

// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);


var countdownfunction = setInterval(function() {
    var targetDate = new Date("12 jun 2023 10:00:00");

    var targetDate_kaj_ekhono_ses_hoy_ni_kaj_ses_korte_Hobe = document.getElementById("event_Time")


    var currentTime = new Date();
    
    var distance = targetDate - currentTime;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days
    document.getElementById("houre").innerHTML = hours
    document.getElementById("minute").innerHTML = minutes
    document.getElementById("Seconde").innerHTML = seconds

    console.log(targetDate)

}, 1000);








// const [date, time] = formatDate(new Date()).split(' ');
// console.log(date); // 👉️ 2021-12-31
// console.log(time); // 👉️ 09:43

// // ✅ Set Date input Value
// // const dateInput = document.getElementById('date');
// // dateInput.value = date;

// // 👇️️ "2021-12-31"
// console.log('dateInput value: ', dateInput.value);

// // ✅ Set time input value
// const timeInput = document.getElementById('time');
// timeInput.value = time;

// // 👇️ "09:43"
// console.log('timeInput value: ', timeInput.value);

// // ✅ Set datetime-local input value
// const datetimeLocalInput = document.getElementById('datetime-local');
// datetimeLocalInput.value = date + 'T' + time;

// // 👇️ "2021-12-31T10:09"
// console.log('dateTimeLocalInput value: ', datetimeLocalInput.value);

// // 👇️👇️👇️ Format Date as yyyy-mm-dd hh:mm:ss
// // 👇️ (Helper functions)
// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//   return (
//     [
//       date.getFullYear(),
//       padTo2Digits(date.getMonth() + 1),
//       padTo2Digits(date.getDate()),
//     ].join('-') +
//     ' ' +
//     [
//       padTo2Digits(date.getHours()),
//       padTo2Digits(date.getMinutes()),
//       // padTo2Digits(date.getSeconds()),  // 👈️ can also add seconds
//     ].join(':')
//   );
// }

// // 👇️ 2021-12-31 09:46
// formatDate(new Date());

// // 👇️ 2025-05-04 05:24
// formatDate(new Date('May 04, 2025 05:24:07'));

// // console.log(days)