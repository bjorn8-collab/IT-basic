const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        alert(`Bedankt ${name}! Je bericht is verzonden.`);
        contactForm.reset();
    });
}

const projectCards = document.querySelectorAll('.project-card');
const projectEmpty = document.querySelector('.project-empty');
const filterChips = document.querySelectorAll('.filter-chip');

if (filterChips.length) {
    filterChips.forEach((chip) => {
        chip.addEventListener('click', () => {
            const filter = chip.dataset.filter;

            filterChips.forEach((other) => {
                const isActive = other === chip;
                other.classList.toggle('is-active', isActive);
                other.setAttribute('aria-pressed', String(isActive));
            });

            let visible = 0;

            projectCards.forEach((card) => {
                const matches = filter === 'all' || card.dataset.category === filter;
                card.hidden = !matches;
                if (matches) visible += 1;
            });

            if (projectEmpty) projectEmpty.hidden = visible !== 0;
        });
    });
}