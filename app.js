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

    // 2. Scroll-in Animation Logic
    // Set up an observer to watch for elements coming into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger the animation
                entry.target.classList.add('show');
                // Stop observing this element since it's already shown
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Find all elements with the class 'hidden' and tell the observer to watch them
    const hiddenElements = document.querySelectorAll('.content-block.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});