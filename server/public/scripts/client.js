console.log('Scripted Sourced');

let salary=[];
let employeeSalaryData = {};
let index = 0;
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
    let moneyTable = document.querySelector('#employee-money-info')
    index ++;
    moneyTable.innerHTML += `
   <tr id="newly-added">
    <th>${index}</th>
    <th>${fullName}</th>
    <th>${employeeId}</th>
    <th>${occupation}</th>
    <th>${yearlyAmount}</th>
    <th><button onClick="removeRow(event)">Delete</button></th>
  </tr>
    
    `
}
function removeRow (event){
    let employeeData  = document.querySelector('#newly-added')
    employeeData.remove()
}