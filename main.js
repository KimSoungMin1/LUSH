let slide=document.querySelector('.slide')
let slidList =document.querySelectorAll('.slide_img')
let prev =document.querySelector('.prev')
let next =document.querySelector('.next'),
count=0,
idx=slidList.length,
wih=1224;
slide.style.width=wih*idx+'px'

function any(num){
  count =num
  slide.style.left=-num*1224+"px"
}
prev.addEventListener('click',function(){
  if(count<idx-1){
    any(count+1)
  }else{
    any(0)
  }
  
})
next.addEventListener('click',function(){
  if(count>0){
    any(count-1)
  }else{
    any(idx-1)
  }
})