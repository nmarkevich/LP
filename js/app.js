//Global Variables
const sectionItems = document.querySelectorAll("section");
const navBarList = document.querySelector("#navbar__list");

for (const menuItem of sectionItems) {
    //Navbar menu creation
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    listLink.textContent = menuItem.getAttribute("data-nav");
    listLink.setAttribute("href", "#" + menuItem.getAttribute("id"));
    listLink.setAttribute("class", "menu__link");
    listLink.setAttribute("data-nav", menuItem.getAttribute("data-nav"));
    listItem.appendChild(listLink);
    navBarList.appendChild(listItem);
    //Making the sections collapsible
    menuItem.addEventListener("click" , ( ) => {
        menuItem.classList.toggle("collapsible");
    });
}

//Hiding navbar when a user doesn't scroll
window.addEventListener("scroll", () => {
    navBarList.style.display = "block";
    setTimeout(() => {
        navBarList.style.display = "none";
    }, 5000);
});

const myButton = document.getElementById("buttonToTop");

//Navigating a user to the top of the page when 'Go to top' button is clicked.
myButton.addEventListener("click", () => {
    document.documentElement.scrollTo(0,0);
});

window.addEventListener("scroll", () => {
    //Making section active when it's in the viewport
    for (const sectionItem of sectionItems) {
        const datanav = sectionItem.getAttribute("data-nav");
        const menuItem = document.querySelector(".menu__link[data-nav='"+datanav+"']");
        if (sectionItem.getBoundingClientRect().top < window.innerHeight && sectionItem.getBoundingClientRect().top > 0) {
            sectionItem.classList.add("your-active-class");
            menuItem.classList.add("active");
        } else {
            sectionItem.classList.remove("your-active-class");
            menuItem.classList.remove("active");
        }
    }

    if (document.documentElement.scrollTop+window.innerHeight+10 >= document.documentElement.scrollHeight) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
});

