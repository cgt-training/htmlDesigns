$(document).ready(function(){
    $('#owl-1').owlCarousel({
        loop:true,
        margin:0,
        // autoWidth:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
             360:{
                items:1,
                dots:true
            },
            600:{
                items:1
            },
            768:{
                items:1,
                margin:40
            },
            1024:{
                items:1,
                // dots:true
            }
        }
    });

});

$(document).ready(function(){
    $('#owl-2').owlCarousel({
        loop:true,
        margin:0,
        // autoWidth:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
             360:{
                items:1,
                dots:true
            },
            600:{
                items:2
            },
            768:{
                items:3,
                margin:40
            },
            1024:{
                items:5,
                // dots:true
            }
        }
    });
    $('#owl-3').owlCarousel({
        loop:true,
        margin:0,
        // autoWidth:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
             360:{
                items:1,
                dots:true
            },
            600:{
                items:2
            },
            768:{
                items:3,
                margin:40
            },
            1024:{
                items:5,
                // dots:true
            }
        }
    });

});

