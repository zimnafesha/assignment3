$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:true,
        smartspeed:1000,
        navText:  ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav: false,
            },
            768:{

                nav:true,
            }
        }
    })
});



   //PROJECTS SLIDER
   $('#projects-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    smartspeed:1000,
    margin:24,
    navText:  ['PREV', 'NEXT'],
    responsive:{
        0:{
            items: 1,
            nav: false,
            margin:0,
        },
        768:{
            items: 2,
        },
        1140:{
          items: 2,
          center: true,
        },
    }
});

   $('.reviews-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 1,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
});




















