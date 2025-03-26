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




document.addEventListener("DOMContentLoaded", function () {
    let result = "";
    const _pathname = window.location.pathname;  

    const langLinks = document.querySelectorAll("a[data-lang]");  

    langLinks.forEach(link => {
        const lang = link.dataset.lang;  // Get data-lang value

        // Break the pathname into parts, removing empty values
        const parts = _pathname.split('/').filter(part => part !== "");

        // Check if the current language exists in the path
        const currentLangIndex = (parts[0] === "en" || parts[0] === "de") ? 0 : -1;

        if (currentLangIndex !== -1) {
            result = parts.slice(1).join('/');  // Get remaining part of the URL
        } else {
            result = parts.join('/');  // If no language, take full path
        }


        // Construct the new URL for language switch
        if (lang === "de") {
            link.href = `${window.location.origin}/de/${result}`;
        } else if (lang === "en") {
            link.href = `${window.location.origin}/${result}`;
        } 
    });
});
