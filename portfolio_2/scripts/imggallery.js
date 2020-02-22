const slideno = 1;
const slides = document.querySelectorAll('.slides');
// console.log(slides.length);
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
// console.log(prev,next);
const thumbnails = document.querySelectorAll('.demo');
// console.log(thumbnails);
const i=0;

const showslides = (val)=>{
    console.log(1);
    // if(val>slides.length){slideno=1;}
    // if(val<1){slideno=slides.length;}
    for(i=0;i<slides.length;i++){
        slides[i].style.display='none';
    }
    for(i=0;i<thumbnails.length;i++){
        thumbnails.classList.remove("active");
    }
};
prev.addEventListener('click',(e)=>{
      prevVal = e.target.id;
      showslides(slideno+=prevVal);
});
next.addEventListener('click',(e)=>{
    nextVal = e.target.id;
    showslides(slideno+=nextVal);
});
thumbnails.addEventListener('click',(e)=>{
    const val = e.target.id;
    console.log(val);
    // showslides(val);
 });
slides[slideno-1].style.display="block";
thumbnails[slideno-1].classList.add("active");

