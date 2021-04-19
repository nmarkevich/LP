//Global Variables
const menuItems = document.querySelectorAll("section");
const navBarList = document.querySelector("#navbar__list");

for (const menuItem of menuItems) {
    //Navbar menu creation
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    listLink.textContent = menuItem.getAttribute("data-nav");
    listLink.setAttribute("href", "#" + menuItem.getAttribute("id"));
    listLink.setAttribute("class", "menu__link");
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
        menuItem.style.backgroundColor = "gray";
        listItem.setAttribute("class", "active");
    });
}

//Hiding navbar when a user doesn't scroll
window.addEventListener("scroll", () => {
    navBarList.style.display = "block";
    setTimeout(() => {
        navBarList.style.display = "none";
    }, 3000);
});

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



