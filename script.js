const brightnessSlide = document.querySelector(".brightness");
const contrastSlide = document.querySelector(".contrast");
const hueSlide = document.querySelector(".hue");
const image = document.querySelector(".image img");

let brightness = 100;
let contrast = 100;
let hue = 0;

brightnessSlide.addEventListener("input", (e) => {
  brightness = e.target.value;
  image.style.filter = `brightness(${brightness}%)`;
});

contrastSlide.addEventListener("input", (e) => {
  contrast = e.target.value;
  image.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
});

hueSlide.addEventListener("input", (e) => {
  hue = e.target.value;
  image.style.filter = `brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg)`;
});
