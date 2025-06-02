  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const slideInterval = 6500; // Time in milliseconds for each slide to display (5 seconds)

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initial display of the first slide
  showSlide(currentSlide);

  // Start the slideshow
  setInterval(nextSlide, slideInterval);
