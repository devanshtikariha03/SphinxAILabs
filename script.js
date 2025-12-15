// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Pricing region toggle (India / Australia)
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.pricing-toggle .toggle-button');
    const regions = {
        india: document.getElementById('pricing-india'),
        australia: document.getElementById('pricing-australia')
    };

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const region = button.getAttribute('data-region');
            if (!region || !regions[region]) return;

            // Update active button
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show / hide regions
            Object.keys(regions).forEach(key => {
                if (key === region) {
                    regions[key].classList.add('active');
                } else {
                    regions[key].classList.remove('active');
                }
            });
        });
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .package-card, .director-bubble, .option-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form submission handler with EmailJS
const contactForm = document.querySelector('.contact-form');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');

// Initialize EmailJS
emailjs.init("yqW1qg1il3akya4lI");

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const organization = document.getElementById('organization').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formMessage.textContent = '';
        
        try {
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                organization: organization || 'Not provided',
                message: message,
                to_email: 'sphinxailabs@gmail.com'
            };
            
            // Send email using EmailJS
            await emailjs.send(
                'service_un9k9d9',    // Your EmailJS Service ID
                'template_6fpmqim',   // Your EmailJS Template ID
                templateParams
            );
            
            showMessage('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            showMessage('Sorry, there was an error sending your message. Please try again or email us directly at sphinxailabs@gmail.com', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// Add parallax effect to hero orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Package card hover effects enhancement
const packageCards = document.querySelectorAll('.package-card');
packageCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        if (card.classList.contains('featured')) {
            card.style.transform = 'scale(1.05)';
        } else {
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
});
