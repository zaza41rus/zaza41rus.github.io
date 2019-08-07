$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['blue', 'red', 'yellow', 'purple', 'green', 'orange'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

	$(document).mousedown(function(e){
		if(!$(e.target).hasClass('email')){
			$('.flash').removeClass('blue red yellow purple green orange').addClass('flashing black');
			$('header').hide();
			$('.info').show();
			slide = slide >= $('.slides li').length - 1 ? slide = 0 : slide + 1;
			$('.slides li').eq(slide).addClass('visible');
			e.preventDefault();
		}
	});

	$(document).mouseup(function(e){
		$('.slides li').removeClass('visible');
		colourIndex = colourIndex === 5 ? colourIndex = 0 : colourIndex + 1;
		$('.flash').addClass(colours[colourIndex]).removeClass('flashing black');
		$('.info').hide();
		$('header').show();
		e.preventDefault();
	});

	document.addEventListener('touchmove', function(e){
		$('.flash, .white').css({
			top:e.pageY,
			left:e.pageX
		});
		e.preventDefault();
	}, false);

	document.addEventListener('touchstart', function(e){
		if(!$(e.target).hasClass('email')){
			$('.flash, .white').css({
				top:e.pageY,
				left:e.pageX
			});
			$('.flash').removeClass('blue red yellow purple green orange').addClass('flashing black');
			$('header').hide();
			$('.info').show();
			slide = slide >= $('.slides li').length - 1 ? slide = 0 : slide + 1;
			$('.slides li').eq(slide).addClass('visible');
			e.preventDefault();
		}
	}, false);

	document.addEventListener('touchend', function(e){
		if(!$(e.target).hasClass('email')){
			$('.slides li').removeClass('visible');
			colourIndex = colourIndex === 5 ? colourIndex = 0 : colourIndex + 1;
			$('.flash').addClass(colours[colourIndex]).removeClass('flashing black');
			$('.info').hide();
			$('header').show();
			e.preventDefault();
		}
	}, false);







});