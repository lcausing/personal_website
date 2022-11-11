// Array of courseList is made
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
}
while((isNaN(Number(input))) || (input.length!=4));

//A loop to check the user input code inside the courseList array
let codeChecker = input
let originalLength = courseList.length
let lengthChecker = 0
for (let course of courseList){
    if (course.code.includes(codeChecker) != 0){
        console.log(`Yes I am taking the course: ${course.code} - ${course.name}`);
        break    
    }
    else{
        lengthChecker++;
        if(lengthChecker === courseList.length){
            courseList.push({code:codeChecker, name:null}); 
            console.log("Successfully Added!");
            break
        }
        else{
            continue
        }
    }
}