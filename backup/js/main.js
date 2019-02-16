$(document).ready(function(){
 $('.single-item').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover:false,
        autoplaySpeed: 3000,
        dots:true,
    });
 
 $('.single-item').on('afterChange', function(event, slick, direction){
  console.log(direction);
  $('.bannerText').addClass('hide').removeClass('wow fadeInRight');
  $('.slick-current .bannerText').removeClass('hide').addClass('wow fadeInRight');

  // left
});

var headerheight = $('#header').outerHeight();
$('body').css('padding-top',headerheight);

$('.nav__icon').click(function() {
	$(this).toggleClass('active');
	$('.menu ul').toggleClass('push');
    });

});
$(window).load(function(){

	new WOW().init();
})