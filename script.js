// script.ts
// Smooth scroll for navigation links
var navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        var targetSection = document.querySelector(link.getAttribute("href"));
        targetSection === null || targetSection === void 0 ? void 0 : targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
// Optionally, you can add more interactive behaviors here.
