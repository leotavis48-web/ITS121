const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Track which "page" of 4 items we are currently looking at
let currentPage = 0; 
const maxPages = 1; // Since we have 8 items, there is Page 0 and Page 1

// Run immediately to disable the "Prev" button on page load
updateButtons();

nextBtn.addEventListener('click', () => {
    if (currentPage < maxPages) {
        currentPage++;
        moveCarousel();
        updateButtons();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        moveCarousel();
        updateButtons();
    }
});

function moveCarousel() {

    const item = document.querySelector('.zzz-carousel-item');
    const itemWidth = item.offsetWidth;
    
    const gap = 20; 
    
    const shiftAmount = (itemWidth + gap) * 4; 
    
    track.style.transform = `translateX(-${currentPage * shiftAmount}px)`;
}

function updateButtons() {
    if (currentPage === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentPage === maxPages) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}