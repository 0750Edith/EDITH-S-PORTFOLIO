const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
// ===============================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});



// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you for contacting me! I will get back to you soon.");

    contactForm.reset();
});
// ===============================
// CHANGING HERO TEXT
// ===============================

const changingText = document.getElementById("changing-text");

const roles = [
    "Software Engineering Student",
    "Aspiring Developer",
    "Entrepreneur"
];

let roleIndex = 0;

setInterval(function () {
    changingText.style.opacity = "0";
    changingText.style.transform = "translateY(10px)";

    setTimeout(function () {
        roleIndex = (roleIndex + 1) % roles.length;
        changingText.textContent = roles[roleIndex];

        changingText.style.opacity = "1";
        changingText.style.transform = "translateY(0)";
    }, 400);

}, 2500);

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});