// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);

// Run once on page load
revealSections();

// =========================
// DYNAMIC FOOTER YEAR
// =========================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
  footer.innerHTML = `© ${year} Dinesh Sigireddy | All Rights Reserved`;
}
