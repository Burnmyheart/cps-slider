swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    centeredSlides: false,
    spaceBetween: 16,
    pagination: { el: ".swiper-pagination", clickable: true },
});

const toggleBtn = document.querySelector('.toggle-btn');
const toggleText = toggleBtn.querySelector('.toggle-btn__text');
const grid = document.querySelector('.brands-grid');

toggleBtn.addEventListener('click', () => {
    grid.classList.toggle('expanded');
    toggleBtn.classList.toggle('active');
    toggleText.textContent = grid.classList.contains('expanded') ? 'Скрыть' : 'Показать все';
});

