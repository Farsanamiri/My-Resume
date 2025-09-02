// JavaScript functions
function resume() {
    window.location.href = 'https://farsanamiri.github.io/Resume';
}

function createTypingEffect(element, texts, speed = 100) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = speed;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

document.addEventListener('DOMContentLoaded', function () {
    const typingElement = document.querySelector('.typing-effect');

    if (typingElement) {
        const texts = [
            'I Am Farsan Amiri',
            'Front end developer',
            'Back end developer',
            'Android developer'
        ];

        createTypingEffect(typingElement, texts, 150);
    }

    // Mobile menu toggle
    document.getElementById('menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('show');
    });

    // Slider functionality
    const slider = document.getElementById('action-slider');
    const cards = Array.from(slider.children);
    const cardWidth = cards[0].offsetWidth + 24; // 24 is the gap (space-x-6)

    // Clone cards for infinite loop
    cards.forEach((card) => {
        const clone = card.cloneNode(true);
        slider.appendChild(clone);
    });

    // Scroll to the first original card
    slider.scrollLeft = 0;

    // Next button
    document.getElementById('next-btn').addEventListener('click', () => {
        slider.scrollBy({ left: cardWidth, behavior: 'smooth' });

        // Check if we've reached the end (clones)
        setTimeout(() => {
            if (slider.scrollLeft >= cards.length * cardWidth) {
                slider.scrollTo({ left: 0, behavior: 'auto' });
            }
        }, 500);
    });

    // Previous button
    document.getElementById('prev-btn').addEventListener('click', () => {
        slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });

        // Check if we're at the start and need to jump to end
        setTimeout(() => {
            if (slider.scrollLeft <= 0) {
                slider.scrollTo({ left: cards.length * cardWidth, behavior: 'auto' });
            }
        }, 500);
    });
});

function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});