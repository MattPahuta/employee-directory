import employees from "./employees.js"; // import array of employees

loadEventListeners();

function loadEventListeners() {
  document.getElementById('team-select').addEventListener('change', getEmployeesByTeam);
  document.getElementById('name-search').addEventListener('input', filterEmployeesByName);
}

// filter employees by team
function getEmployeesByTeam(e) {
  let selectedTeam = e.target.value // set selectedTeam to value of selected option
  let selectedEmployees; // initialize selectedEmployees 
  if (selectedTeam === 'everyone') {
    selectedEmployees = employees; // get all employees if everyone is selected
  } else { // otherwise, filter based on team name
    selectedEmployees = employees.filter((employee) => employee.team === selectedTeam);
  }
  render(generateEmployeesHtml(selectedEmployees)); // call render to display results
}

// Filter employees by name
function filterEmployeesByName(e) {
  const inputText = e.target.value.toLowerCase();
  const filteredEmployees = employees.filter(employee => {
    return employee.name.toLowerCase().includes(inputText)
  })
  document.getElementById('team-select').value = 'everyone'; // reset team select to 'everyone'
  render(generateEmployeesHtml(filteredEmployees))

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

render(generateEmployeesHtml(employees)); // render everyone by default
