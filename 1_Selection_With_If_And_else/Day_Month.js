/* 2. Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise. */

const day = prompt("Enter a Date");
const month = prompt("Enter a Month");

if(day >= 20 &&  month <= 6){
  console.log(true);
}
else if (day < 20 && month < 3){
  console.log(false);
}
else{
  console.log(false);
}