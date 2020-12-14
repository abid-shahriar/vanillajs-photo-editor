const image = document.querySelector(".image img");
const slides = document.querySelectorAll(".slide");

let brightness = 100;
let contrast = 100;
let hue = 0;

slides.forEach((slide) => {
  slide.addEventListener("input", (e) => {
    const slideValue = e.target.value;

    switch (e.target.classList[0]) {
      case "brightness":
        brightness = slideValue;

      case "contrast":
        contrast = slideValue;

      case "hue":
        hue = slideValue;

      default:
        null;
    }

    image.style.filter = `brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg)`;
  });
});

// brightnessSlide.addEventListener("input", (e) => {
//   brightness = e.target.value;
//   image.style.filter = `brightness(${brightness}%)`;
// });

// contrastSlide.addEventListener("input", (e) => {
//   contrast = e.target.value;
//   image.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
// });

// hueSlide.addEventListener("input", (e) => {
//   hue = e.target.value;
//   image.style.filter = `brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg)`;
// });

// if (e.target.classList.contains("brightness")) {
//   brightness = e.target.value;
// } else if (e.target.classList.contains("contrast")) {
//   contrast = e.target.value;
// } else if (e.target.classList.contains("hue")) {
//   hue = e.target.value;
// }
