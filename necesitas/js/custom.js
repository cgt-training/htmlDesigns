$('.circle').on('click',function(){
	$('.circle').removeClass('active-form');
	$(this).addClass('active-form');
	$('form input').val(''); 
	// $('form .btn.dropdown-toggle.btn-default').attr('title',''); 
	$('form select').each(function(i,v){v.sectedIndex = 0});  
	$('form').hide(); 
	$('.'+$(this).attr('id')).show();
});
$(document).ready(function() {
 
  $("#owl-example").owlCarousel({

  	loop:true,
    margin:10,
    responsiveClass:true,
    nav    : true,
    navText : ["<i class='fa fa-chevron-left'> </i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{

            items:1,
            loop:true,
        },
        600:{

            items:3,
            loop:true,
        },
        1000:{

            items:5,
            loop:true,
        }
    }

  });
});
$(document).ready(function() {
 
  $("#owl-btc-example").owlCarousel({

    loop:true,
    margin:10,
    responsiveClass:true,
    nav    : true,
    navText : ["<i class='fa fa-chevron-left pink pink-left'> </i>","<i class='fa fa-chevron-right pink'></i>"],
    responsive:{
        0:{

            items:1,
            loop:true,
        },
        600:{

            items:3,
            loop:true,
        },
        1000:{

            items:5,
            loop:true,
        }
    }

  });
});
$(document).ready(function() {
 
  $("#owl-footer-example").owlCarousel({

    loop:true,
    margin:10,
    responsiveClass:true,
    nav    : true,
    navText : ["<i class='fa fa-chevron-left pink pink-footer-left'> </i>","<i class='fa fa-chevron-right pink pink-footer-right'></i>"],
    responsive:{
        0:{

            items:1,
            loop:true,
        },
        600:{

            items:2,
            loop:true,
        },
        1000:{

            items:3,
            loop:true,
        }
    }

  });
});



