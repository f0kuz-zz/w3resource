
// Today is: Monday

var d1 = new Date(2016, 2, 31, 21, 40, 34);

var day = d1.getDay();

var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log( "Today is: " + week[day - 1] );

// Current time is : 4 PM : 50 : 22

var d2 = new Date();

var hour  = d1.getHours();

// var a_or_p; // to samo co zmienna prepand

// if(hour <= 12) {
// 	a_or_p = "AM";
// } else {
// 	hour = hour - 12 ;
// 	a_or_p = "PM";
// }

var prepand = (hour <= 12) ? "AM" : "PM"; // wyrazenie trojargumentowe

hour = (hour <= 12) ? hour : hour -12;

console.log( "Current time is: " + hour + " " + prepand + " : " + d2.getMinutes() + " : " + d2.getSeconds() );