function ham_popin(){
    let vh=window.innerHeight;
    if(vh>100){
	document.getElementById("ham-menu").style.height="250px";
    }
    else{
	console.log("what?");
	document.getElementById("ham-menu").style.width="250px";
    }
}

function ham_popout(){
    let vh=window.innerHeight;
    if(vh>100){
	document.getElementById("ham-menu").style.height="0";
    }
    else{
	document.getElementById("ham-menu").style.width="0";
    }
}
