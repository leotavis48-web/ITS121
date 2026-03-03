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
    // 1. Get the current width of a single item
    const item = document.querySelector('.zzz-carousel-item');
    const itemWidth = item.offsetWidth;
    
    // 2. The gap must match the gap in your CSS (.zzz-carousel-track { gap: 20px; })
    const gap = 20; 
    
    // 3. Calculate the distance to shift exactly 4 items
    const shiftAmount = (itemWidth + gap) * 4; 
    
    // 4. Apply the CSS transform to slide the track
    track.style.transform = `translateX(-${currentPage * shiftAmount}px)`;
}

function updateButtons() {
    // Disable Prev button if we are on the first page
    if (currentPage === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    // Disable Next button if we are on the last page
    if (currentPage === maxPages) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}