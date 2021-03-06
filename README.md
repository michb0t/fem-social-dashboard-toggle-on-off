# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project Notes](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Desktop View Light](/final/desktop-view-light.JPG)
![Desktop View Light](/final/desktop-view-dark.JPG)


### Links

- Solution URL: [Github Repo](https://github.com/michb0t/fem-social-dashboard-toggle-on-off)
- Live Site URL: [Live Solution](https://michb0t.github.io/fem-social-dashboard-toggle-on-off/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

## Project notes 

### Light/Dark mode using toggle button 
- How to create the button style https://www.w3schools.com/howto/howto_css_switch.asp
- Start with day class intiatially.  white background, dark text.
- Toggle switch dark mode: gradient background
- toggle switch light mode: gray/white 

### Responsive design
- mobile-view: flex centered column
- desktop-view: flex centered row 
- mobile-view: border bottom line 1px
- desktop-view: no border line below header

### Card component 
- border-top: 3px solid 
- usernames: use span
- text 300% for feature card, small feature card is 200%
- followers: uppercase with letter spacing

### Javascript
- toggle classlist on button click.
- consider "data-theme:dark" attribute
- consider storing user preference for next time they visit. store them into local storage

### Gradient border
- Use the pseudo ::before style to create the top border lime. Border with linear gradients are not supported. 

### Author

- github - [michb0t](https://github.com/michb0t)
- Frontend Mentor - [@michb0t](https://www.frontendmentor.io/profile/michb0t)
- Twitter - [@michbot7](https://www.twitter.com/michbot7)


