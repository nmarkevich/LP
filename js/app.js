const menuItems=document.querySelectorAll('.landing__container');
const navBarList=document.querySelector('#navbar__list');
let i=1;

for (const menuitem of menuItems) {
    let idtext='sectionid'+i;
    menuitem.setAttribute('id', idtext);
    const itemText=menuitem.querySelector('h2').textContent;
    const listItem=document.createElement('li');
    const listlink=document.createElement('a');
    listlink.textContent=itemText;
    listlink.setAttribute('href', '#'+idtext);
    listItem.appendChild(listlink);
    navBarList.appendChild(listItem);
    i++;
    console.log(navBarList);
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


