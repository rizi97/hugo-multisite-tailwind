let menu = document.getElementById("toggle-menu");
let menuBtn = document.getElementById("mobile-menu");

// Toggle the mobile menu open/close on button click
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('menu-active');
    menu.classList.toggle('active');
});

// Close the mobile menu when any link is clicked
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Close the menu when any link is clicked
        menu.classList.remove('active');
        menuBtn.classList.remove('menu-active');
    });
});



// Get the button and menu elements
const languageBtn = document.getElementById("language-btn");
const languageMenu = document.getElementById("language-menu");


// Close the menu if the user clicks anywhere outside the button or menu
document.addEventListener("click", (e) => {
    // Check if the click was outside the button and menu
    if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
        languageMenu.classList.add("hidden");
    }
});


function toggleDropdown() {
    document.getElementById("language-menu").classList.toggle("hidden");
}


