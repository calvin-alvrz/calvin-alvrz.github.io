function adjustBackgroundPosition() {
  var scrolled = window.scrollY;
  document.documentElement.style.backgroundPositionY = -scrolled * 0.5 + 'px';
}

// Initial adjustment on page load
adjustBackgroundPosition();

// Listen for scroll events
window.addEventListener('scroll', adjustBackgroundPosition);

const scrollToTopButton = document.getElementById('scrollToTopButton');
const navigationBar = document.getElementById('navigation');
const windowHeight = window.innerHeight;

const navigationThreshold = windowHeight * 0.7;

// Show scroll to top button after scrolling down a bit
window.addEventListener('scroll', () => {
  if (window.scrollY > 90) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }

  if (window.scrollY > navigationThreshold) {
    navigationBar.style.display = 'flex';
  } else {
    navigationBar.style.display = 'none';
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
