document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const sliderBtns = document.querySelectorAll(".slider-btn");
  const slideCount = slides.length;
  const slideWidth = slides[0].offsetWidth;

  let currentIndex = 0;

  // Function to move the slider to a specific index
  function goToSlide(index) {
    if (index < 0 || index >= slideCount) return;
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
  }

  // Event listener for slider buttons
  sliderBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  // Automatic slider
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  }, 3000);
});
