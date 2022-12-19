var slideIndex;
var slideIndex2;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0
  }
  setTimeout(showSlides, 5000);
}
showSlides(slideIndex = 0);
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("box-content");
  var dots = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2].style.display = "block";
  dots[slideIndex2].className += " active";
  slideIndex2++;
  if (slideIndex2 > slides.length - 1) {
    slideIndex2 = 0
  }
  setTimeout(showSlides, 5000);
}
showSlides2(slideIndex2 = 0);
function currentSlide(n) {
  showSlides2(slideIndex2 = n);
}

