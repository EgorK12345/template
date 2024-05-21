var slides = document.querySelectorAll(".slider .slide"),
  currentSlide = 0,
  slideInterval = setInterval(showSlide,5000);


function showSlide(slideNum) {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}
