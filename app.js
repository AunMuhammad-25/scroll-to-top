const scrollbtn=document.getElementById("btn1");


window.addEventListener("scroll", function () {
    if(this.window.pageYOffset >300){
        scrollbtn.style.display="block";
    }
    else{
        scrollbtn.style.display="none";
    }

    
})


scrollbtn.addEventListener("click",function () {
   window.scrollTo({
    top:0,
    behavior:"smooth"
   })
    
})