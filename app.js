//#region Image Upload

let imageUpload = document.querySelector(".imgUpload");
let image = document.querySelector(".image");

function uploadImage() {
  let [file] = imageUpload.files;
  if (file) {
    image.src = URL.createObjectURL(file);
  }

  reset();
}

imageUpload.addEventListener("change", uploadImage);

//#endregion

//#region Controls
let brightness = document.querySelector(".brightness-slider");
let contrast = document.querySelector(".contrast-slider");
let saturation = document.querySelector(".saturation-slider");
let hueRotate = document.querySelector(".hueRotate-slider");
let grayScale = document.querySelector(".grayScale-slider");
let invert = document.querySelector(".invert-slider");
let sepia = document.querySelector(".sepia-slider");
let blur = document.querySelector(".blur-slider");

function handleControlChange() {
  image.style.filter = `
  brightness(${brightness.value}%) 
  contrast(${contrast.value}%) 
  saturate(${saturation.value}%)
  hue-rotate(${hueRotate.value}deg) 
  grayscale(${grayScale.value}%) 
  invert(${invert.value}%) 
  sepia(${sepia.value}%)
  blur(${blur.value}px)`;
}

function reset() {
  brightness.value = 100;
  contrast.value = 100;
  saturation.value = 100;
  hueRotate.value = 0;
  grayScale.value = 0;
  invert.value = 0;
  sepia.value = 0;
  blur.value = 0;
  handleControlChange();
}

brightness.addEventListener("input", handleControlChange);
contrast.addEventListener("input", handleControlChange);
saturation.addEventListener("input", handleControlChange);
hueRotate.addEventListener("input", handleControlChange);
grayScale.addEventListener("input", handleControlChange);
invert.addEventListener("input", handleControlChange);
sepia.addEventListener("input", handleControlChange);
blur.addEventListener("input", handleControlChange);

handleControlChange();
reset();
//#endregion

//#region Download Image

function downloadImage() {
  domtoimage.toBlob(image).then(function (blob) {
    window.saveAs(blob, "image.png");
  });
}

//#endregion

//#region User Refresh

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});

//#endregion
