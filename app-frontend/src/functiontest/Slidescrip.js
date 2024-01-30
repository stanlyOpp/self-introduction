let slideIndex = 1;
function showSlide(n){
    let slides = document.getElementsByClassName("Slideitem");
    let dots = document.getElementsByClassName("dot");
    console.log(slides)
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(let i = 0; i < slides.length ; i++){
        slides[i].style.display = "none"
    }
    for(let i =0; i < dots.length ; i ++){
        dots[i].className = dots[i].className.replace(" active","")
    }
    slides[slideIndex-1].style.diplay = "block"
    dots[slideIndex-1].className += " active"
}
function pluseSlide(index){
    showSlide(slideIndex += index)

}
function Currentslide(currentslide){
    showSlide(slideIndex = currentslide)
}

exports.pluseSlide = pluseSlide;
