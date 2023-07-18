console.log('Scripts connected!') // debug - remove before production

import employees from "./employees.js"; // import array of employees

// Get the value of the select option 
const departmentSelect = document.getElementById('department-select');
const nameInput = document.getElementById('name-search');

departmentSelect.addEventListener('change', (e) => {
  // console.log('selected: ', e.target.value)
  getEmployeesByTeam(e.target.value); // get employees based on team (string)

})

nameInput.addEventListener('input', filterEmployeesByName);



// filter employees by department
function getEmployeesByTeam(department) { // name of team (string)
  // console.log('All employees: ', employees)
  let selectedEmployees;
  if (department === 'everyone') {
    selectedEmployees = employees;
  } else {
    selectedEmployees = employees.filter((employee) => employee.team === department);
    // console.log(generateEmployeesHtml(selectedEmployees))
  }

  render(generateEmployeesHtml(selectedEmployees)); // call render to display results

}

// Filter employees by name
function filterEmployeesByName(e) {

  const text = e.target.value.toLowerCase();
  console.log(text)

  const filteredEmployees = employees.filter(employee => {
    return employee.name.toLowerCase().includes(text)
  })

  render(generateEmployeesHtml(filteredEmployees))

  console.log(filteredEmployees)
  // return filteredEmployees;

}

// build employee card html
function generateEmployeesHtml(data) {

  let employeesHtml = '';

  // loop over each employee from the filtered data
  for (let employee of data) {
    const { name, title, bio, image, social } = employee;

    // ToDo: a tags and dynamic href's to social media generation
    let socialsHtml = ''
    if (social.hasOwnProperty('twitter')) {
      socialsHtml += `
        <img src="./images/twitter.png" alt="Twitter logo" class="social-icon">
        `
    }
    if (social.hasOwnProperty('linkedin')) {
      socialsHtml += `
        <img src="./images/linkedin.png" alt="LinkedIn logo" class="social-icon">
        `
    }

    const employeeCardHtml = `
      <div class="card">
        <img src="./images/team-photos/${image}" alt="${name} headshot" class="employee-image">
        <h2 class="employee-name">${name}</h2>
        <p class="employee-title">${title}</p>
        <div class="employee-bio">
          ${bio}
        </div>
        <div class="employee-socials">
          ${socialsHtml}
        </div>
      </div>
      `
    employeesHtml += employeeCardHtml;
  }

  return employeesHtml;
}


// render the selected employees to the page
function render(employeesHtml) {
  document.getElementById('results').innerHTML = employeesHtml;
}


getEmployeesByTeam('everyone'); // get everyone by default
