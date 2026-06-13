// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 500);
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.padding = '12px 5%';
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
    } else {
        navbar.style.padding = '15px 5%';
        navbar.style.background = 'rgba(5, 5, 5, 0.85)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Pagination functionality (placeholder)
document.querySelectorAll('.pagination button').forEach(btn => {
    btn.addEventListener('click', function() {
        if (!this.querySelector('i')) {
            document.querySelectorAll('.pagination button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Smooth video loading
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('loadeddata', () => {
        video.style.opacity = '1';
    });
    video.style.opacity = '0';
    video.style.transition = 'opacity 0.5s ease';
});
