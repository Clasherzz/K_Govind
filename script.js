document.addEventListener("DOMContentLoaded", function() {
    // Text typing effect
    const introTitle = "Hey, K Govind Here";
    const introSubtitle = "A passionate mobile and backend developer from India. Interested in AI and ML Models.";

    let titleIndex = 0;
    let subtitleIndex = 0;

    const introTitleElement = document.getElementById("intro-title");
    const introSubtitleElement = document.getElementById("intro-subtitle");

    function typeTitle() {
        if (titleIndex < introTitle.length) {
            introTitleElement.textContent += introTitle.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeTitle, 100); // Adjust speed here
        } else {
            setTimeout(() => introSubtitleElement.style.opacity = 1, 500);
            typeSubtitle();
        }
    }

    function typeSubtitle() {
        if (subtitleIndex < introSubtitle.length) {
            introSubtitleElement.textContent += introSubtitle.charAt(subtitleIndex);
            subtitleIndex++;
            setTimeout(typeSubtitle, 50); // Adjust speed here
        }
    }

    // Start typing animation
    introTitleElement.style.opacity = 1;
    typeTitle();

    // Section fade-in effect
    const sections = document.querySelectorAll("section");
    const profileImage = document.querySelector(".profile-image");
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    profileImage.style.opacity = 1;
    profileImage.style.transform = "scale(1)";

    // Smooth scroll to sections with easing
    const links = document.querySelectorAll('nav a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = link.getAttribute('href');
            const targetSection = document.querySelector(targetID);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
