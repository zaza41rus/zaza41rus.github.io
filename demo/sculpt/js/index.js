$('.container').slick({
  centerMode: true,
  slidesToShow: 1,
  infinite: false,
  arrows: false,
  rows: 0,
  dots: false,
  centerPadding: '0px',
  edgeFriction: 0.2
})


// modal
$('#modal_button').click(function(e) {
  $('.modal').addClass('active');
  e.preventDefault();
});

$('.modal').click(function(e) {
  $('.modal').removeClass('active');
  e.preventDefault();
});
// modal

// logo opacity
$(window).on('scroll', function() {
var scrollCoef = 0.0035;

$('#logo').css({
  opacity: 1 - $(window).scrollTop() * scrollCoef
})
});

$(window).on('scroll', function() {
var scrollCoef = 0.0035;

$('.swipe').css({
  opacity: 1 - $(window).scrollTop() * scrollCoef
})
});
// logo opacity
