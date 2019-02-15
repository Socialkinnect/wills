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
});
$(window).load(function(){

	new WOW().init();
})