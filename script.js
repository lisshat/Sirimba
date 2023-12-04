// JavaScript code can be added here for interactivity as needed.
// JavaScript code to add the fade-in effect

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const navButtons = document.querySelectorAll(".nav-button");
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${slideIndex * 100}%)`;
        });
        navButtons.forEach((button, index) => {
            button.classList.toggle("active", index === slideIndex);
        });
    }

    function navigateToSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = 0;
        } else if (slideIndex >= slides.length) {
            slideIndex = slides.length - 1;
        }
        currentSlide = slideIndex;
        showSlide(currentSlide);
    }

    function handleNavButtonClick(event) {
        const targetSlide = parseInt(event.target.getAttribute("data-slide"));
        if (!isNaN(targetSlide)) {
            navigateToSlide(targetSlide);
        }
    }

    function handleKeyboardNavigation(event) {
        if (event.key === "ArrowLeft") {
            navigateToSlide(currentSlide - 1);
        } else if (event.key === "ArrowRight") {
            navigateToSlide(currentSlide + 1);
        }
    }

    showSlide(currentSlide);

    // Attach event listeners
    navButtons.forEach((button) => {
        button.addEventListener("click", handleNavButtonClick);
    });

    document.addEventListener("keydown", handleKeyboardNavigation);
});
