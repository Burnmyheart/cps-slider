new Swiper('.brands__slider', {
    slidesPerView: 'auto',
    slidesOffsetBefore: 0,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    }

})

const toggleBtn = document.querySelector('.toggle-btn');
const toggleText = toggleBtn.querySelector('.toggle-btn__text');
const grid = document.querySelector('.brands-grid');

toggleBtn.addEventListener('click', () => {
    grid.classList.toggle('expanded');
    toggleBtn.classList.toggle('active');
    toggleText.textContent = grid.classList.contains('expanded') ? 'Скрыть' : 'Показать все';
});