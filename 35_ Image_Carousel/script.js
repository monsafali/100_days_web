let currentIndex = 0;
let images = document.querySelectorAll("#imgs img");
let totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

// Automatically change to the next image every second
setInterval(nextImage, 3000);

// Initial display of the first image
showImage(currentIndex);

