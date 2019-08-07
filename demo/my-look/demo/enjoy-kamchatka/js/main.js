(function(window,undefined){

    // Bind to StateChange Event
    History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
    });


})(window);
$(document).ready(function() {
var iframe = $('#enjoy-video')[0],
    player = $f(iframe);
var State = History.getState();
var stateArray = State.url.split('/');
var lastPart = stateArray[ stateArray.length - 1 ]
var random;
	
if(lastPart == 'jobs'){
	openJobs(false);
}
else if(lastPart == 'video'){
	openVideo(false);
}


// constants
var EMAIL_REGEX = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/

// global data object
var _data;
var check = 1;
var random;
// global variable for the player   
    function openVideo(sendToGa){

      if(sendToGa == undefined) {
        sendToGa = true;
      }

      if(sendToGa) {
        ga('send', 'pageview', '/video');
      }

      $('#enjoy-video-background').fadeIn();
      $('#enjoy-video-background .enjoy-video').addClass('active');
	    History.pushState(null,'enjoy - Video ','video');
	    player.api('play');
  }
  
 function openJobs(sendToGa){

    if(sendToGa == undefined) {
        sendToGa = true;
      }

      if(sendToGa) {
        ga('send', 'pageview', '/jobs');
      }

	 History.pushState(null,'enjoy - Jobs ','/jobs');
	 $('#jobs').addClass('active');
  }
   function closeJobs(){
	 History.pushState(null,'enjoy - Coming Soon ','/');
	 $('#jobs').removeClass('active');

   ga('send', 'pageview', '/');

  } 
   function openLogin(){
	 History.pushState(null,'enjoy - Loginn ','/login');
	 $('#beta-login').fadeIn('slow');

   ga('send', 'pageview', '/login');

  } 
  $("#beta-login").click(function(e) { 
	  if (e.target.id == 'beta-login'){
		  $(this).fadeOut('slow');
		  History.pushState(null,'enjoy - Coming Soon','/');
      ga('send', 'pageview', '/');
	  }
  }); 
  
  $("#enjoy-video-background").click(function(e) { 
	  if (e.target.id == 'enjoy-video-background' || e.target.id == 'close-white'){
	  		 player.api('pause');
		  $('#enjoy-video-background .enjoy-video').removeClass('active');
		  setTimeout(function(){		  
		  $('#enjoy-video-background').fadeOut();
		  },50);
		  History.pushState(null,'enjoy - Coming Soon','/');
      ga('send', 'pageview', '/');
	  }
  }); 
 
 
 $("#enjoy-white-background").click(function(e) {  
	  if ( e.target.id == 'close-black'){
		  $('#enjoy-white-background').fadeOut();
	  }
  });
 
  //Parallax
 function ParallaxImage(number){
    switch(number){
case 1:
  $('#parallax').fadeIn('slow').html('<div id="balloon" class="enjoy-background scene" data-limit-x="3" data-limit-y="3"><div class="layer balloon" id="balloon-1" data-depth="0.20"></div><div class="layer balloon" id="balloon-2" data-depth="0.50"></div><div class="layer balloon" id="balloon-3" data-depth="0.80"></div><div class="layer balloon" id="balloon-4" data-depth="0.60"></div></div>	');
  break;
case 2:
  $('#parallax').fadeIn('slow').html('<div id="kite" class="enjoy-background scene" data-limit-x="3" data-limit-y="3"><div class="layer kite" id="kite-1" data-depth="0.20"></div><div class="layer kite" id="kite-2" data-depth="1.0"></div><div class="layer kite" id="kite-3" data-depth="0.8"></div></div>');
  break;
 case 3:
  $('#parallax').fadeIn('slow').html('<div id="photograph" class="enjoy-background scene " data-limit-x="3" data-limit-y="3"><div class="layer photograph" id="photograph-1" data-depth="0.30"></div><div class="layer photograph" id="photograph-2" data-depth="0.7"></div><div class="layer photograph" id="photograph-3" data-depth="1.20"></div></div>');
  break;
 case 4:
  $('#parallax').fadeIn('slow').html('<div id="climbing" class="enjoy-background scene active" data-limit-x="3" data-limit-y="3"><div class="layer climbing" id="climbing-1" data-depth="-0.10"></div><div class="layer climbing" id="climbing-2" data-depth="0.40"></div><div class="layer climbing" id="climbing-3" data-depth="0.15"></div></div>');
  break;
  case 5:
  $('#parallax').fadeIn('slow').html('<div id="chef" class="enjoy-background scene active" data-limit-x="3" data-limit-y="3"><div class="layer chef" id="chef-1" data-depth="-0.20"></div><div class="layer chef" id="chef-2" data-depth="0.20"></div><div class="layer chef" id="chef-3" data-depth="0.10"></div></div>');
  break;
  case 6:
  $('#parallax').fadeIn('slow').html('<div id="fashion" class="enjoy-background scene active" data-limit-x="3" data-limit-y="3"><div class="layer fashion" id="fashion-1" data-depth="0.05"></div><div class="layer fashion" id="fashion-2" data-depth="0.30"></div><div class="layer fashion" id="fashion-3" data-depth="0.20"></div></div>');
  break;
  case 7:
  $('#parallax').fadeIn('slow').html('<div id="singer" class="enjoy-background scene active" data-limit-x="3" data-limit-y="3"><div class="layer singer" id="singer-1" data-depth="0.15"></div><div class="layer singer" id="singer-2" data-depth="0.05"></div><div class="layer singer" id="singer-3" data-depth="-0.20"></div><div class="layer singer" id="singer-4" data-depth="0.40"></div></div>');
  break;
}
$('.scene').each(function() {
var parallax = new Parallax(this);	
});
}
function loadParallaxImage(){
	random = Math.floor((Math.random()*7)+1);
	ParallaxImage(random);
}
function NextParallaxImage(){
	if(random == 7) random = 1; 
	else random ++;
	
	ParallaxImage(random)
}

loadParallaxImage();
$("#refresh").click(NextParallaxImage);
 // remove class on focus
 $('#email').focus(function(){

  $('#sign-up-form').removeClass('error');

 })
 
 $('.job-list a').click(function() {
 	 var active = $(this).attr('data-toggle');
  if($('#job-info').hasClass('open')){
	if(!$('#job-info #' + active ).hasClass('visible')){
 	 $('#job-info .visible').removeClass('visible').fadeOut('slow');
 	 $('#job-info #' + active ).addClass('visible').fadeIn('slow');
 	 	}
	 }else{
	 $('#job-info .visible').removeClass('visible').fadeOut('slow');
 	 $('#job-info #' + active ).addClass('visible').fadeIn('slow');
	 $('#job-info').fadeIn('slow').addClass('open');  
	 }
 });
 $('#job-info .close-black').click(function() {
	$('#job-info').fadeOut('slow').removeClass();
	$('#job-info .visible').removeClass('visible').fadeOut('slow');  
 });
 
$(".enjoy-video-play").click(openVideo); 
$("#job-trigger").click(openJobs); 
$('#job-back').click(closeJobs);
//$("#beta-login-trigger").click(openLogin); 

  // send the email
  $('.submit').click(function(event){ 
        event.preventDefault();

        if(!$('#email').val().match(EMAIL_REGEX)) {

          $('#sign-up-form').removeClass().addClass('error');
          // track failed signups
          ga('send', 'event', 'signup', 'submit', 'invalid', 1);

        } else {
			$('.processing').fadeIn();
			setTimeout(function () {
          $.ajax({

            url : '/subscribe.php',
            type : 'post',
            dataType : 'json',

            data : {
              email : $('#email').val()
            },





            success : function(data) {

              if(data.status == 'EXISTS') {

                $('.processing').fadeOut();
                $('.warning').fadeIn('slow').delay(1000).fadeOut('slow');//this is only if email exist!!
                ga('send', 'event', 'signup', 'submit', 'existing', 1);

              } else {
              
                $('.processing').fadeOut();
                $('#enjoy-white-background').removeClass('finish');
                $('#enjoy-white-background #category-pick').show();
			          $('#enjoy-white-background #finish').hide();
                $('#enjoy-white-background').fadeIn();
                $('#email').attr('data-email', $('#email').val());
                $('#email').val('');
                ga('send', 'event', 'signup', 'submit', 'valid', 1);

              }

            },




            error : function(data) {

              $('#sign-up-form').removeClass().addClass('error');

              ga('send', 'event', 'signup', 'submit', 'error', 1);

            }

          });
}, 1000);
          

        } 
  }); 

	$('.interest-list li').click(function(event){ 
      event.preventDefault();

      var groupName = $('img', this).attr('data-group');

      $.ajax({

        url : '/subscribe.php',
        type : 'post',
        dataType : 'json',

        data : {
          email : $('#email').attr('data-email'),
          group : groupName
        },

        complete : function(data) {

          $('#enjoy-white-background').addClass('finish');
          $('#enjoy-white-background #category-pick').fadeOut();
          $('#enjoy-white-background #finish').fadeIn();
          ga('send', 'event', 'signup', 'category', groupName, 1);

        }

      });

      
  }); 
	
	 
 });