console.log('Scripted Sourced');

// let employeeSalaryData = {
//     Name: "",
//     Identification: "",
//     Title: "",
//     Salary: "",
//     Monthly: "",
// };

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
    <th><button onClick="removeRow(event)">Delete</button><button onClick="editRow(event)">Edit</button></th>
    
    </tr>
    `
    let employeeSalaryData = {
        Name: fullName,
        Identification: employeeId,
        Title: occupation,
        Salary: yearlyAmount,
        Monthly: yearlyAmount / 12
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
  // I feel like the remove function should subtract from the total monthly cost but i cant figure it out.
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
    if (totalForMonth > 20000) {
        thirtyDay.style.color = "white"
        thirtyDay.style.backgroundColor = "red";
        thirtyDay.innerHTML += `
            <div>YOU ARE OVER THE LIMIT</div>
        `
      } else {
        thirtyDay.style.backgroundColor = "";
        thirtyDay.style.color = "";
      }
}
function editRow(event){
    //this grabs the row 
    let row = event.target.parentNode.parentNode;
    //this grabs the table headers within the table rows
    let cells = row.getElementsByTagName('th');
    //declaring a variable for each <th> the innerHTML. i called cells cause it reminded me of a spreadsheet
    //each <th> has an index number
    //
    let name = cells[1].innerHTML;
    let id = cells[2].innerHTML;
    let title = cells[3].innerHTML;
    let salary = cells[4].innerHTML;
    //so when the edit button is clicked. these table headers turn into input fields to correct the data but keeping the value of the
    //changed input object field
    cells[1].innerHTML = `<input type="text" value="${name}">`;
    cells[2].innerHTML = `<input type="text" value="${id}">`;
    cells[3].innerHTML = `<input type="text" value="${title}">`;
    cells[4].innerHTML = `<input type="text" value="${salary}">`;
    //this changes the button tag to read "save" since the button causes the event
    event.target.innerHTML = "Save";
    //this changes the function of the button to saveRow function
    // i had to look this part up
    event.target.onclick = function() { saveRow(event); }
};
function saveRow(event) {
    //here i did something similar to the editRow function
    //i delcalred row as the parent parents which the the <tr>
    let row = event.target.parentNode.parentNode;
    //
    let cells = row.getElementsByTagName('th');
    // here are variables decalred to grab each <th> by index then grabbing the input elements value inedex number is 0 
    //since there is only one input element
    let newName = cells[1].getElementsByTagName('input')[0].value;
    let newId = cells[2].getElementsByTagName('input')[0].value;
    let newTitle = cells[3].getElementsByTagName('input')[0].value;
    let newSalary = cells[4].getElementsByTagName('input')[0].value;
    //next this changes the object value to the new value 
    cells[1].innerHTML = newName;
    cells[2].innerHTML = newId;
    cells[3].innerHTML = newTitle;
    cells[4].innerHTML = newSalary;

    // newName = employeeSalaryData.Name;
    // newId = employeeSalaryData.Identification;
    // newTitle = employeeSalaryData.Title
    // newSalary = employeeSalaryData.Salary
    // console.log(salaries)
    //this changes the button to read edit when you click save
    event.target.innerHTML = "Edit";
    //this changes the function of the button back to editRow
    event.target.onclick = function() { editRow(event); };
    //monthlyCost();
    
}
