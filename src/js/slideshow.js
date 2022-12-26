var slideIndex = 0;
showSlides();
function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.querySelectorAll(".dot");
  dots[0].classList.add('active');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  for (let i = 0; i < dots.length; i++) {
    if (i === slideIndex - 1) {
      dots[i].classList.add('active');
    } else {
      dots[i].classList.remove('active');
    }
  }
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}