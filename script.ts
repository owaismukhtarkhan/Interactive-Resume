// script.ts

// Select all experience headers
const experienceHeaders = document.querySelectorAll('.experience-header');

// Add click event listeners to each header
experienceHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Get the target id from the header's data attribute
        const targetId = header.getAttribute('data-target');
        const details = document.getElementById(targetId!);

        // Toggle the visibility of the details
        if (details) {
            details.classList.toggle('visible');
        }
    });
});
