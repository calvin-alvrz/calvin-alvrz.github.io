function adjustBackgroundPosition() {
  var scrolled = window.scrollY;
  document.documentElement.style.backgroundPositionY = -scrolled * 0.5 + 'px';
}

// Initial adjustment on page load
adjustBackgroundPosition();

// Listen for scroll events
window.addEventListener('scroll', adjustBackgroundPosition);


const scrollToTopButton = document.getElementById('scrollToTopButton');

// Show scroll to top button after scrolling down a bit
window.addEventListener('scroll', () => {
  if (window.scrollY > 90) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Smooth scrolling to the top when button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
    duration: 1000
  });
});
