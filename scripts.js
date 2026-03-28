// Header Scroll Effect
const header = document.querySelector('.header-background');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter items
        portfolioItems.forEach((item) => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
                item.classList.add('fade-in');
            } else {
                item.style.display = 'none';
            }
        });
    });
});
