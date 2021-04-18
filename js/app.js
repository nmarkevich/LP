//Global Variables
const menuItems = document.querySelectorAll("section");
const navBarList = document.querySelector("#navbar__list");

//Navbar menu creation
for (const menuItem of menuItems) {
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    listLink.textContent = menuItem.getAttribute("data-nav");
    listLink.setAttribute("href", "#" + menuItem.getAttribute("id"));
    listItem.appendChild(listLink);
    navBarList.appendChild(listItem);
    //Making the sections collapsible
    menuItem.addEventListener("click" , ( ) => {
        menuItem.classList.toggle("your-active-class");
        menuItem.style.backgroundColor = "gray";
        listItem.setAttribute("class", "active");
    });
    //Expand the section when a user navigates to the section through the menu
    listLink.addEventListener("click" , ( ) => {
        menuItem.setAttribute("class","your-active-class");
    });
    //Hiding navbar when a user doesn't scroll
    window.addEventListener("scroll", () => {
        navBarList.style.display = "block";
        setTimeout(() => {
            navBarList.style.display = "none";
        }, 3000);
    });
}

const myButton = document.getElementById("buttonToTop");

//Showing 'Go to top' button when a user scrolls to the fold of the page
window.onscroll = () => {
    if (document.documentElement.scrollTop+window.innerHeight+10 >= document.documentElement.scrollHeight) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

//Navigating a user to the top of the page when 'Go to top' button is clicked.
myButton.addEventListener("click", topFunction);

function topFunction () {
    document.documentElement.scrollTo(0,0);
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



