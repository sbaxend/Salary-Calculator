console.log('Scripted Sourced');

let totalForMonth = 0;
let salaries=[];
let index = 0;
function submitForm(event) {
    console.log('submit form');
    event.preventDefault();
    let fullName = document.querySelector('#first-input').value + " " + document.querySelector('#last-input').value;
    //console.log(fullName);
    let employeeId= document.querySelector('#ID-input').value;
    //console.log(employeeId);
    let occupation = document.querySelector('#job-input').value;
    //console.log(occupation);
    let yearlyAmount = document.querySelector('#salary-input').value;
   // console.log(yearlyAmount)
    let moneyTable = document.querySelector('#employee-money-info');
    index ++;
    moneyTable.innerHTML += `
    <tr id="newly-added">
    <th>${index}</th>
    <th>${fullName}</th>
    <th>${employeeId}</th>
    <th>${occupation}</th>
    <th>$${yearlyAmount}</th>
    <th><button onClick="removeRow(event)">Delete</button></th>
    </tr>
    `
    let employeeSalaryData = {
        Name: fullName,
        ID: employeeId,
        Title: occupation,
        Salary: yearlyAmount,
        Monthly: yearlyAmount / 12, 
    };
    salaries.push(employeeSalaryData);
    console.table(salaries);
    monthlyCost()
    
}
function removeRow (event){
    let row = event.target.parentNode.parentNode;
    //parentNode.parentNode is used to get the parent of the parent node. It is commonly used when you want to access a 
    //higher-level element in the DOM tree, such as a row or a table, when you only have a reference to an element inside 
    //that higher-level element.
    // in this case the parent node is <th> then parentNode of that is <tr>
  row.parentNode.removeChild(row);
}

function monthlyCost(){
    for (let i = 0; i < salaries.length; i++){
        totalForMonth += salaries[i].Monthly
    }
    console.log("The Total Monthly Cost:", totalForMonth)
    let thirtyDay = document.querySelector('#cost-for-the-month');
    thirtyDay.innerHTML = `
    <h1>Total Monthly Cost:</h1><br />
    <h2>${totalForMonth}</h2>
    `

}