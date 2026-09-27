// ===== Scroll Progress Bar =====
const updateScrollProgress = () => {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    if (scrollProgress) {
        scrollProgress.style.width = scrollPercentage + '%';
    }
};

window.addEventListener('scroll', updateScrollProgress);

// ===== Navegación móvil =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Scroll suave =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navbar scroll effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ===== Scroll reveal animations =====
const revealElements = document.querySelectorAll('.stat-card, .lang-card, .tech-compact-category, .skill-card, .project-card, .timeline-item, .contact-method, .cta-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('reveal', 'active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// ===== Typing animation for hero section =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing animation after page load
    setTimeout(typeWriter, 1000);
}

// ===== Parallax effect for hero background =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.grid-overlay');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== Counter animation for stats =====
const counters = document.querySelectorAll('.stat-card h3');
const speed = 200; // Lower is faster

const animateCounters = () => {
    counters.forEach(counter => {
        const target = counter.getAttribute('data-target') || counter.innerText;

        // Skip if not a number
        if (isNaN(parseInt(target))) return;

        const updateCount = () => {
            const count = +counter.innerText.replace(/[^0-9]/g, '');
            const targetNum = +target.replace(/[^0-9]/g, '');
            const increment = targetNum / speed;

            if (count < targetNum) {
                counter.innerText = Math.ceil(count + increment) + (target.includes('+') ? '+' : '') + (target.includes('%') ? '%' : '');
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// ===== Smooth reveal for sections =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(element => {
    revealObserver.observe(element);
});

// ===== Tech tags hover effect =====
const techTags = document.querySelectorAll('.tech-tag');

techTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== Project cards 3D tilt effect =====
const projectCards = document.querySelectorAll('.project-card, .skill-card, .lang-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== Scroll indicator hide on scroll =====
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300 && scrollIndicator) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.visibility = 'hidden';
    } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.visibility = 'visible';
    }
});

// ===== Code card animation =====
const codeCard = document.querySelector('.code-card');

if (codeCard) {
    setTimeout(() => {
        codeCard.style.animation = 'fadeInRight 0.8s ease, float 3s ease-in-out infinite';
    }, 1000);
}

// Add float animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .scroll-indicator {
        transition: opacity 0.3s, visibility 0.3s;
    }
`;
document.head.appendChild(style);

// ===== Button ripple effect =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ===== Add data-target attributes to stat cards =====
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-card h3');
    statNumbers.forEach(stat => {
        stat.setAttribute('data-target', stat.innerText);
        // Reset to 0 for animation
        if (!isNaN(parseInt(stat.innerText))) {
            stat.innerText = '0';
        }
    });
});

// ===== Cursor glow effect (optional, modern touch) =====
const cursor = document.createElement('div');
cursor.classList.add('cursor-glow');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add cursor glow styles
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .cursor-glow {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%);
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s;
        z-index: 9999;
        display: none;
    }

    @media (min-width: 768px) {
        .cursor-glow {
            display: block;
        }
    }

    .btn:hover ~ .cursor-glow,
    a:hover ~ .cursor-glow,
    .lang-card:hover ~ .cursor-glow {
        width: 40px;
        height: 40px;
    }
`;
document.head.appendChild(cursorStyle);

// ===== Loading animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Console message =====
console.log('%c¡Hola! 👋', 'color: #10b981; font-size: 24px; font-weight: bold;');
console.log('%cGracias por visitar mi portafolio', 'color: #34d399; font-size: 16px;');
console.log('%cSi estás interesado en trabajar juntos, ¡contáctame!', 'color: #10b981; font-size: 14px;');
console.log('%c\n💻 Desarrollado con ❤️ por Benjamín Palma', 'color: #c9d1d9; font-size: 12px;');

// ===== Initialize all animations on load =====
document.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to elements
    document.querySelectorAll('.stat-card, .lang-card, .tech-compact-category, .skill-card, .project-card, .timeline-item').forEach(el => {
        el.classList.add('reveal');
    });

    // Trigger initial reveal check
    revealOnScroll();

    // Activate first nav link
    activateNavLink();

    // Update current year dynamically
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ===== Performance optimization: Throttle scroll events =====
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(revealOnScroll, 100));
window.addEventListener('scroll', throttle(activateNavLink, 100));
