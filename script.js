// Simple Reveal Animation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + window.innerHeight / 1.3;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Basic Form Submit Handler
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks Arslan! This is where you'd connect your backend or email service.");
});