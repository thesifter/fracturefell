// Function to open the modal with the full-size image and caption
function openImageModal(imageSrc, captionText) {
  const modal = document.getElementById('loreModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('modalCaption');

  // Start by hiding the image
  modalImg.style.display = 'none'; // Hide image while it's loading

  // Set the caption
  caption.textContent = captionText || '[No caption]';

  // Show the modal by removing the 'hidden' class
  modal.classList.remove('hidden');

  // Lock the page scrolling
  document.body.style.overflow = 'hidden';

  // Preload the image and display it once it's ready
  const preload = new Image();
  
  preload.onload = () => {
    modalImg.src = preload.src; // Set the image source to the fully loaded image
    modalImg.style.display = 'block'; // Show the image once it's loaded
  };

  preload.onerror = () => {
    caption.textContent = '⚠️ Image not available.'; // Show error message in the modal
    modalImg.style.display = 'none'; // Hide image if there's an error
  };

  preload.src = imageSrc;  // Start loading the image
}
