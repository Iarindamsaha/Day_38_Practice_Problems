var day = prompt("Enter Between 1 - 7 : ")


day = parseInt(day);

switch(day)
    {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log( "WEDNESDAY");
        break;
    case 4:
        console.log("THRSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log(" SUNDAY");
        break;
    default:
        console.log("Invalid Input");
        break;
}