/*==================================================================
============== NavBar =============================================
=================================================================*/
var nav           = document.querySelector("#navbar");
var iconContainer = nav.querySelector("span.icon");
var blueIcon      = '<img src="images/icons/blue-icon.png"  alt="icon">';
var whiteIcon     = '<img src="images/icons/white-icon.png"  alt="icon">';
/*========== Check If in Mideum Page ============*/
if( window.scrollY >  50 ){
    nav.classList.add("navbar-sticky");
    iconContainer.innerHTML = blueIcon;
}else{
    nav.classList.remove("navbar-sticky");
    iconContainer.innerHTML = whiteIcon;
}
/*==========  OnScroll ============*/
window.onscroll = function (e) {  
    if( this.scrollY >  50 ){
        nav.classList.add("navbar-sticky");
        iconContainer.innerHTML = blueIcon;
    }else{
        nav.classList.remove("navbar-sticky");
        iconContainer.innerHTML = whiteIcon;
    }
} 


/*=====  Mobile Nav ======*/
var bar      = nav.querySelector(".bar");
var barLines = bar.querySelector("div");
var navLinks = nav.querySelector(".nav-links");
var links    = nav.querySelectorAll(".nav-links li");
bar.addEventListener('click', ()=>{
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    //bar Animation
    bar.classList.toggle("toggle");
    // Bar Lines Color
    nav.classList.toggle("mob-nav");
});
