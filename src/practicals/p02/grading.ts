// Write your code below
let score = Number(process.argv[2]);
if(score < 0 || score > 100 || !score){
    console.log("Invalid Input");
    process.exit(0);
}
if(score <= 49){
    console.log("Grade is F");
}
else if(score <= 59){
    console.log("Grade is D");
}
else if(score <= 69){
    console.log("Grade is C");
}
else if(score <= 79){
    console.log("Grade is B");
}
else if(score <= 100){
    console.log("Grade is A");
}