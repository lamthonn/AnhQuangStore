//slider trang home
let vi_tri = 0;
const slides = document.getElementsByClassName('slider_item');

function Hien_thi_slide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${vi_tri * 100}%)`;
  }
}

function next() {
  if (vi_tri < slides.length - 1) {
    vi_tri++;
  } else {
    vi_tri = 0;
  }
  Hien_thi_slide();
}

function prev() {
  if (vi_tri > 0) {
    vi_tri--;
  } else {
    vi_tri = slides.length - 1;
  }
  Hien_thi_slide();
}

setInterval(next,3500);

Hien_thi_slide();