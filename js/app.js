const menuItems=document.querySelectorAll('section');
const navBarList=document.querySelector('#navbar__list');

for(const menuItem of menuItems){
    const listItem=document.createElement('li');
    const listLink=document.createElement('a');
    listLink.textContent=menuItem.getAttribute('data-nav');
    listLink.setAttribute('href', '#'+menuItem.getAttribute('id'));
    listItem.appendChild(listLink);
    navBarList.appendChild(listItem);
    menuItem.addEventListener("click" , ( ) => {
        menuItem.classList.toggle('your-active-class');
   });
}

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


