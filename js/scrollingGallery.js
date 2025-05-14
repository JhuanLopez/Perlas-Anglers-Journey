const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

// Function to scroll to a specific gallery item
function scrollToItem(index) {
  if (index < 0 || index >= galleryItems.length) return;
  galleryItems[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  currentIndex = index;
}

// Handle mouse wheel scrolling
galleryContainer.addEventListener('wheel', (event) => {
  event.preventDefault(); // Prevent default scrolling behavior

  if (event.deltaY > 0) {
    // Scroll down (next item)
    scrollToItem(currentIndex + 1);
  } else {
    // Scroll up (previous item)
    scrollToItem(currentIndex - 1);
  }
});

// Automatically scroll every 5 seconds
setInterval(() => {
  scrollToItem(currentIndex + 1);
}, 5000);