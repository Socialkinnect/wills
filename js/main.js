$(document).ready(function(){
 
 
 

$('.nav__icon').click(function() {
	$(this).toggleClass('active');
	$('.menu ul').toggleClass('push');
    });

});
$(window).load(function(){

$('.single-item').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover:false,
        autoplaySpeed: 3000,
        dots:true,
    });
$('.mobslider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover:false,
        autoplaySpeed: 3000,
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 1,
    });
	if($(window).width()>800)
  {

    $('.single-item').on('afterChange', function(event, slick, direction){
  //console.log(direction);
  $('.bannerText').addClass('hide').removeClass('wow fadeInRight');
  $('.slick-current .bannerText').removeClass('hide').addClass('wow fadeInRight');

  // left
});
    new WOW().init();
  }
  else
  {$('.bannerText').removeClass('hide')}
})