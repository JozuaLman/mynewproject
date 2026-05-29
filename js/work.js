// ==========================================================================
// 1. GRAPHIC DESIGN: SUB-TAB FILTER LOGIC (Swaps Content Inside Window)
// ==========================================================================
function filterDesign(type, buttonElement) {
    // Highlight the active button states cleanly
    const buttons = document.querySelectorAll(".work-filters .filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    buttonElement.classList.add("active");

    // Grab our core DOM layout components
    const track = document.getElementById("carousel-track");
    const placeholder = document.getElementById("carousel-placeholder");
    const title = document.getElementById("placeholder-title");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Check what button was clicked
    if (type === 'design-posters') {
        // Show your layout image slider tracks & arrow controls
        track.style.display = "flex";
        placeholder.style.display = "none";
        leftArrow.style.display = "block";
        rightArrow.style.display = "block";
    } else {
        // Hide slider tracks & navigation arrow controls
        track.style.display = "none";
        placeholder.style.display = "flex";
        leftArrow.style.display = "none";
        rightArrow.style.display = "none";

        // Dynamically overwrite text headers on the fly
        if (type === 'design-cards') {
            title.textContent = "business cards";
        } else if (type === 'design-others') {
            title.textContent = "other creations";
        }
    }
}

// ==========================================================================
// 2. GRAPHIC DESIGN: HORIZONTAL CAROUSEL MOTION (Image Sliding)
// ==========================================================================
let currentSlide = 0;

function moveSlide(direction) {
    const track = document.getElementById("carousel-track");
    const slides = document.querySelectorAll(".carousel-img");
    const totalSlides = slides.length;

    // Safety fallback check
    if (!track || totalSlides === 0) return;

    currentSlide += direction;

    // Boundary Looping Rules (Keeps carousel rolling seamlessly)
    if (currentSlide >= totalSlides) { currentSlide = 0; }
    if (currentSlide < 0) { currentSlide = totalSlides - 1; }

    // Physically shift the images along the X-axis line layout track
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Portfolio Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterCategory = button.getAttribute('data-filter');
            // Passes the category. Your function uses 'this', so we pass the button element too if needed!
            filterDesign(filterCategory, button); 
        });
    });

    // 2. Handle Carousel Arrows
    const carouselArrows = document.querySelectorAll('.carousel-arrow');
    carouselArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const direction = parseInt(arrow.getAttribute('data-dir'));
            moveSlide(direction); // Calls your existing function cleanly!
        });
    });
});