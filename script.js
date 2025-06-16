document.addEventListener('DOMContentLoaded', () => {
    // Login Popup
    const loginPopup = document.getElementById('loginPopup');
    const closePopup = document.getElementById('closePopup');
    loginPopup.style.display = 'flex';
    
    closePopup.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', isDark);
    });

    // Sidebar
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    
    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll Animation for Elements
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));

    // Motivational Quotes Loop
    const quotes = [
        "Push yourself, because no one else is going to do it for you.",
        "The body achieves what the mind believes.",
        "Your only limit is you.",
        "Sweat today, shine tomorrow."
    ];
    let quoteIndex = 0;
    const quoteElement = document.getElementById('quote');
    setInterval(() => {
        quoteElement.style.opacity = 0;
        setTimeout(() => {
            quoteElement.textContent = quotes[quoteIndex];
            quoteElement.style.opacity = 1;
            quoteIndex = (quoteIndex + 1) % quotes.length;
        }, 500);
    }, 3000);

    // Slider
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }, 3000);

    // Membership Calculator
const planSelect = document.getElementById('planSelect');
const personalTraining = document.getElementById('personalTraining');
const totalCost = document.getElementById('totalCost');

function calculateTotal() {
    let baseCost = parseInt(planSelect.value);
    const months = planSelect.value === '2000' ? 1 : planSelect.value === '5500' ? 3 : 6;
    if (personalTraining.checked) {
        baseCost += 1000 * months;
    }
    totalCost.textContent = `₹${baseCost}`;
}

planSelect.addEventListener('change', calculateTotal);
personalTraining.addEventListener('change', calculateTotal);

// Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
}, 5000);
// Newsletter Form Validation
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        newsletterMessage.textContent = 'Thank you for subscribing!';
        newsletterMessage.style.color = '#4CAF50';
        body.classList.contains('dark-mode') ? newsletterMessage.style.color = '#4ADE80' : null;
        newsletterForm.reset();
        setTimeout(() => {
            newsletterMessage.textContent = '';
        }, 3000);
    } else {
        newsletterMessage.textContent = 'Please enter a valid email address.';
        newsletterMessage.style.color = '#FF6B00';
        body.classList.contains('dark-mode') ? newsletterMessage.style.color = '#FF7A1A' : null;
    }
});
});