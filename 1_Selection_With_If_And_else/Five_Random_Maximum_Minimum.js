//If & Else Problems

/*1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value*/

let x = Math.floor((Math.random() * 900) + 100);
let y = Math.floor((Math.random() * 900) + 100);
let z = Math.floor((Math.random() * 900) + 100);
let a = Math.floor((Math.random() * 900) + 100);
let b = Math.floor((Math.random() * 900) + 100);

console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);
console.log("a = " + a);
console.log("b = " + b);


if(x>y && x>z && x>a && x>b){
    console.log(x+" Is The Largest Number ");
}
else if (y > z && y >a && y > b){
    console.log(y+ " Is The Largest Number ");
}
else if (z > a && z > b){
    console.log(z+ " Is The Largest Number ");
}
else if (a > b){
    console.log(a+ " Is The Largest Number");
}
else{
    console.log(b + " Is The Largest Number");
}

if(x<y && x<z && x<a && x<b){
    console.log(x+" is The Smallest Number");
}
else if (y < z && y < a && y < b){
    console.log(y+ " Is The Smallest Number ");
}
else if (z < a && z < b){
    console.log(z+ " Is The Smallest Number ");
}
else if (a < b){
    console.log(a+ " Is The Smallest Number");
}
else{
    console.log(b + " Is The Smallest Number");
}
