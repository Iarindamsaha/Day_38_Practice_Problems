console.log("Press 1 TO Covert Temparature Form Fahrenhite To Celcius\nPress 2 TO Convert Temparature From Celcius To Fahrenhite");
var userInput = prompt("Enter Your Choice : ");
userInput = parseInt(userInput);

switch (userInput) {
    case 1:
        fahrenToCelcius();
        break;
    case 2:
        celciusToFahren();
        break;
    default:
        console.log("enter right choice");
        break;

}

function celciusToFahren() {
    let a = prompt("Enter Temparature In Centrigrade")
    if (a >= 0 && a <= 100) {
        let F = (a * 9 / 5) + 32;
        console.log(a + " Degree C = " + F + " Degree F");
    }
    else {
        console.log("Inputs are not within the Freezing Point \n Please Enter Between 0DegreeC to 100DegreeC");
    }
}

function fahrenToCelcius() {
    let b = prompt("Enter Temparature in Fahrenhite")
    if (b >= 32 && b <= 212) {
        let C = (b - 32) * 5 / 9;
        console.log(b + " Degree F = " + C + " Degree C");
    } else {
        console.log("Inputs are not within the Freezing Point \n Please Enter Between 32DegreeF to 212DegreeF");
    }
}