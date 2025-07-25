
// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
                
                // Animate skill bars
                if (entry.target.classList.contains('skills-container')) {
                    animateSkillBars(entry.target);
                }
            }, delay);
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));
    
    // Initialize other functionality
    initializeContactForm();
    initializeSmoothScrolling();
});

// Animate skill bars
function animateSkillBars(container) {
    const skillBars = container.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.dataset.width;
            bar.style.width = width + '%';
        }, index * 200);
    });
}

// Contact form handling
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        
        // Add floating label functionality
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', handleInputFocus);
            input.addEventListener('blur', handleInputBlur);
            input.addEventListener('input', handleInputChange);
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message (you can replace this with actual form submission)
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    
    // Reset form
    e.target.reset();
    
    // Reset floating labels
    const labels = e.target.querySelectorAll('label');
    labels.forEach(label => {
        label.style.transform = '';
        label.style.fontSize = '';
        label.style.color = '';
    });
}

function handleInputFocus(e) {
    const label = e.target.nextElementSibling;
    if (label && label.tagName === 'LABEL') {
        label.style.transform = 'translateY(-1.5rem) scale(0.8)';
        label.style.fontSize = '0.875rem';
        label.style.color = 'var(--creme-brulee)';
    }
}

function handleInputBlur(e) {
    if (!e.target.value) {
        const label = e.target.nextElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.transform = '';
            label.style.fontSize = '';
            label.style.color = '';
        }
    }
}

function handleInputChange(e) {
    const label = e.target.nextElementSibling;
    if (label && label.tagName === 'LABEL') {
        if (e.target.value) {
            label.style.transform = 'translateY(-1.5rem) scale(0.8)';
            label.style.fontSize = '0.875rem';
            label.style.color = 'var(--creme-brulee)';
        } else {
            label.style.transform = '';
            label.style.fontSize = '';
            label.style.color = '';
        }
    }
}

// Smooth scrolling for navigation
function initializeSmoothScrolling() {
    // Add smooth scrolling to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('onclick') === 'scrollToContact()') {
                e.preventDefault();
                scrollToContact();
            }
        });
    });
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: type === 'success' ? 'var(--creme-brulee)' : 'var(--espresso-martini)',
        color: type === 'success' ? 'var(--dark-chocolate)' : 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        fontSize: '0.875rem',
        fontWeight: '500'
    });
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Parallax effect for floating elements
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const floating1 = document.querySelector('.floating-1');
        const floating2 = document.querySelector('.floating-2');
        
        if (floating1) {
            floating1.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
        
        if (floating2) {
            floating2.style.transform = `translate3d(0, ${rate * 0.7}px, 0)`;
        }
    });
}

// Initialize parallax on load
window.addEventListener('load', initializeParallax);

// Optimize performance with requestAnimationFrame
let ticking = false;

function updateAnimations() {
    // Update any ongoing animations here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

// Add scroll event listener with throttling
window.addEventListener('scroll', requestTick);

// Preload images for better performance
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--creme-brulee) !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);
