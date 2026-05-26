// Smooth scrolling layout adjustments and active state handler
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Navbar styling modification on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Sync Active Navbar Links to Content Positions
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Triggers a bit before reaching the edge
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    });
    // Animação de Scroll para os Diferenciais usando Intersection Observer
    const animatedElements = document.querySelectorAll('.animate-scroll');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || 0;

                // Aplica o atraso cascata antes de disparar o surgimento
                setTimeout(() => {
                    element.classList.add('is-visible');
                }, delay);

                // Para de observar o elemento após ele já ter aparecido
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.15 // Dispara a animação quando 15% do card estiver visível
    });

    animatedElements.forEach(el => scrollObserver.observe(el));
});
