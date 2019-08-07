$(document).bind( 'mousewheel', function (e) { 
var nt = $(document.body).scrollTop()-(e.originalEvent.wheelDeltaY); 
e.preventDefault(); 

$(document.body).stop().animate( { 
scrollTop : nt 
} , 200 ); 
} )