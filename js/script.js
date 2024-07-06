


let slideIndex = 1;

displaySlides(slideIndex);


// Call the function to start automatic slideshow
startAutomaticSlide();

function startAutomaticSlide() {
    setInterval(() => {
        incrementSlide();
    }, 8000); 
}


function displaySlides(slideNum){

    
    let index;
    let slides = document.getElementsByClassName("slide-image");
    let dots = document.getElementsByClassName("dot");
    if (slideNum > slides.length) {
        slideIndex = 1;
    }  

    if (slideNum < 1) {slideIndex = slides.length}



    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";  
      }

      for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");
      }
    
      slides[slideIndex-1].style.display="block"
      dots[slideIndex-1].className += " active";
      
}


function incrementSlide(){

    displaySlides(slideIndex +=1)
}



function decrementSlide(){
    displaySlides(slideIndex -=1)
}


function currentSlide(current){
    displaySlides(slideIndex = current)
}
