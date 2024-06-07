function blurOnHover(imageElement){
    imageElement.addEventListener("mouseenter",function(){
        this.style.filter="blur(13px)";
    })
    imageElement.addEventListener("mouseleave",function(){
        this.style.filter="blur(0px)";
    })
}


