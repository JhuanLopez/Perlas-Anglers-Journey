document.addEventListener('DOMContentLoaded', () => {
  const meetDevs = document.getElementById('meet-devs');

  const handleScroll = () => {
    const rect = meetDevs.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the #meet-devs element is in the viewport
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      meetDevs.classList.add('fade-in');
      meetDevs.classList.remove('fade-out');
    } else {
      meetDevs.classList.add('fade-out');
      meetDevs.classList.remove('fade-in');
    }
  };

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Trigger the scroll handler on page load to set the initial state
  handleScroll();
});