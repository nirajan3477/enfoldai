// Wait for the HTML document to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if the hamburger elements exist before adding a listener
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle 'active' class on both the button and the menu
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // 2. Scroll-in Animation Logic (DELETED)

});