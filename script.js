// script.ts
// Select all experience headers
var experienceHeaders = document.querySelectorAll('.experience-header');
// Add click event listeners to each header
experienceHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
        // Get the target id from the header's data attribute
        var targetId = header.getAttribute('data-target');
        var details = document.getElementById(targetId);
        // Toggle the visibility of the details
        if (details) {
            details.classList.toggle('visible');
        }
    });
});
