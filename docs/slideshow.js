let si=0;
slideshow_invoke();

function slideshow_invoke(){
    let i;
    let slides=document.getElementsByClassName("slideshow_slide");
    for(i=0;i<slides.length;i++){
	slides[i].style.display="none";
    }
    if(si==slides.length){
	si=0;
    }
    slides[si].style.display="block";
    si++;
    setTimeout(slideshow_invoke,2000);
}
