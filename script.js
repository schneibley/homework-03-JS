const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  const employees = [];
  let addMore = true;

  while (addMore) {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("enter last name:");
    const salary = parseFloat(prompt("enter salary:"));

    if (firstName && lastName && !isNaN(salary)) {
      employees.push({firstName, lastName, salary });
    } else {
      alert("Invalid input.  Please enter valid information.");
    continue;
  }
  const choice = prompt("Do you want to add another employee? (yes/no");
  addMore = choice === "yes";
}
return employees;
}

const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, curr) => acc + curr.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: ${averageSalary.toFixed(2)}`);
}

const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log("Random Employee:", randomEmployee);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
