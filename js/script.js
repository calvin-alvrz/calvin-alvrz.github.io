function adjustBackgroundPosition() {
  var scrolled = window.scrollY;
  document.documentElement.style.backgroundPositionY = -scrolled * 0.5 + 'px';
}

adjustBackgroundPosition();

function toggleActive(id) {
  const button = document.getElementById(id);
  const isActive = button.classList.contains('active');
  const buttons = document.querySelectorAll('.n-button');
  const category = id.split('-')[1]; // Extract category from button id

  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.toggle('active', !isActive);

  // Hide all grid items
  document.querySelectorAll('.cd-grid-item').forEach(item => {
    item.style.display = 'none';
  });

  // Show grid items corresponding to the active category and button
  if (!isActive) {
    // Show grid items corresponding to the active category
    document.querySelectorAll(`[id^=${category}]`).forEach(item => {
      item.closest('.cd-grid-item').style.display = 'block';
    });
  }
}

function mobileToggleActive(id) {
  const button = document.getElementById(id);
  const isActive = button.classList.contains('active');
  const buttons = document.querySelectorAll('.m-n-button');
  const category = id.split('-')[2]; // Extract category from button id

  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.toggle('active', !isActive);

  // Hide all grid items
  document.querySelectorAll('.cd-grid-item').forEach(item => {
    item.style.display = 'none';
  });

  // Show grid items corresponding to the active category and button
  if (!isActive) {
    // Show grid items corresponding to the active category
    document.querySelectorAll(`[id^=${category}]`).forEach(item => {
      item.closest('.cd-grid-item').style.display = 'block';
    });
  }
}

const scrollToTopButton = document.getElementById('scrollToTopButton');
const navigationBar = document.getElementById('navigation');
const mobileNavBar = document.getElementById('m-navigation');
const windowHeight = window.innerHeight;
let navigationThreshold;

// Set navigation threshold based on device
if (window.innerWidth <= 768) {
  navigationThreshold = 360; // Adjust this value for mobile devices
  navigationBar.style.display = 'none'; // Hide navigation bar initially on mobile
} else {
  navigationThreshold = 500; // Adjust this value for desktop devices
  navigationBar.style.display = 'flex'; // Always show navigation bar on desktop
}

// Show scroll to top button after scrolling down a bit
window.addEventListener('scroll', () => {
  if (window.scrollY > 90) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }

  // Show navigation bar on mobile when scrolled down
  if (window.innerWidth <= 768 && window.scrollY > navigationThreshold) {
    mobileNavBar.style.display = 'flex';
  } else if (window.innerWidth <= 768 && window.scrollY <= 380) {
    mobileNavBar.style.display = 'none'; // Hide navigation bar on mobile when scrolled back to top
  }
});

// Smooth scrolling to the top when button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Adjust background position on scroll
window.addEventListener('scroll', adjustBackgroundPosition);

// Debounce scroll event listener
function debounce(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Debounce resize event listener
window.addEventListener('resize', debounce(() => {
  // Recalculate navigation threshold on resize
  if (window.innerWidth <= 768) {
    navigationThreshold = 360; // Adjust this value for mobile devices
    // Hide navigation bar when resized to mobile view
    navigationBar.style.display = 'none';
  } else {
    navigationThreshold = 500; // Adjust this value for desktop devices
    // Always show navigation bar on desktop view
    navigationBar.style.display = 'flex';
  }
}, 250));
