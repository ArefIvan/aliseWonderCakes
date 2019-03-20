$(document).ready(function(){

  $(".slader").owlCarousel({

  	loop:true,
  	items:1,
  	
  	
  	nav:true

  }

  	);
  $(".slader2").owlCarousel({
  	loop:true,
  	
  	dots:false,
  	nav:true,

  	responsive:{

  		0:{

  			items:1
  		},

  		600:{
  			items:2
  		},
  		750:{
  			items:3
  		}
  	}


  });

  $(function(){

	var $answers = $('.faq .faq__item__answer');

	$('.faq .faq__item__question').on('click', function(){
		var $curAnswer = $(this).next().stop(true).slideToggle(300);
		$answers.not($curAnswer).slideUp(300);
	});

	$('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top - 12 ;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });

});



});
window.onload = function(){
	var feed = new Instafeed({
		get:'user',
		userId:'3017297723',
		clientId: '8290f2300d2640b095524e94c00757ca',
		accessToken:'3017297723.8290f23.d0a82ee5314d4f1494f0b4c879567ded',
		limit:'6',
		template:'<div class="instafeed__img"><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></div>'

	});
	feed.run();
}; 


$(document).ready(function(){
	

	$(".item").on('click',function(){
		var text = $(this).children('.item__text');
		var img = $(this).children('.item__img');

		if(text.css('opacity') == '0'){
			text.stop(true).animate({opacity: 1},600);
			img.stop(true).animate({opacity:0.09 },600);
	    }
	    else{
	    	text.stop(true).animate({opacity: 0},600);	
	    	img.stop(true).animate({opacity:1 },600);
	    }
		
	});

});
 


