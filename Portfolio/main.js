// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".card img");
var modalImg = document.getElementById("fullImage");
var currentIndex = 0;

images.forEach(function(img, index) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        currentIndex = index;
        document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    }
});

// Close the modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Enable scrolling when modal is closed
}

// Next and previous controls
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Enable scrolling when modal is closed
    }
}
