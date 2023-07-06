console.log('Scripts connected!') // debug - remove before production

// Get the value of the select option 
const departmentSelect = document.getElementById('department-select');

departmentSelect.addEventListener('change', (e) => {
  console.log('selected: ', e.target.value)
  console.log(getEmployeesByDepartment(e.target.value));

})

// filter employees by department
function getEmployeesByDepartment(department) {
  return employees.filter((employee) => employee.team === department);
}

// build employee card html
function generateEmployeeCardHtml() {



}


// Test data
const employees = [
  {
    name: "Jeremy Durant",
    title: "CEO",
    team: "leadership",
    bio: "<p>Jeremy developed an interest in computers at an early age. He graduated with a computer science and electrical engineering degree.</p> <p>He was an early founder of successful companies like BlueSpace, Eazybit, and Drifly.</p>",
    image: "jeremy.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Juanita Gonzalez",
    title: "COO",
    team: "leadership",
    bio: "<p>Juanita grew up in Mexico. She later moved to Canada to get her bachelors at McGill and masters in Business Administration at the University of Toronto.</p> <p>Juanita loves her two cats.</p>",
    image: "juanita.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Michael Stromburger",
    title: "Sales Director",
    team: "sales",
    bio: "<p>Michael is has been working in sales for the last 25 years.</p> <p>He’s sold insurance, cars, software and much more.</p> <p>He loves to meet new customers.</p>",
    image: "michael.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Muhammad Adel",
    title: "Customer Success",
    team: "customer service",
    bio: "<p>Muhammad Adel has worked in customer service for the last 30 years.</p> <p>It was his first job after high school and he’s still working in customer service all these later!</p>",
    image: "muhammad.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Alexander Smith",
    title: "Customer Success",
    team: "customer service",
    bio: "<p>Alexander finished his bachelors from the University of Pennsylvania in Economics.</p> <p>Alexander loves skateboarding and snowboarding.</p>",
    image: "alexander.jpg",
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Liu Zhang",
    title: "Software Engineer",
    team: "product",
    bio: "<p>Liu grew up in New York. She later moved to Miami to get her bachelors at FIU and masters in Business Administration at the University of Miami.</p> <p>Liu loves her two pugs.</p>",
    image: "liu.jpg",
    social: {
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Jessica Albertson",
    title: "Designer",
    team: "product",
    bio: "<p>Jessica did a double major in Art and Industrial Design at Carnegie Mellon University.</p> <p>She currently lives in Philadelphia  with her husband Sej and two kids.</p>",
    image: "jessica.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },

]