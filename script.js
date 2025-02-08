// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select all images inside gallery items
    const galleryItems = document.querySelectorAll(".gallery-item img");

    // Select the lightbox elements
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".close");

    // Function to open the lightbox with the clicked image
    function openLightbox(image) {
        lightboxImg.src = image.src; // Set lightbox image source to clicked image source
        lightboxCaption.textContent = image.alt; // Set caption text to image alt attribute
        lightbox.style.display = "flex"; // Display the lightbox
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.display = "none"; // Hide the lightbox
    }

    // Add click event listener to each gallery image to open the lightbox
    galleryItems.forEach((item) => {
        item.addEventListener("click", () => openLightbox(item));
    });

    // Add click event listener to close button to close the lightbox
    closeBtn.addEventListener("click", closeLightbox);

    // Add click event listener to the lightbox background to close it when clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) { // Close only if clicked outside the image
            closeLightbox();
        }
    });
});
