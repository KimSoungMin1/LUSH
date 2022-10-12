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
new Swiper(".swiper", {
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



  new Swiper('.swipers', {
    slidesPerView: 3,//한번에 보여줄 슬라이드 개수
    spaceBetween: 10,//슬라이드 사이 여백
    centeredSlides : true,// 1번 슬라이드가 가운데 보이기
    loop :true,
    autoplay :{
    delay:5000
    },
    pagination: {
      el: '.promotion .swiper-pagination',//페이지 번호 요소 선택자
      clickable:true //사용자의 페이지 번호 요소 제어 가능 여부
    }
    });