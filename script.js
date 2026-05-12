const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const reveals = document.querySelectorAll('.reveal');

function revealSections() {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealSections);
revealSections();

const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent successfully!');
  contactForm.reset();
});