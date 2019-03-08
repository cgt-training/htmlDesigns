$(document).ready(function() {

	var ratingconfig = {

		animate:true,

		duration:1000,

		ease:"easeOutBounce",

		maxRating: 10,

		wrapperWidth:1000,

		showText: false,

		wrapperClass:"wrapper_books",

		innerClass:"inner_books",

		textClass: "rating_books"

	}
	$('.book_rating').ratingbar(ratingconfig);
	$('.demo').flexibleStars({
  		init: 4.5,
   		doRate: '#rate'
	});
});
$(document).ready(function() {
 
  $("#owl-example").owlCarousel({

  	loop:true,
    margin:10,
    responsiveClass:true,
    dots:true,
    responsive:{
        0:{

            items:1,
            loop:true,
        },
        600:{

            items:1,
            loop:true,
        },
        1000:{

            items:1,
            loop:true,
        }
    }

  });
});