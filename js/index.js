import employees from "./employees.js"; // import array of employees

loadEventListeners();

function loadEventListeners() {
  document.getElementById('team-select').addEventListener('change', getEmployeesByTeam);
  document.getElementById('name-search').addEventListener('input', filterEmployeesByName);
}

// Get employees by team - v2
function getEmployeesByTeam(e) {
  const selectedTeam = e.target.value;

  const selectedEmployees = selectedTeam === 'everyone' 
    ? employees 
    : employees.filter(employee => employee.team === selectedTeam);
  resetNameSearchInput();
  render(selectedEmployees);
  }
  
// Filter employees by team - v2
function filterEmployeesByName(e) {
  const inputText = e.target.value.toLowerCase().trim(); // normalize text input with toLowerCase and trim 
  const filteredEmployees = employees.filter(employee =>  // filter directory based on inputText
  employee.name.toLowerCase().includes(inputText)
  );
  resetTeamSelect();
  render(filteredEmployees);
}

function resetTeamSelect() {
  document.getElementById('team-select').value = 'everyone';
}
  
function resetNameSearchInput() {    
  document.getElementById('name-search').value = '';
}

function generateSocialsHtml(social) {
  let socialsHtml = '';
  if (social.hasOwnProperty('twitter')) { // check for twitter
    socialsHtml += `<img src="./images/twitter.png" alt="Twitter logo" class="social-icon">`
  }
  if (social.hasOwnProperty('linkedin')) { // check for linkedin
    socialsHtml += `<img src="./images/linkedin.png" alt="LinkedIn logo" class="social-icon">`
  }
  return socialsHtml;
}

// render v2 - more performative than previous generateEmployeesHtml function
function render(employeesData) {
  const resultsSection = document.getElementById('results');

  while (resultsSection.firstChild) { // clear existing results content with while loop
    resultsSection.removeChild(resultsSection.firstChild);
  }

  // create and append employee cards to results section
  for (const employee of employeesData) { // *** make a forEach loop?
    const { name, title, bio, image, social } = employee;
    const socialsHtml = generateSocialsHtml(social);

    // build employee card
    const card = document.createElement('div');
    card.classList.add('card');

    // build employee image
    const imageEl = document.createElement('img');
    imageEl.src = `./images/team-photos/${image}`;
    imageEl.alt = `${name} headshot`;
    imageEl.classList.add('employee-image');
    card.appendChild(imageEl);

    const nameEl = document.createElement('h2');
    nameEl.classList.add('employee-name');
    nameEl.textContent = name;
    card.appendChild(nameEl);

    const titleEl = document.createElement('p');
    titleEl.classList.add('employee-title');
    titleEl.textContent = title;
    card.appendChild(titleEl);

    const bioEl = document.createElement('div');
    bioEl.classList.add('employee-bio');
    bioEl.innerHTML = bio;
    card.appendChild(bioEl);

    const socialsEl = document.createElement('div');
    socialsEl.classList.add('employee-socials');
    socialsEl.innerHTML = socialsHtml;
    card.appendChild(socialsEl);

    resultsSection.appendChild(card);

  }
}

render(employees)
