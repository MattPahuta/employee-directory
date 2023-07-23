# Employee Directory - Scrimba Solo Project

This is a Bootcamp exclusive solo project from the [Scrimba Frontend Developer Career Path](https://www.scrimba.com). A companion project to the Tindog project, the Employee Directory project is intended to see the implementation of the moderately advanced JavaScript techniques covered in Module 7 (Next-level JavaScript) of the FEWD path. My project solution includes the use of several modern JS methods such as filter() and includes(), object destructuring assignment, loops (while, for...of), and various conditionals (if and ternary statements).


## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The project

Users should be able to:

- Upon page visit, see the complete directory of employees
- Select a team from the drop-down and view corresponding results
- Search for specific employee names using the search input field

### Screenshot

![](./images/project-ss.jpg)


### Links

- [Scrima Scrim](https://scrimba.com/scrim/co5524046a9546c7fdce675ee)
- [Live Site](https://employee-directory-phi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid and Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

In addition to a collection of select and input styles heavily adapted from the Stephanie Eckles' guidance over at Modern CSS, I was able to put into practice several JavaScript solutions I hadn't used recently. 

filterEmployeesByName is a straightforward function I've used in similar projects, but I've found it's good to start with fundamental solutions that have worked well in the past and build from there. Utilizing the toLowerCase and trim methods aids in normalizing the text that's being filtered. 

```js
function filterEmployeesByName(e) {
  const inputText = e.target.value.toLowerCase().trim(); // normalize text input with toLowerCase and trim 
  const filteredEmployees = employees.filter(employee =>  // filter directory based on inputText
    employee.name.toLowerCase().includes(inputText)); // return results
  resetTeamSelect(); // reset the team select field for clarity
  render(filteredEmployees); // render the filtered employees
}
```

### Useful resources

- [Stephanie Eckles](https://moderncss.dev/custom-select-styles-with-pure-css/) - This great tutorial over at the Modern CSS site by Stephanie Eckles is a fantastic resource and helped greatly in styling the form's select field.


## Author

- Website - [Matt Pahuta](https://www.mattpahuta.com)
- Twitter - [@mattpahuta](https://www.twitter.com/MattPahuta)
