const header = document.getElementById('header');

// Function to add/remove the 'scrolled' class when scrolling
window.onscroll = function() {
    if (window.scrollY > 50) { // If the scroll is more than 50px
        header.classList.add('scrolled'); // Add 'scrolled' class
    } else {
        header.classList.remove('scrolled'); // Remove 'scrolled' class
    }
};