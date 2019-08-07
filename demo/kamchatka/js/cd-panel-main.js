jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});

	
	
	//open the lateral panel
	$('.cd-btn2').on('click', function(event){
		event.preventDefault();
		$('.cd-panel2').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel2').on('click', function(event){
		if( $(event.target).is('.cd-panel2') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel2').removeClass('is-visible');
			event.preventDefault();
		}
	});		
	
	
	//open the lateral panel
	$('.cd-btn3').on('click', function(event){
		event.preventDefault();
		$('.cd-panel3').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel3').on('click', function(event){
		if( $(event.target).is('.cd-panel3') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel3').removeClass('is-visible');
			event.preventDefault();
		}
	});		






	//open the lateral panel
	$('.cd-btn4').on('click', function(event){
		event.preventDefault();
		$('.cd-panel4').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel4').on('click', function(event){
		if( $(event.target).is('.cd-panel4') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel4').removeClass('is-visible');
			event.preventDefault();
		}
	});


	//open the lateral panel
	$('.cd-btn5').on('click', function(event){
		event.preventDefault();
		$('.cd-panel5').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel5').on('click', function(event){
		if( $(event.target).is('.cd-panel5') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel5').removeClass('is-visible');
			event.preventDefault();
		}
	});

	
	
	//open the lateral panel
	$('.cd-btn6').on('click', function(event){
		event.preventDefault();
		$('.cd-panel6').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel6').on('click', function(event){
		if( $(event.target).is('.cd-panel6') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel6').removeClass('is-visible');
			event.preventDefault();
		}
	});	
	




	//open the lateral panel
	$('.cd-btn7').on('click', function(event){
		event.preventDefault();
		$('.cd-panel7').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel7').on('click', function(event){
		if( $(event.target).is('.cd-panel7') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel7').removeClass('is-visible');
			event.preventDefault();
		}
	});	
	


	//open the lateral panel
	$('.cd-btn8').on('click', function(event){
		event.preventDefault();
		$('.cd-panel8').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel8').on('click', function(event){
		if( $(event.target).is('.cd-panel8') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel8').removeClass('is-visible');
			event.preventDefault();
		}
	});	









	
});