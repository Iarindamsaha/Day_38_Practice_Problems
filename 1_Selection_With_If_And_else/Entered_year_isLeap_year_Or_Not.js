/*
Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400.
*/

var year = prompt("Enter The year : ");

if(year % 400 == 0){
  console.log("The Year is a Leap Year");
}
else if( year % 100 == 0){
  console.log("the Year is Not a Leap Year");
}
else if (year % 4 == 0){
  console.log("The Year is a leap Year");
}
else{
  console.log("The year is Not a leap year");
}