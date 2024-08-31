document.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const fadeStart = 0; // When the fade starts
  const fadeEnd = window.innerHeight; // When the fade ends

  const scrollPosition = window.scrollY; // Current scroll position

  // Calculate opacity based on scroll position
  let opacity = 1;
  if (scrollPosition > fadeStart && scrollPosition < fadeEnd) {
      opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
  } else if (scrollPosition >= fadeEnd) {
      opacity = 0; // Fully faded out
  }

  navbar.style.opacity = opacity;
});

// Smooth scrolling for internal links
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});
