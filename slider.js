// slider.js
function showSlides() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");

    function nextSlide() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(nextSlide, 2000); // Change slide every 2 seconds
    }

    nextSlide();
}

document.addEventListener('DOMContentLoaded', showSlides);