// script.ts

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetSection = document.querySelector((link as HTMLAnchorElement).getAttribute("href")!);
        targetSection?.scrollIntoView({ behavior: "smooth" });
    });
});

// Optionally, you can add more interactive behaviors here.
