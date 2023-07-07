// *** Employee Class *** //


class Employee {
  constructor(data) {
    Object.assign(this, data)
  }

  getEmployeeHtml() {
    const {name, title, bio, image, social } = this; 

    const socialArray = Object.entries(social);

    


    return `
    <div class="card">
      <div class="employee-details">
        <img src="../images/team-photos/${image}" alt="${name} headshot" class="employee-image">
        <h2 class="employee-name">${name}</h2>
        <p class="employee-title">${title}</p>
        <div class="employee-bio">
          ${bio}
        </div>
      </div>
      <div class="employee-socials">
        <img src="./images/linkedin.png" alt="" class="social-icon">
        <img src="./images/twitter.png" alt="" class="social-icon">
      </div>
    </div>
    `
  }
}