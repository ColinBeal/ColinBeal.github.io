/**
 * Created by colin on 02/12/2016.
 */


$(document).ready(function(){
    var $p = $('span');
    $("#show").click(function(){
        $p.css('visibility', 'visible');
    });
});

function overlay() {
    el = document.getElementById("overlay");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})