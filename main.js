//search
const src =document.querySelector('#src')
const container =document.querySelector('.search')
const dle =document.querySelector('#dle')
const aTag =document.querySelector('a')
function refresh(){
  aTag.preventDefault();
}

src.addEventListener('click',function(event){
  event.preventDefault();
  container.style.display='block'
})
dle.addEventListener('click',function(event){
  event.preventDefault();
  container.style.display='none'
})


//swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swipers = new Swiper(".mySwipers", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});