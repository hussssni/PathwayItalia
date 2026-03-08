document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to elements
    const elementsToAnimate = [
        '.hero-badge',
        '.hero-title',
        '.hero-subtitle',
        '.hero-cta',
        '.feature-card',
        '.cta-box'
    ];

    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            // Set initial state
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.1}s`;
            
            // Observe
            animateOnScroll.observe(el);
        });
    });

    // Blob mouse follow effect (subtle)
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        requestAnimationFrame(() => {
            // Move blob 1 slowly towards mouse
            if(blob1) {
                const rect1 = blob1.getBoundingClientRect();
                const currentX1 = rect1.left + rect1.width/2;
                const currentY1 = rect1.top + rect1.height/2;
                
                const moveX1 = (mouseX - currentX1) * 0.02;
                const moveY1 = (mouseY - currentY1) * 0.02;
                
                // We use transform in CSS animation, so let's adjust margin or translate
                // Actually, since CSS animation uses transform, it's better to wrap blobs or use custom variables.
                // For simplicity, let's just let CSS handle the floating. It's smoother.
            }
        });
    });
});
