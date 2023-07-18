let si=0;
slideshow_invoke();

function slideshow_invoke(){
    let i;
    let slides=document.getElementsByClassName("slideshow_slide");
    console.log(slides.length);
    for(i=0;i<slides.length;i++){
	slides[i].style.display="none";
    }
    si++;
    if(si>slides.length){
	si=1;
    }
    slides[si-1].style.display="block";
    setTimeout(slideshow_invoke,2000);
}
