"use strict";

const lazyImages = document.querySelectorAll("img[data-src]");

const loadMapBlock = document.querySelector("._load-map");

const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];

if (lazyImages.length > 0) {
  lazyImages.forEach((img) => {
    if (img.dataset.src) {
      lazyImagesPositions.push(img.getBoundingClientRect().top + window.pageYOffset);
      lazyScrollCheck();
    }
  });
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
  if (document.querySelectorAll("img[data-src]").length > 0) {
    lazyScrollCheck();
  }
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPositions.findIndex((item) => window.pageYOffset > item - windowHeight);
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute("data-src");
    }
  }
  delete lazyImagesPositions[imgIndex];
}

function getMap() {
  const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + window.pageYOffset;
}
