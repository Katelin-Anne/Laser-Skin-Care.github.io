function showDetails(treatment) {
  alert(`More information about ${treatment} will be displayed.`);
}
const slides = document.querySelectorAll('.about-slider img');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}, 3000);

document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    alert("Thank you for your booking! We'll be in touch shortly.");
    this.reset(); // Clear the form
  });
  