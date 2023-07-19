# Employee Directory - Scrimba Solo Project

This is a Bootcamp exclusive solo project from the [Scrimba Frontend Developer Career Path](https://www.scrimba.com). A companion project to the Tindog project, the Employee Directory is meant to be an implementation of moderately advanced JavaScript techniques covered in Module 7 (Next-level JavaScript) of the FEWD path.


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Upon page visit, see complete directory of employees
- Select a team from the drop-down and view corresponding results
- Search for specific employee names using the search input field

### Screenshot

![](./images/project-ss.jpg.jpg)


### Links

- [Scrima Scrim](https://your-solution-url.com)
- [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid and Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

In addition to a collection of select and input styles heavily adapted from the Stephanie Eckles' guidance over at Modern CSS, I was able to put into practice several JavaScript solutions I hadn't used recently. 

The filterEmployeesByName function is a fairly implementation I've used in similar projects, but I've found it's good to start with fundamental solutions that have worked well in the past and build from there. Utilizing the toLowerCase and trim methods aids in normalizing the text that's being filtered. 

```js
function filterEmployeesByName(e) {
  const inputText = e.target.value.toLowerCase().trim();
  const filteredEmployees = employees.filter(employee => {
    return employee.name.toLowerCase().includes(inputText)
  })
  document.getElementById('team-select').value = 'everyone';
  render(generateEmployeesHtml(filteredEmployees))
}
```

### Useful resources

- [Stephanie Eckles](https://moderncss.dev/custom-select-styles-with-pure-css/) - This great tutorial over at the Modern CSS site by Stephanie Eckles is a fantastic resource and helped greatly in styling the form's select field.


## Author

- Website - [Matt Pahuta](https://www.mattpahuta.com)
- Twitter - [@mattpahuta](https://www.twitter.com/MattPahuta)
