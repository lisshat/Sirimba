// JavaScript code can be added here for interactivity as needed.
// JavaScript code to add the fade-in effect

document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".fade-in");
    
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScroll() {
        paragraphs.forEach((paragraph, index) => {
            if (isInViewport(paragraph) && !paragraph.classList.contains("fade-in-visible")) {
                paragraph.style.animation = `fadeIn 1.5s ease-in-out ${index * 0.5}s forwards`;
                paragraph.classList.add("fade-in-visible");
            }
        });
    }

    // Initial check when the page loads
    handleScroll();

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('nav');
    nav.classList.add('fade-in-nav');
});

