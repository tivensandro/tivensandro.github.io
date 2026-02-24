// This creates a tool that watches elements on the screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // If the element is visible in the viewport...
        if (entry.isIntersecting) {
            // ...add the 'show' class to trigger the CSS animation
            entry.target.classList.add('show');
        }
    });
});

// Grab all elements that have the class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Tell the observer to watch each of those elements
hiddenElements.forEach((el) => observer.observe(el));