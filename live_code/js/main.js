$(document).ready(function(){

showloader();

});
var headerheight = $('#header').outerHeight();

$(window).load(function(){
	new WOW().init();
  hideloader();
	if (window.matchMedia('(max-width: 768px)').matches) {
	$('ul.menu').css('top',headerheight);
	
}

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
  

$('body').css('padding-top',headerheight);

$('.nav__icon').click(function() {
	$(this).toggleClass('active');
	$('.menu ul').toggleClass('push');
    });

});


function hideloader() {
    $('.loader').addClass('hidden');
}

function showloader() {
    $('.loader').removeClass('hidden');

}