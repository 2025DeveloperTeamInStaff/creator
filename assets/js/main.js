// 轮播图功能
const carouselImages = document.querySelectorAll('.carousel-inner img');
const prevBtn = document.querySelector('.carousel-controls .prev');
const nextBtn = document.querySelector('.carousel-controls .next');
let currentIndex = 0;
let timer = null;

function showImage(index) {
  carouselImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}
function nextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  showImage(currentIndex);
}
function prevImage() {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  showImage(currentIndex);
}
function startAutoPlay() {
  timer = setInterval(nextImage, 3500);
}
function stopAutoPlay() {
  clearInterval(timer);
}
if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    prevImage();
    stopAutoPlay();
    startAutoPlay();
  });
  nextBtn.addEventListener('click', () => {
    nextImage();
    stopAutoPlay();
    startAutoPlay();
  });
}
showImage(currentIndex);
startAutoPlay(); 