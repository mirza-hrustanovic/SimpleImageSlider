const images = document.querySelector(".image");
const nextBtn = document.querySelector("#nextBtn");
const previousBtn = document.querySelector("#previousBtn");

nextBtn.addEventListener("click", nextImage);
previousBtn.addEventListener("click", previousImage);

let counter = 0;

function nextImage() {
  if (counter === 4) {
    counter = -1;
  }

  counter++;
  images.style.backgroundImage = `url(img/img${counter}.jpg`;
}
function previousImage() {
  if (counter === 0) {
    counter = 5;
  }

  counter--;
  images.style.backgroundImage = `url(img/img${counter}.jpg`;
}
