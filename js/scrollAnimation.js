document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero .hero-content');
  const heroButtons = document.querySelector('.hero .buttons');
  const heroImage = document.querySelector('.hero-section .img img');

  const handleScroll = () => {
    const rectContent = heroContent.getBoundingClientRect();
    const rectButtons = heroButtons.getBoundingClientRect();
    const rectImage = heroImage.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if hero content is in the viewport
    if (rectContent.top >= 0 && rectContent.bottom <= windowHeight) {
      heroContent.classList.add('fade-in');
      heroContent.classList.remove('fade-out');
    } else {
      heroContent.classList.add('fade-out');
      heroContent.classList.remove('fade-in');
    }

    // Check if hero buttons are in the viewport
    if (rectButtons.top >= 0 && rectButtons.bottom <= windowHeight) {
      heroButtons.classList.add('fade-in');
      heroButtons.classList.remove('fade-out');
    } else {
      heroButtons.classList.add('fade-out');
      heroButtons.classList.remove('fade-in');
    }

    // Check if hero image is in the viewport
    if (rectImage.top >= 0 && rectImage.bottom <= windowHeight) {
      heroImage.classList.add('fade-in');
      heroImage.classList.remove('fade-out');
    } else {
      heroImage.classList.add('fade-out');
      heroImage.classList.remove('fade-in');
    }
  };

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Trigger the scroll handler on page load to set the initial state
  handleScroll();
});