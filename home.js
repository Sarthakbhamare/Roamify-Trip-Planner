document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.trending-destination, .feature');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});