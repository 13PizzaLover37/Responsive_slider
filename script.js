const images = document.querySelectorAll(".slider .slider-items img");
const sliderItems = document.querySelector(".slider .slider-items");
let countImg = 0;
let width;

function changeImgSize (){
    console.log("work");
    width = document.querySelector(".slider").offsetWidth;
    sliderItems.style.width = width * images.length + 'px';
    images.forEach( image => {
        image.style.width = width + 'px';
        image.style.height = 'auto';
    } );
    moveImage();
}

window.addEventListener('resize', changeImgSize);

document.querySelector(".prevSlide").addEventListener('click', () => {
    countImg--;
    if (countImg < 0){
        countImg = images.length - 1;
    }
    console.log(countImg);
    moveImage();
})

document.querySelector('.nextSlide').addEventListener('click', () =>{
    countImg++;
    console.log('click');
    if (countImg >= images.length){
        countImg = 0;
    }
    console.log(countImg);
    moveImage();
})

function moveImage(){
    sliderItems.style.transform = 'translate(-' + countImg * width +'px )';
}
