// Array of course_list is made
const courseList =[
    {code:"ACIT 1620",name:'Web Fundamental Technology'},
    {code:"ACIT 1630",name:'Database Systems'},
    {code:'ACIT 1420', name:'Introduction to Systems Administration'}
]
//User Inputs a 4 digit course code
let input =""
do{
input = prompt("Enter a 4 digit number");
if ((isNaN(Number(input))) || (input.length!=4)){
    alert("Invalid please enter again");
}
else{
codeChecker = input;
}
}
while((isNaN(Number(input))) || (input.length!=4))
