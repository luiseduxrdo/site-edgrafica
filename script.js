document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('nav-active');
            menuToggle.textContent = isActive ? 'STATUS: CLOSE' : 'STATUS: MENU';
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                menuToggle.textContent = 'STATUS: MENU';
                menuToggle.classList.remove('active');
            });
        });
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Intersection Observer for Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .section-title, .hero-title, .about-text');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });

    // --- Dynamic "Job Number" in Hero ---
    const jobElement = document.querySelector('.hero-meta span:last-child');
    if (jobElement) {
        const randomJob = Math.floor(Math.random() * 900) + 100;
        jobElement.textContent = `JOB: #${randomJob}`;
    }
});
