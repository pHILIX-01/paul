document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars on scroll
const skillsSection = document.querySelector('.skills');
const skillLevels = document.querySelectorAll('.skill-level');

const animateSkills = () => {
    const triggerBottom = window.innerHeight * 0.85;
    const sectionTop = skillsSection.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
        skillLevels.forEach(skill => {
            skill.style.width = skill.getAttribute('data-level');
        });
    }
};

window.addEventListener('scroll', animateSkills);
animateSkills(); // Run on load if already visible
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
                
            });
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });

    // Logo shrink on scroll
const logoContainer = document.querySelector('.logo-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        logoContainer.style.transform = 'scale(0.85)';
        logoContainer.style.transition = 'transform 0.3s ease';
    } else {
        logoContainer.style.transform = 'scale(1)';
    }
});

    // Scroll reveal
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
});
