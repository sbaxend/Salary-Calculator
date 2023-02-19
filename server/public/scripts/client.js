console.log('Scripted Sourced');

let salary=[];
let employeeSalaryData = {};

function submitForm(event) {
    console.log('submit form');
    event.preventDefault();
    let fullName = document.querySelector('#first-input').value + " " + document.querySelector('#last-input').value;
    console.log(fullName);
    let employeeId= document.querySelector('#ID-input').value;
    console.log(employeeId);
    let occupation = document.querySelector('#job-input').value;
    console.log(occupation);
    let yearlyAmount = "$" + document.querySelector('#salary-input').value
    console.log(yearlyAmount)
}