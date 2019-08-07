
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/

jQuery(document).ready(function($){
$("#img_init").click(function(){
$("#uploadfile").click();
return false;
});

$("#print-Button").unbind().bind('click',function(){
	 
	$('#printable-area').printElement({
		leaveOpen:true,
        printMode:'popup',
        pageTitle:'Invoice.html'
        	});
	return false;
});

$("form").unbind().bind('submit',function(){
	$("#message").html('Думаем..');
	$("#message").fadeIn();
});

});
