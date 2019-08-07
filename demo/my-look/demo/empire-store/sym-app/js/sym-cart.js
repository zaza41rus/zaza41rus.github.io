function sym_get_req_var(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}
//var a = JSON.stringify(jsonData); alert(a);
jQuery(function($) {
$(document).ready(function(){
	//See if #symbiotic-cart-path exists or not
	if($("#symbiotic-cart-path").length == 0){
	var cartJSpath = $('script[src*="sym-cart.js"]').attr('src');
	var SymLastIndex = cartJSpath.lastIndexOf("/js/sym-cart.js");
	var cartFilePath = cartJSpath.substr(0,SymLastIndex);
	if(cartFilePath == ''){
	var pathArray = window.location.pathname.split( '/' );
	var newPathname = "";
	var len = (pathArray.length - 1);
	for (i = 0; i < len ; i++) {
		newPathname += pathArray[i];
		newPathname += "/";
	}
	var slashLast = cartJSpath.lastIndexOf("/");
	var Pathname = newPathname.substr(0,slashLast);
	var cartpath = Pathname + cartFilePath;
	}else{
	var cartpath = cartFilePath;
	}
	 $("body").append("<span style=\"display:none;\" id=\"symbiotic-cart-path\">" + cartpath + "</span>");
	 $("body").append("<span style=\"display:none;\" id=\"symbiotic-cart-js-path\">" + cartJSpath + "</span>");
	}else{
	var cartpath = $("#symbiotic-cart-path").html();
	var cartJSpath = $("#symbiotic-cart-js-path").html();
	}
	//#symbiotic-cart-path Created / Or Loaded
	if($("#SymCartBox").length == 0){
	$("body").append("<div id=\"SymCartBox\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"largemodal\" aria-hidden=\"true\"><div class=\"modal-dialog modal-lg\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\"></span><span class=\"sr-only\"><i class=\"icon-x\"></i></span></button><div class=\"modal-title text-center\" id=\"SymModalTitle\"></div></div><div class=\"modal-body\" id=\"SymModalBody\"> </div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default btnclose\" data-dismiss=\"modal\"><i class=\"icon-x\"></i></button></div></div></div></div>");
	}
	if($("#SymAlertBox").length == 0){
	$("body").append("<div id=\"SymAlertBox\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"smallmodal\" aria-hidden=\"true\"><div class=\"modal-dialog modal-sm\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\"></span><span class=\"sr-only\"><i class=\"icon-x\"></i></span></button><div class=\"modal-title text-center\" id=\"SymAlertModalTitle\"></div></div><div class=\"modal-body\" id=\"SymAlertModalBody\"> </div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default btnclose\" data-dismiss=\"modal\"><i class=\"icon-x\"></i></button></div></div></div></div>");
	}
	if($("#blueimp-gallery").length == 0){
	$("body").append("<div id=\"blueimp-gallery\" class=\"blueimp-gallery\"><div class=\"slides\"></div><h3 class=\"title\"></h3><a class=\"prev\">‹</a>   <a class=\"next\">›</a><a class=\"close\">×</a><a class=\"play-pause\"></a><ol class=\"indicator\"></ol><div class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" aria-hidden=\"true\"></button><h4 class=\"modal-title\"></h4></div><div class=\"modal-body next\"></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default pull-left prev\"><i class=\"fa fa-chevron-left\"></i></button><button type=\"button\" class=\"btn btn-primary next\"><i class=\"fa fa-chevron-right\"></i></button> </div></div></div></div></div>");
	}
	
    $('#image-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery($('#sym-pro-images a'), $('#blueimp-gallery').data());
    });

// Core Events activation

	$(".sym-btn").symCreateButtons();
	$(".sym-img").symShowImage();
 	$(".sym-desc").symShowDescription();
	$(".sym-items").symShowCartItems();
	$(".sym-total").symShowTotal();
	$(".sym-count-items").symCountItems();
	$(".sym-product-lb").unbind().bind('click',function(){	$(this).symShowProductLightbox(); return false;	});
	$(".sym-cart-lb").unbind().bind('click',function(){	$(document).symShowCartLightbox(); return false; });
	$(".sym-user-lb").unbind().bind('click',function(){	$(document).symShowUserLightbox(); return false; });
	$(".sym-search-lb").unbind().bind('click',function(){	$(document).symSearchLightbox(); return false; });
//Callback	
 if(sym_get_req_var('sym-callback')){
	$.ajax({
			dataType: "json",
	  		type: "POST",
	  		url: cartpath + "/index.php?c=sym-callback-processor-json",
	  		data:"action=checkPending",
	  		success: function(jsonData){
			if(jsonData.pending == true){
				$("#SymModalTitle").text('Информация о заказе');
				$("#SymModalBody").html("");
				$('#SymModalBody').addClass('sym-loading');
				$('#SymCartBox').modal();
				var cartHTML ="";
				cartHTML += "<div class=\"alert alert-info\" role=\"alert\" id=\"sym-cart-lb-alert\">Получили Ваш заказ. В ближайшее время мы вам перезвоним для согласования веса продуктов и итоговой стоимости.</div>";
				cartHTML += "<h3>Номер заказа: "+jsonData.id+"</h3>";
				cartHTML += "<div class=\"row\"><div class=\"col-md-12\"><table class=\"sym-cart-table table table-hover \">";
				cartHTML += "<thead><tr><th class=\"sym-hide\"></th><th class=\"sym-hide\"></th><th>К оплате</th><th class=\"sym-hide\">Скидка</th><th class=\"sym-hide\">Такса</th><th>Доставка</th><th>Метод оплаты</th><th class=\"sym-hide\">Статус оплаты</th><th class=\"sym-hide\">Статус доставки</th><tbody>";
				cartHTML += "<tr><td class=\"sym-hide\"></td><td class=\"sym-hide\"><td class=\"bablo\" data-title=\"Net amount\">"+jsonData.currency +jsonData.net+"</td><td class=\"sym-hide\" data-title=\"Discount Coupon\">"+jsonData.currency +jsonData.discount+"("+jsonData.coupon+")</td><td class=\"sym-hide\" data-title=\"Tax\">"+jsonData.currency +jsonData.tax+"</td><td class=\"Shipping\ data-title=\"Shipping\">"+jsonData.currency +jsonData.shipping+"</td><td data-title=\"Payment Method\">"+jsonData.gateway+"</td><td class=\"sym-hide\" data-title=\"Payment Status\">"+jsonData.payment+"</td><td class=\"sym-hide\" data-title=\"Order Status\">"+jsonData.status+"</td></tr>";
				cartHTML += "</tbody></table></div></div>";
				cartHTML += "<div class=\"row\"><div class=\"col-md-12\"><table class=\"sym-cart-table table table-hover \">";
				cartHTML +="<thead><tr><th>#</th><th></th><th>Продукт</th><th>Опции</th><th>Цена</th><th>Кол-во</th><th>Итог</th></tr></thead><tbody>";
				var c = 0;
				$.each( jsonData.products , function(idx, item) {
				c++;
						price = item.price * item.count ;
						price = price.toFixed(2)
								if(item.opt_name != null){
								option = item.opt_name;
								}else{
								option ="--";
								}
					cartHTML += "<tr><td data-title=\"Number\">"+c+"</td><td data-title=\"Product\"><span class=\"sym-img\" data-show-lightbox=\"false\" data-thumbnail=\"true\" data-size=\"small\" data-pid=\""+item.id+"\"></span></td><td data-title=\"Product\">"+item.name+"</td><td data-title=\"Option\">"+option+"</td><td  data-title=\"Price\">"+jsonData.currency +item.price+"</td><td data-title=\"Quantity\">"+item.count+"</td><td data-title=\"Total\">"+jsonData.currency + price+"</td></tr>";
				});
				
				var total = jsonData.net;
				var footerHTML ="";
				footerHTML += "<table class=\"sym-cart-info-table\">";
				footerHTML += "<tr><td class=\"text-right\">Стоимость продуктов:</td><td>"+jsonData.currency + jsonData.amount + "</td></tr>";
				footerHTML += "</table>";	
				
				cartHTML += "</tbody><tfoot><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>"+footerHTML+"</td></tr></tfoot></table></div></div>";
				$('#SymModalBody').removeClass('sym-loading');
				$("#SymModalBody").html(cartHTML);
				$.ajax({
					 	dataType: "json",
						type: "POST",
						url: cartpath + "/index.php?c=sym-callback-processor-json",
						data:"action=sendMail&order="+jsonData.id,
							success: function(mailStatus){
								if(typeof mailStatus.error != 'undefined'){
								alert(mailStatus.error);
							}}
						});
				$.getScript(cartJSpath);
			return false;
			}
			return false;
			}
			});
	}

});
// Symbiotic Functions
jQuery.fn.symCreateButtons = function(){
 var cartpath = $("#symbiotic-cart-path").html();
 var cartJSpath = $("#symbiotic-cart-js-path").html();
	this.each(function(){
		var id = $(this).attr('data-pid');
		var button_text = $(this).attr('data-text');
		var price = $(this).attr('data-price');
		var name = $(this).attr('data-name');
		var qty = $(this).attr('data-qty');
		var curr = $(this) ;
		curr.removeClass('sym-btn');
		curr.addClass('cart-button');
		curr.attr('id','pid-'+id);
		curr.html('Loading..');
		$.ajax({
			dataType: "json",
	  		type: "POST",
	  		url: cartpath + "/index.php?c=sym-cart-json",
	  		data:"product_id=" + id +"&type=btn",
	  		success: function(jsonData){
			if(typeof jsonData.error != 'undefined'){
			curr.html(jsonData.error);
			return false;
			}
			var buttonHTML ="";
			buttonHTML +="<form class=\"symbiotic-form form-horizontal text-left\" method=\"post\"><input name=\"product_id\" type=\"hidden\" value=\"" +id + "\"><input name=\"action\" type=\"hidden\" value=\"add\"><input name=\"ajax\" type=\"hidden\" value=\"true\">";
			if(name == 'show' ){
			buttonHTML += "<div class=\"col-md-12 sym-form-name\">"+ jsonData.name +"</div>";
			}
			if(typeof jsonData.options != 'undefined'){
			buttonHTML += "<div class=\"form-group  sym-form-options\"><label class=\"control-label col-md-6\" >Product Options</label>			<div class=\"col-md-6\"><select class=\"form-control\" name=\"option\">";
				$.each( jsonData.options , function(idx, opt) {				
				buttonHTML += "<option value=\"" + opt.id + "\">" + opt.name;
				if(price == 'show' ){
				buttonHTML += "("  + jsonData.currency + " " + opt.price +  ")";
				}
				buttonHTML += "</option>";
				});
			buttonHTML += "</select></div></div>";
			}else{
			if(price == 'show' ){
			buttonHTML += "<div class=\"form-group sym-form-price\"><label class=\"control-label col-md-6\" >Price</label><div class=\"col-md-6\" >" + jsonData.currency + jsonData.price + "</div></div>";
			}
			}
			if(qty == 'show' ){
			buttonHTML += "<div class=\"form-group sym-form-quantity\"><label class=\"control-label col-md-6\" >Quantity</label><div class=\"col-md-6\"><input name=\"qty\" class=\"form-control \"  type=\"text\" value=\"1\"></div></div>";
			}else{
			buttonHTML +=  "<input name=\"qty\" type=\"hidden\" value=\"1\">";
			}
			if(typeof button_text != 'undefined'){
			var btnText = button_text;
			}else{
			var btnText = 'Ок';
			}			
			buttonHTML += "<div class=\"form-group\"><div class=\"col-md-6\"></div><div class=\"col-md-6\"><button class='icon-cartplus' type=\"submit\" >" + btnText + "</button></div></div>";
			buttonHTML +="</form>";
			curr.html(buttonHTML );
			$(".symbiotic-form").unbind().bind('submit',function(){
			var form = $(this);
			var serialized = $(form).serialize();
				$('#SymAlertModalBody').addClass('sym-loading');
				$("#SymAlertModalTitle").text('Добавление продукта в корзину');
				$("#SymAlertModalBody").html("");
				$('#SymAlertBox').modal();
				/*Thanks  http://eligeske.com/jquery/jquery-sending-multiple-ajax-requests-all-by-itself-kind-of/ */	
				$.ajax({
					dataType: "json",
					type:"POST",
					url: cartpath + "/index.php?c=sym-cart-processor-json",
					data:serialized ,
					success: function(jsonGetData){
						$('#SymAlertModalBody').removeClass('sym-loading');
						if(typeof jsonGetData.error != 'undefined'){
						$("#SymAlertModalBody").text(jsonGetData.error);
						return false;
						}
						$("#SymAlertModalBody").text(jsonGetData.message);
						$.getScript(cartJSpath);						
						return false;
					}
				});
				return false;
			});
		}});
	
	});
return false;
};

jQuery.fn.symShowUserLightbox = function(){
	var cartpath = $("#symbiotic-cart-path").html();
	var cartJSpath = $("#symbiotic-cart-js-path").html();
		$("#SymModalTitle").text('Панель Клиента');
		$("#SymModalBody").html("");
		$('#SymModalBody').addClass('sym-loading');
		$('#SymCartBox').modal();
		$("#SymModalBody").html("<iframe src=\""+cartpath+"/v/\" id=\"sym-user-frame\"  style=\"width:100%;border:none;\" ></iframe>");
		$('#SymModalBody').removeClass('sym-loading');
		$('#sym-user-frame').load(function() {
			this.style.height =	this.contentWindow.document.body.offsetHeight + 'px';
			});
	return false;
	}
	
jQuery.fn.symSearchLightbox = function(){
	var cartpath = $("#symbiotic-cart-path").html();
	var cartJSpath = $("#symbiotic-cart-js-path").html();
		$("#SymModalTitle").text('Search');
		$("#SymModalBody").html("");
		$('#SymModalBody').addClass('sym-loading');
		$('#SymCartBox').modal();
		var searchHTML ="";
		searchHTML ="<div class=\"row\"><div class=\"col-md-12\"><form method=\"get\" id=\"sym-search-form\"class=\"form-horizontal\"><div class=\"form-group col-md-10\"> <label class=\"sr-only\">Search Product</label><input class=\"form-control\" id=\"sym-query\" type=\"search\" name=\"q\" placeholder=\"Start searching...\" required></div>&nbsp;<button type=\"submit\" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-search\"></i> Search</button></form></div></div><div clas=\"row\"><div clas=\"col-md-12\" id=\"sym-results\"></div></div>";
		$("#SymModalBody").html(searchHTML);
		$("#sym-query").unbind().bind('keyup',function(){
		var keywords = $("#sym-query").val().length;
			if(keywords > 4){
			var query = $("#sym-query").val()
			$.ajax({
			dataType: "json",
	  		type: "POST",
			url: cartpath + "/index.php?c=sym-search-json",
	  		data:"query=" + query ,
	  		success: function(jsonData){
				var trimmedString = "";
				var resHTML = "";
				if(typeof jsonData.products.length == 'undefined'){
				$("#sym-results").html("<h3 class=\"text-center\">No results found</h3>");
				}else{
				$.each(jsonData.products , function(idx, product) {
					var trimmedString = product.description.substr(0, 400);
					trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
					resHTML += "<div class=\"row\"><div class=\"col-md-12\"><a href=\"#\" class=\"pull-left sym-product-res-lb\" data-pid=\""+product.id+"\"><img src=\""+jsonData.img_path +"small-"+ product.image+"\" class=\"sym-media-img img-thumbnail media-object\" ></a><div class=\"sym-media-body\"><h4 class=\"media-heading\"><a href=\"#\" class=\"sym-product-res-lb\" data-pid=\""+product.id+"\">"+product.name+" </a><small><i>Price:"+jsonData.currency+ product.price+"</i></small></h4><p>"+trimmedString+"</p></div></div></div><br>";
				});
				$("#sym-results").html(resHTML);
				$(".sym-product-res-lb").unbind().bind('click',function(){	$(this).symShowProductLightbox(); return false;	});
				}
			}			
			});
			}
		});
		$("#sym-search-form").unbind().bind('submit', function(){
					var query = $("#sym-query").val()
			$.ajax({
			dataType: "json",
	  		type: "POST",
			url: cartpath + "/index.php?c=sym-search-json",
	  		data:"query=" + query ,
	  		success: function(jsonData){
				var trimmedString = "";
				var resHTML = "";
				if(typeof jsonData.products.length == 'undefined'){
				$("#sym-results").html("<h3 class=\"text-center\">No results found</h3>");
				}else{
				$.each(jsonData.products , function(idx, product) {
					var trimmedString = product.description.substr(0, 400);
					trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
					resHTML += "<div class=\"row\"><div class=\"col-md-12\"><a href=\"#\" class=\"pull-left sym-product-res-lb\" data-pid=\""+product.id+"\"><img src=\""+jsonData.img_path +"small-"+ product.image+"\" class=\"sym-media-img img-thumbnail media-object\" ></a>    <div class=\"sym-media-body\"><h4 class=\"media-heading\"><a href=\"#\" class=\"sym-product-res-lb\" data-pid=\""+product.id+"\">"+product.name+" </a><small><i>Price:"+jsonData.currency+ product.price+"</i></small></h4><p>"+trimmedString+"</p></div></div></div><br>";
				});
				$("#sym-results").html(resHTML);
				$(".sym-product-res-lb").unbind().bind('click',function(){	$(this).symShowProductLightbox(); return false;	});
				}
			}			
			});
		
		return false;
		});
		$('#SymModalBody').removeClass('sym-loading');
	return false;
	}


jQuery.fn.symShowProductLightbox = function(){
	var cartpath = $("#symbiotic-cart-path").html();
	var cartJSpath = $("#symbiotic-cart-js-path").html();
	var id = $(this).attr('data-pid');
		$("#SymModalTitle").text('Product Details');
		$("#SymModalBody").html("");
		$('#SymModalBody').addClass('sym-loading');
		$('#SymCartBox').modal();
			$.ajax({
			dataType: "json",
	  		type: "POST",
			url: cartpath + "/index.php?c=sym-cart-json",
	  		data:"product_id=" + id ,
	  		success: function(jsonData){
			$("#SymModalTitle").html(jsonData.name);
			var buttonHTML ="";
			buttonHTML +="<form class=\"lb-symbiotic-form form-horizontal text-left\" method=\"post\"><input name=\"product_id\" type=\"hidden\" value=\"" +id + "\"><input name=\"action\" type=\"hidden\" value=\"add\"><input name=\"ajax\" type=\"hidden\" value=\"true\">";
			buttonHTML += "<div class=\"col-md-12 sym-form-name\">"+ jsonData.name +"</div>";
			if(typeof jsonData.options != 'undefined'){
			buttonHTML += "<div class=\"form-group  sym-form-options\"><label class=\"control-label col-md-6\" >Product Options</label><div class=\"col-md-6\"><select class=\"form-control\" name=\"option\">";
				$.each( jsonData.options , function(idx, opt) {				
				buttonHTML += "<option value=\"" + opt.id + "\">" + opt.name;
				buttonHTML += "("  + jsonData.currency + " " + opt.price +  ")";
				buttonHTML += "</option>";
				});
			buttonHTML += "</select></div></div>";
			}else{
			buttonHTML += "<div class=\"form-group sym-form-price\"><label class=\"control-label col-md-6\" >Цена</label><div class=\"col-md-6\" >" + jsonData.currency + jsonData.price + "</div></div>";
			}
			buttonHTML += "<div class=\"form-group sym-form-quantity\"><label class=\"control-label col-md-6\" >Кол-во</label><div class=\"col-md-6\"><input name=\"qty\" class=\"form-control \"  type=\"text\" value=\"1\"></div></div>";		
			buttonHTML += "<div class=\"form-group\"><div class=\"col-md-6\"></div><div class=\"col-md-6\"><button class='btn btn-primary addtoCart' type=\"submit\" ><i class=\"icon-cartplus modal_cartplus_fz\"></i></button></div></div>";
			buttonHTML +="</form>";
				var imgLinks = "";
				$.each(jsonData.images , function(idx, img) {				
						imgLinks += "<a href=\"" + jsonData.img_path + img + "\" title=\"\" data-gallery=\"#sym-product-lb-"+id+"-img-lb\"><img class=\"img-responsive img-thumbnail zoom-in\" src=\"" + jsonData.img_path + "small-" + img + "\"></a> ";
				});
			var lbHTML = "";
			
			lbHTML += "<div class=\"row\"><div class=\"col-md-5\"><a href=\"" + jsonData.img_path + jsonData.image + "\" title=\"\" data-gallery=\"#sym-product-lb-"+id+"-img-lb\"><img class=\"img-responsive img-thumbnail zoom-in\" src=\"" + jsonData.img_path + jsonData.image + "\" /></a><div id=\"sym-pro-images\">"+ imgLinks + "</div></div><div class=\"col-md-7\"><div class=\"alert  sym-hide\" role=\"alert\" id=\"sym-product-lb-alert\"></div><div class=\"sym-product-lb-form\">"+buttonHTML+"</div><div class=\"sym-product-lb-desc \"><p>"+jsonData.description+"</p></div></div></div>";
			$("#SymModalBody").html(lbHTML);
			$.getScript(cartJSpath);
			$(".lb-symbiotic-form").unbind().bind('submit',function(){
			var form = $(this);
			var serialized = $(form).serialize();
				/*Thanks  http://eligeske.com/jquery/jquery-sending-multiple-ajax-requests-all-by-itself-kind-of/ */	
				$.ajax({
					dataType: "json",
					type:"POST",
					url: cartpath + "/index.php?c=sym-cart-processor-json",
					data:serialized ,
					success: function(jsonGetData){
						$('#sym-product-lb-alert').hide();
						$('#sym-product-lb-alert').removeClass("alert-danger");
						$('#sym-product-lb-alert').removeClass("alert-success");
						$('#sym-product-lb-alert span').text("");
						if(typeof jsonGetData.error != 'undefined'){
						$('#sym-product-lb-alert').addClass("alert-danger");
						$('#sym-product-lb-alert').text(jsonGetData.error);
						$('#sym-product-lb-alert').show();
						return false;
						}
						$('#sym-product-lb-alert').addClass("alert-success");	
						$('#sym-product-lb-alert').text(jsonGetData.message);	
						$('#sym-product-lb-alert').show();
						$.getScript(cartJSpath);	
						return false;
					}
				});
				return false;
			});
			$('#SymModalBody').removeClass('sym-loading');
			}
			});
			return false;
};

jQuery.fn.symShowImage = function(){
 var cartpath = $("#symbiotic-cart-path").html();
 var cartJSpath = $("#symbiotic-cart-js-path").html();
	this.each(function(){
		var id = $(this).attr('data-pid');
		var size = $(this).attr('data-size');
		var responsive = $(this).attr('data-responsive');
		var round = $(this).attr('data-rounded');
		var circle = $(this).attr('data-circle');
		var thumb = $(this).attr('data-thumbnail');
		var lb = $(this).attr('data-show-lightbox');
		var curr = $(this) ;
		curr.addClass('cart-image');
		curr.removeClass('sym-img');
		curr.html('Loading image..');
		$.ajax({
			dataType: "json",
	  		type: "POST",
			url: cartpath + "/index.php?c=sym-cart-json",
	  		data:"product_id=" + id + "&type=img",
	  		success: function(jsonData){
			if(typeof jsonData.error != 'undefined'){
			curr.html(jsonData.error);
			return false;
			}
			var imgHTML ="";
			if(lb != 'false'){
			imgHTML +="<a href=\"" + jsonData.img_path + jsonData.image + "\" title=\"\" data-gallery=\"#sym-product-"+id+"-img-lb\">";
			}
			imgHTML +="<img src=\"" + jsonData.img_path ;
			if(typeof size != 'undefined'){
			if(size == 'small' || size == 'medium' || size == 'large' ){
			imgHTML += size + "-";
			}}
			imgHTML += jsonData.image +"\" ";
			var imgClass ="";
			if(responsive != 'false'){
			imgClass += "img-responsive ";
			}
			if(typeof round != 'undefined'){
			imgClass += "img-rounded ";
			}
			if(typeof thumb != 'undefined'){
			imgClass += "img-thumbnail ";
			}	
			if(typeof circle != 'undefined'){
			imgClass += "img-circle ";
			}
			if(lb != 'false'){
			imgClass += "zoom-in ";
			}
			imgHTML += " class=\""+ imgClass +"\"";
			imgHTML += " />";
			if(lb != 'false'){
			imgHTML += "</a>";
				var imgLinks = "";
				$.each( jsonData.images , function(idx, img) {				
						imgLinks += "<a class=\"sym-hide\" href=\"" + jsonData.img_path + img + "\" title=\"\" data-gallery=\"#sym-product-"+id+"-img-lb\">Image</a> ";
				});
				imgHTML += imgLinks;
			}
			curr.html(imgHTML);
		}});
	});
return false;
};	

jQuery.fn.symShowDescription = function(){
 var cartpath = $("#symbiotic-cart-path").html();
 var cartJSpath = $("#symbiotic-cart-js-path").html();
	this.each(function(){
		var id = $(this).attr('data-pid');
		$(this).addClass('cart-description');
		$(this).removeClass('sym-desc');
		var curr = $(this) ;
		$(this).html('Loading description..');
		$.ajax({
			dataType: "json",
	  		type: "POST",
	  		url: cartpath + "/index.php?c=sym-cart-json",
	  		data:"product_id=" + id + "&type=desc",
	  		success: function(jsonData){
			if(typeof jsonData.error != 'undefined'){
			curr.html(jsonData.error);
			return false;
			}
			curr.html(jsonData.description);
			return false;
			}
		});
	
	});
return false;
};

jQuery.fn.symCountItems = function(){
 var cartpath = $("#symbiotic-cart-path").html();
 var cartJSpath = $("#symbiotic-cart-js-path").html();
	this.each(function(){
		$(this).addClass('cart-count');
		var curr = $(this) ;
		$.ajax({
			dataType: "json",
	  		type: "POST",
	  		url: cartpath + "/index.php?c=sym-cart-processor-json",
	  		data:"action=count_cart",
	  		success: function(jsonData){
				if(typeof jsonData.error != 'undefined'){
				curr.html(jsonData.error);
				return false;
				}
			curr.html(jsonData.count);
			return false;	
		}
		});
	});

return false;
};

jQuery.fn.symShowTotal = function(){
 var cartpath = $("#symbiotic-cart-path").html();
 var cartJSpath = $("#symbiotic-cart-js-path").html();
	this.each(function(){
		var id = $(this).html();
		$(this).addClass('cart-total');
		var curr = $(this) ;
		$.ajax({
			dataType: "json",
	  		type: "POST",
	  		url: cartpath + "/index.php?c=sym-cart-processor-json",
	  		data:"action=show_total",
	  		success: function(jsonData){
				if(typeof jsonData.error != 'undefined'){
				curr.html(jsonData.error);
				return false;
				}
			curr.html(jsonData.currency +" "+jsonData.total);
			return false;	
		}
		});
	});
return false;
};

jQuery.fn.symShowCartItems = function(){
 var cartpath = $("#symbiotic-cart-path").html();
 var cartJSpath = $("#symbiotic-cart-js-path").html();
	this.each(function(){
		$(this).addClass('sym-cart-cart');
		var curr = $(this) ;
		curr.html("");
		curr.addClass('sym-loading');
		$.ajax({
			dataType: "json",
	  		type: "POST",
	  		url: cartpath + "/index.php?c=sym-cart-processor-json",
	  		data:"action=cart_items",
	  		success: function(jsonData){
				if(typeof jsonData.error != 'undefined'){
				curr.html(jsonData.error);
				return false;
				}
				if(jsonData.items == null){
				curr.removeClass('sym-loading');
				var customError = "";
				customError +="<div class=\"sym-shopping-cart-box\"><i class=\"icon-cart-small modal_cart-small_all\"></i></br>Your Cart is empty</div>";
				curr.html(customError);
				return false;
				}
				var cartHTML = "<table class=\"table table-striped\">";
				cartHTML += "<thead><tr><th>#</th><th>Product Name</th><th>Option</th><th>Price</th><th>Quantity</th><th>Total</th></tr></thead><tbody>";
				
				var price = "";
				var option = "";
				var c = "0";
					$.each( jsonData.items , function(idx, item) {
						c++;
						price = item.price * item.count ;
						price = price.toFixed(2)
								if(item.opt_name != null){
								option = item.opt_name;
								}else{
								option ="--";
								}
						cartHTML += "<tr><td>"+c+"</td><td>"+item.name+"</td><td>"+option+"</td><td>"+jsonData.currency +" "+item.price+item.count+"</td><td>"+jsonData.currency + price+"</td></tr>";
					});
				cartHTML += "</tbody></table>";
				curr.html(cartHTML);
				curr.removeClass('sym-loading');
			return false;	
		}
		});
	});
return false;
};

jQuery.fn.symShowCartLightbox = function(){
	var cartpath = $("#symbiotic-cart-path").html();
	var cartJSpath = $("#symbiotic-cart-js-path").html();
		$("#SymModalTitle").text('Корзина');
		$("#SymModalBody").html("");
		$('#SymModalBody').addClass('sym-loading');
		$('#SymCartBox').modal();
		$.ajax({
			dataType: "json",
	  		type: "POST",
	  		url: cartpath + "/index.php?c=sym-cart-processor-json",
	  		data:"action=cart_items",
	  		success: function(jsonData){
				if(typeof jsonData.error != 'undefined'){
				$('#SymModalBody').html(jsonData.error);
				return false;
				}
				if(jsonData.items == null){
				$('#SymModalBody').removeClass('sym-loading');
				var customError ="";
				customError +="<div class=\"row\"><div class=\"col-md-12 sym-shopping-cart-box\"><i class=\"icon-cart-small modal_cart-small_all\"></i></br>Ваша корзина пуста</div></div>";
				$('#SymModalBody').html(customError);
				return false;
				}
				var cartHTML = "<div class=\"alert  sym-hide\" role=\"alert\" id=\"sym-cart-lb-alert\"></div><div class=\"row\"><div class=\"col-md-12\"><form class=\"form-horizontal\" id=\"sym-cart-form\"><table class=\"sym-cart-table table table-hover \">";
				cartHTML += "<thead><tr><th>#</th><th></th><th>Продукт</th><th>Опции</th><th>Цена</th><th>Кол-во</th><th>Итого</th></tr></thead><tbody>";
				
				var price = "";
				var option = "";
				var c = "0";
					$.each( jsonData.items , function(idx, item) {
						c++;
						price = item.price * item.count ;
						price = price.toFixed(2);
						if(item.opt_name != null){
						option = item.opt_name;
						}else{
						option ="--";
						}
						
						cartHTML += "<tr><td data-title=\"Number\">"+c+"</td><td data-title=\"Product Image\"><img class=\"img-responsive img-thumbnail\" src=\"" + jsonData.img_path +"small-"+ item.img + "\" /></td><td data-title=\"Product\">"+item.name+"</td><td data-title=\"Option\">"+option+"</td><td data-title=\"Price\">"+jsonData.currency + item.price+"</td><td data-title=\"Quantity\"><div class=\"input-group  sym-count\"><input class=\"form-control\" name=\"item[" + idx + "][count]\" type=\"number\" min=\"0\" value=\"" +item.count+ "\"  id=\"item-" + idx + "\"><span class=\"input-group-btn\"><button data-item=\"" + idx + "\"class=\"btn btn-default sym-remove-item\" type=\"button\"><i class=\"icon-trashcan modal_delite\"></i></button></span></div><input type=\"hidden\" name=\"item[" + idx + "][id]\" value=\"" + idx + "\"  class=\"sym-array-item\"></td><td data-title=\"Total\">"+jsonData.currency + price+"</td></tr>";
					});
					
				var total = jsonData.total;
				var footerHTML ="";
				footerHTML += "<table class=\"sym-cart-info-table\">";
			
				
				if(jsonData.discount > 0){
				footerHTML += "<tr><td>Скидка:</td><td>"+jsonData.currency +  " "+jsonData.discount+"</td></tr>";
				}
				if(jsonData.tax > 0){
				footerHTML += "<tr><td>Таксовый сбор("+jsonData.taxRate+" %):</td><td>"+jsonData.currency + jsonData.tax + "</td></tr>";
				}
				if(jsonData.shipping_mode == '1' && jsonData.shippingPrice > 0){
				footerHTML += "<tr><td>Доставка</td><td>"+jsonData.currency +jsonData.shippingPrice+"</td></tr>";
				}
				footerHTML += "<tr><td><strong>ИТОГ:</strong></td><td><strong>"+jsonData.currency + total +"</strong></td></tr>";
				
				footerHTML += "</table>";	



				cartHTML += "</tbody><tfoot><tr><td></td><td></td><td></td><td></td><td></td><td></td>  <td class=\"relet\">В продаже имеется весовой товар. Окончательная цена будет оговариваться с Вами лично.</td>   </tfoot>";
				
				cartHTML += "</tbody><tfoot><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>"+footerHTML+"</td></tr></tfoot></table><button type=\"submit\" name=\"update\" class=\"btn btn-primary\"><i class=\"icon-sync modal_sync_all\"></i></button> <button type=\"button\"  name=\"empty\"  class=\"btn btn-default\" id=\"sym-cart-empty-button\"><i class=\"icon-trashcan modal_delite_all\"></i></button>       <button  name=\"continue\" class=\"btn btn-primary\" id=\"sym-do-checkout\"><i class=\"icon-arrow-right modal_arrow-right_all\"></i></button> </form></div></div>";
				
				var coupnsHTML = "";

				coupnsHTML +="";
				
				cartHTML += coupnsHTML;
				
				$('#SymModalBody').html(cartHTML);
					$(".sym-remove-item").unbind().bind('click',function(){
						var itemId = $(this).attr('data-item');
						$("#item-" + itemId).val('0');
						$("#sym-cart-form").submit();
						return false;
					});
					$("#sym-cart-form").unbind().bind('submit',function(){
					$('#sym-cart-lb-alert').removeClass("alert-danger");
					$('#sym-cart-lb-alert').removeClass("alert-success");
					$('#sym-cart-lb-alert').text("Пожалуйста подождите...мы тупим!");
					$('#sym-cart-lb-alert').addClass("alert-info");
					$('#sym-cart-lb-alert').show();
					var serialize = $("#sym-cart-form").serialize();
							$.ajax({
							dataType: "json",
							type: "POST",
							url: cartpath + "/index.php?c=sym-cart-processor-json&action=update",
							data:serialize,
							success: function(updateCartjsonData){
								if(typeof updateCartjsonData.error != 'undefined'){
									$('#sym-cart-lb-alert').removeClass("alert-info");
									$('#sym-cart-lb-alert').addClass("alert-danger");
									$('#sym-cart-lb-alert').text(updateCartjsonData.error);
								return false;
								}
								$(document).symShowCartLightboxRefresh();
								return false;
							}});
						return false;	
					});
					
					$("#sym-remove-coupon").unbind().bind('click',function(){
					$("#sym-coupon-input").val('');
					$("#coupons-form").submit();
					return false;
					});
					
					$("#coupons-form").unbind().bind('submit',function(){
					$('#sym-cart-lb-alert').removeClass("alert-danger");
					$('#sym-cart-lb-alert').removeClass("alert-success");
					$('#sym-cart-lb-alert').text("Пожалуйста подождите...мы тупим!");
					$('#sym-cart-lb-alert').addClass("alert-info");
					$('#sym-cart-lb-alert').show();
					var serialize = $("#coupons-form").serialize();
							$.ajax({
							dataType: "json",
							type: "POST",
							url: cartpath + "/index.php?c=sym-cart-processor-json&action=coupon",
							data:serialize,
							success: function(couponCartjsonData){
								if(typeof couponCartjsonData.error != 'undefined'){
									$('#sym-cart-lb-alert').removeClass("alert-info");
									$('#sym-cart-lb-alert').addClass("alert-danger");
									$('#sym-cart-lb-alert').text(couponCartjsonData.error);
								return false;
								}
								$(document).symShowCartLightboxRefresh();
								return false;
							}});
						return false;	
					});
					$("#sym-cart-empty-button").unbind().bind('click',function(){
					$('#sym-cart-lb-alert').text("Пожалуйста подождите...мы тупим!");
					$('#sym-cart-lb-alert').addClass("alert-info");
					$('#sym-cart-lb-alert').show();
							$.ajax({
							dataType: "json",
							type: "POST",
							url: cartpath + "/index.php?c=sym-cart-processor-json",
							data:"action=empty",
							success: function(emptyCartjsonData){
								if(typeof emptyCartjsonData.error != 'undefined'){
									$('#sym-cart-lb-alert').removeClass("alert-info");
									$('#sym-cart-lb-alert').addClass("alert-danger");
									$('#sym-cart-lb-alert').text(emptyCartjsonData.error);
									return false;
								}
								$(document).symShowCartLightboxRefresh();
								return false;
							}});
					});
					
					$("#sym-do-checkout").unbind().bind('click',function(){
						$(document).symCheckout();
						return false;
					});
					
				$('#SymModalBody').removeClass('sym-loading');
				$.getScript(cartJSpath);
				return false;			
			}
		});
		return false;
	};
	
jQuery.fn.symCheckout = function(){
	var cartpath = $("#symbiotic-cart-path").html();
	var cartJSpath = $("#symbiotic-cart-js-path").html();
		$("#SymModalTitle").text('Оформление заказа');
		$("#SymModalBody").html("");
		$('#SymModalBody').addClass('sym-loading');
		$('#SymCartBox').modal();
		$.ajax({
			dataType: "json",
	  		type: "POST",
	  		url: cartpath + "/index.php?c=sym-user-json",
	  		data:"action=checklogin",
	  		success: function(login){
				if(typeof login.error != 'undefined'){
				$('#SymModalBody').html(login.error);
				return false;
				}
				if(login.loginStatus == false){
					var loginHTML = "<div class=\"alert sym-hide\" role=\"alert\" id=\"sym-cart-lb-alert\"></div>";
					loginHTML += "<div class=\"row\"><div class=\"col-md-6\"><h4 class=\"text-center\">Вход</h4><form class=\"form-horizontal\" method=\"post\" id=\"sym-checkout-login\"><div class=\"form-group\"><label class=\"col-md-3 control-label text-right\" for=\"inputEmail\">Email</label><div class=\"col-md-9\"><input class=\"form-control\" type=\"text\" id=\"inputEmail\" placeholder=\"Email\" name=\"email\" ></div></div><div class=\"form-group\"><label class=\"col-md-3 control-label text-right\" for=\"inputPassword\" >Пароль</label><div class=\"col-md-9\"><input class=\"form-control\" type=\"password\" id=\"inputPassword\" name=\"pwd\" placeholder=\"Password\" ></div></div><div class=\"form-group\"><div class=\"col-md-9 col-md-offset-3\"><input class=\"form-control\" type=\"hidden\" name=\"login\"><button type=\"submit\" class=\"btn btn-primary\">Войти</button></div></div><div class=\"form-group\"><div class=\"col-md-9 col-md-offset-3\"><button class=\"btn btn-link\" id=\"sym-sign-up\">Регистрация</button> <button class=\"btn btn-link\" id=\"sym-forgot\">Забыли пароль?</button></div></div></form></div><div class=\"col-md-6\"><h4 class=\"text-center\">Быстрая покупка</h4><form class=\"form-horizontal\" method=\"post\" id=\"sym-checkout-by-email\"><div class=\"form-group\"><label class=\"col-md-3 control-label text-right\" for=\"inputNewEmail\">Email</label><div class=\"col-md-9\"><input class=\"form-control\" type=\"text\" name=\"newEmail\" id=\"inputNewEmail\" placeholder=\"Email\"><input class=\"form-control\" type=\"hidden\" value=\"true\" name=\"checkoutWithEmail\"></div></div><div class=\"form-group\"><div class=\"col-md-9 col-md-offset-3\"><button type=\"submit\" class=\"btn btn-default\">Продолжить</button></div></div></form></div></div>";
					$('#SymModalBody').html(loginHTML);
					$('#SymModalBody').removeClass('sym-loading');
						$("#sym-sign-up").unbind().bind('click',function(){	$(document).symShowUserLightbox(); return false; });
						$("#sym-forgot").unbind().bind('click',function(){	$(document).symShowUserLightbox(); return false; });
						
						$("#sym-checkout-login").unbind().bind('submit',function(){
							var serialized = $("#sym-checkout-login").serialize();
							$('#sym-cart-lb-alert').removeClass("alert-danger");
							$('#sym-cart-lb-alert').removeClass("alert-success");
							$('#sym-cart-lb-alert').text("Пожалуйста подождите...мы тупим!");
							$('#sym-cart-lb-alert').addClass("alert-info");
							$('#sym-cart-lb-alert').show();
							$.ajax({
								dataType: "json",
								type:"POST",
								url: cartpath + "/index.php?c=sym-user-json&action=doLogin",
								data:serialized ,
								success: function(jsonData){
									if(typeof jsonData.error != 'undefined'){
									$('#sym-cart-lb-alert').text(jsonData.error);
									$('#sym-cart-lb-alert').addClass("alert-danger");
									return false;
									}
									$(document).symShowCheckoutLightboxRefresh();
									return false;
								}
							});
							return false;
						});	
						$("#sym-checkout-by-email").unbind().bind('submit',function(){
							var serialized = $("#sym-checkout-by-email").serialize();
							$('#sym-cart-lb-alert').removeClass("alert-danger");
							$('#sym-cart-lb-alert').removeClass("alert-success");
							$('#sym-cart-lb-alert').text("Пожалуйста подождите...мы тупим!");
							$('#sym-cart-lb-alert').addClass("alert-info");
							$('#sym-cart-lb-alert').show();
							$.ajax({
								dataType: "json",
								type:"POST",
								url: cartpath + "/index.php?c=sym-user-json&action=doEmailLogin",
								data:serialized ,
								success: function(jsonData){
									if(typeof jsonData.error != 'undefined'){
									$('#sym-cart-lb-alert').text(jsonData.error);
									$('#sym-cart-lb-alert').addClass("alert-danger");
									return false;
									}
									$(document).symShowCheckoutLightboxRefresh();
									return false;
								}
							});
							return false;
						});	
				return false;
				} /* if(login.loginStatus == false) */
				$.ajax({
				dataType: "json",
				type: "POST",
				url: cartpath + "/index.php?c=sym-cart-processor-json",
				data:"action=cart_items",
				success: function(cart){
					if(typeof cart.error != 'undefined'){
					$('#SymModalBody').removeClass('sym-loading');
					var customError ="";
					customError +="<div class=\"row\"><div class=\"col-md-12 sym-shopping-cart-box\"><i class=\"fa fa-shopping-cart\"></i></br>"+cart.error+"</div>";
					customError +="<div class=\"col-md-12 text-center\"><button class=\"btn btn-primary\" id=\"sym-view-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> Посмотреть корзину</button></div></div>"
					$('#SymModalBody').html(customError);
						$("#sym-view-cart-btn").unbind().bind('click',function(){
							$(document).symShowCartLightboxRefresh();
							return false;
						});
					}
					if(cart.shipping_min_items > cart.count){
					$('#SymModalBody').removeClass('sym-loading');
					var customError ="";
					customError +="<div class=\"row\"><div class=\"col-md-12 sym-shopping-cart-box\"><i class=\"icon-cart-small modal_cart-small_all\"></i></br>Вы должны по крайней мере "+cart.shipping_min_items+" позиций, прежде чем продолжить оформление</div>";
					customError +="<div class=\"col-md-12 text-center\"><button class=\"btn btn-primary\" id=\"sym-view-cart-btn\"><i class=\"icon-cartmy\"></i> View Cart</button></div></div>"
					$('#SymModalBody').html(customError);
					$("#sym-view-cart-btn").unbind().bind('click',function(){
						$(document).symShowCartLightboxRefresh();
						return false;
					});
					return false;
					}
					if(Number(cart.total) > Number(cart.max_order_total)){
						$('#SymModalBody').removeClass('sym-loading');
						var customError ="";
						customError +="<div class=\"row\"><div class=\"col-md-12 sym-shopping-cart-box\"><i class=\"icon-cart-big modal_cart-big_all\"></i></br>Максимальный лимит заказа "+cart.currency +cart.max_order_total+"</div>";
						customError +="<div class=\"col-md-12 text-center\"><button class=\"btn btn-primary\" id=\"sym-view-cart-btn\"><i class=\"icon-cartmy\"></i> Посмотреть корзину</button></div></div>"
						$('#SymModalBody').html(customError);
						$("#sym-view-cart-btn").unbind().bind('click',function(){
						$(document).symShowCartLightboxRefresh();
							return false;
						});
						return false;
					}
					if(Number(cart.total) < Number(cart.min_order_total)){
						$('#SymModalBody').removeClass('sym-loading');
						var customError ="";
						customError +="<div class=\"row\"><div class=\"col-md-12 sym-shopping-cart-box\"><i class=\"fa fa-shopping-cart\"></i></br>Минимальный лимит заказа "+cart.currency +cart.min_order_total+"</div>";
						customError +="<div class=\"col-md-12 text-center\"><button class=\"btn btn-primary\" id=\"sym-view-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> Посмотреть корзину</button></div></div>"
						$('#SymModalBody').html(customError);
						$("#sym-view-cart-btn").unbind().bind('click',function(){
						$(document).symShowCartLightboxRefresh();
							return false;
						});
						return false;
					}
						$.ajax({
						dataType: "json",
						type: "POST",
						url: cartpath + "/index.php?c=sym-checkout-processor-json",
						data:"action=init",
						success: function(checkout){
							if(typeof checkout.error != 'undefined'){
							$('#SymModalBody').removeClass('sym-loading');
							var customError ="";
							customError +="<div class=\"row\"><div class=\"col-md-12 sym-shopping-cart-box\"><i class=\"fa fa-shopping-cart\"></i></br>"+checkout.error+"</div>";
							customError +="<div class=\"col-md-12 text-center\"><button class=\"btn btn-primary\" id=\"sym-view-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> View Cart</button></div></div>"
							$('#SymModalBody').html(customError);
							$("#sym-view-cart-btn").unbind().bind('click',function(){
								$(document).symShowCartLightboxRefresh();
								return false;
								});
							}
							var checkoutHTML = "";
							var cartHTML ="";
							cartHTML += "<div class=\"alert sym-hide\" role=\"alert\" id=\"sym-cart-lb-alert\"></div><h3>Здравствуй, "+checkout.user+"</h3><div class=\"row\"><div class=\"col-md-8\"><div class=\"row\"><div class=\"col-md-6\"><h4>В вашей корзине</h4></div><div class=\"col-md-6 text-right\"><button class=\"btn btn-primary\" id=\"sym-view-cart-btn\"><i class=\"icon-cartmy modal_home\"></i> Изменить</button></div></div><div class=\"row\"><div class=\"col-md-12\"><table class=\"sym-cart-table table table-hover \">";
							cartHTML +="<thead><tr><th>Продукт</th><th>Опции</th><th>Цена</th><th>Кол-во</th><th>Стоимость</th></tr></thead><tbody>";
							var price = "";
							var option = "";
							var c = "0";
							$.each(cart.items , function(idx, item) {
								price = item.price * item.count ;
								price = price.toFixed(2);
								if(item.opt_name != null){
									option = item.opt_name;
								}else{
									option ="--";
							}
							cartHTML += "<tr><td data-title=\"Product\">"+item.name+"</td><td data-title=\"Option\">"+option+"</td><td data-title=\"Price\">"+cart.currency + item.price+"</td><td data-title=\"Quantity\"><div class=\"input-group  sym-count\">" +item.count+ "</div></td><td data-title=\"Total\">"+cart.currency + price+"</td></tr>";
							});
							var total = cart.total;
							var footerHTML ="";
							footerHTML += "<table class=\"sym-cart-info-table\">";

							if(cart.discount > 0){
								footerHTML += "<tr><td>Скидка:</td><td>"+cart.currency +  " "+cart.discount+"</td></tr>";
							}
							if(cart.tax > 0){
								footerHTML += "<tr><td>Сбор("+cart.taxRate+" %):</td><td>"+cart.currency + cart.tax + "</td></tr>";
							}
							if(cart.shipping_mode == '1' && cart.shippingPrice > 0){
								footerHTML += "<tr><td>Доставка</td><td>"+cart.currency +cart.shippingPrice+"</td></tr>";
							}
							footerHTML += "<tr><td><strong>ИТОГ:</strong></td><td><strong>"+cart.currency + total +"</strong></td></tr>";
							footerHTML += "</table>";	
							cartHTML += "</tbody><tfoot><tr><td></td><td></td><td></td><td></td><td>"+footerHTML+"</td></tr></tfoot></table></div></div></div>";
							var regionsHTML="";
							$.each(checkout.regions , function(idx, region) {
								regionsHTML += "<option value=\""+region.id+"\">"+region.name+"</option>";
							});
							var addressesHTML = "";
							var shippingPrice = ""
							$.each(checkout.addresses , function(idx, addr) {
							if(checkout.shipping_mode == '2'){
								shippingPrice = "Расходы по доставке:"+cart.currency +addr.shippingCharge;
							}
								addressesHTML += "<div class=\"radio\"><label><input type=\"radio\" name=\"address\" value=\""+addr.id+"\">"+ addr.name +"<br>"+addr.address+"<br>"+addr.country+"<br>Индекс: "+addr.zip+"<br>Мобильный: "+addr.mobile+"<br>"+shippingPrice+"<br></label></div>";
							});
							
							var gatewaysHTML=""
							$.each(checkout.gateways , function(idx, gateway) {
								gatewaysHTML += "<option value=\""+gateway.file+"\">"+gateway.name+"</option>";
							});
							var gatewaysFormHTML = "<div class=\"form-group\"><label class=\"control-label text-right\" for=\"sym-payment-method\">Метод оплаты:</label><select  class=\"form-control\"  name=\"gateway\" id=\"sym-payment-method\">"+gatewaysHTML+"</select></div>";
							
							var formHTML = "";
							formHTML += "<h4>Выбери адрес доставки</h4><form class=\"sym-checkout-form\" id=\"sym-checkout-form\">";
							formHTML += addressesHTML ;
							formHTML += "<div class=\"form-group\"><button class=\"btn btn-primary\" id=\"sym-add-address-btn\"><i class=\"icon-home modal_home\"></i> Добавить</button></div>" ;
							formHTML += gatewaysFormHTML ;
							formHTML += "<div class=\"form-group\"><button class=\"btn btn-primary btn-lg\" type=\"submit\"><i class=\"icon-rub modal_rub\"></i></button></div><div class=\"alert sym-hide\" role=\"alert\" id=\"sym-checkout-lb-alert\"></div>" ;
							formHTML += "</form>";
							cartHTML +="<div class=\"col-md-4\"><div class=\"row\"><div class=\"col-md-12\">"+formHTML+"</div><div class=\"col-md-12\" id=\"add-address\" style=\"display:none;\"><form class=\"\" a method=\"post\" id=\"sym-addr-add\"><h4>Добавить адрес</h4><div class=\"form-group\"><label class=\"control-label text-right\" for=\"addr-name\">Имя получателя:</label><input class=\"form-control\" type=\"text\" name=\"addr_name\" value=\"\" id=\"addr-name\" ></div><div class=\"form-group\"><label class=\"control-label text-right\" for=\"addr-addr\">Адрес:</label><textarea  class=\"form-control\" style=\"width:100%;height:100px;\" name=\"addr_addr\" id=\"addr-addr\"></textarea></div>		<div class=\"form-group\">		<label class=\"control-label text-right\" for=\"addr-c\">Страна:</label><input class=\"form-control\" type=\"text\" name=\"addr_c\" value=\"\" id=\"addr-c\" ></div><div class=\"form-group\"><label class=\"control-label text-right\" for=\"product-shipping-region\">Нахождене</label><select  class=\"form-control\"  name=\"addr_region\" id=\"product-shipping-region\">"+regionsHTML+"</select></div><div class=\"form-group\"><label class=\"control-label text-right\" for=\"addr-zip\">Индекс:</label><input class=\"form-control\" type=\"text\" name=\"addr_zip\" value=\"\" id=\"addr-zip\" ></div><div class=\"form-group\"><label class=\"control-label text-right\" for=\"addr-mob\">Контактный телефон:</label><input class=\"form-control\" type=\"text\" name=\"addr_mob\" value=\"\" id=\"addr-mob\" ></div><div class=\"form-group\"><input class=\"form-control\" type=\"hidden\" value=\"true\" name=\"add_address\"><button class=\"btn btn-primary\" type=\"submit\" name=\"submit\" >Сохранить</button> <a id=\"sym-cancel-add-address\" class=\"btn btn-default\">Закрыть</a></div></form></div></div></div>";
							
							checkoutHTML += cartHTML;
							$('#SymModalBody').removeClass('sym-loading');								
							$('#SymModalBody').html(checkoutHTML);
							
							$("#sym-add-address-btn").unbind().bind('click',function(){
							$("#sym-checkout-form").hide();
							$("#add-address").show();
							return false;
							});	
							$("#sym-cancel-add-address").unbind().bind('click',function(){
							$("#add-address").hide();
							$("#sym-checkout-form").show();
							return false;
							});
							
							$("#sym-addr-add").unbind().bind('submit',function(){
								$('#sym-cart-lb-alert').removeClass("alert-danger");
								$('#sym-cart-lb-alert').removeClass("alert-success");
								$('#sym-cart-lb-alert').text("Пожалуйста подождите...мы тупим!");
								$('#sym-cart-lb-alert').addClass("alert-info");
								$('#sym-cart-lb-alert').show();
								var serialize = $("#sym-addr-add").serialize();
								$.ajax({
								dataType: "json",
								type: "POST",
								url: cartpath + "/index.php?c=sym-user-json&action=addAddress",
								data:serialize,
								success: function(address){
									if(typeof address.error != 'undefined'){
									$('#sym-cart-lb-alert').addClass("alert-danger");
									$('#sym-cart-lb-alert').text(address.error);
									return false;
								}
								$(document).symShowCheckoutLightboxRefresh();
								return false;
								}	
								});	
								return false;
							});
							$("#sym-checkout-form").unbind().bind('submit',function(){
								$('#sym-checkout-lb-alert').removeClass("alert-danger");
								$('#sym-checkout-lb-alert').removeClass("alert-success");
								$('#sym-checkout-lb-alert').text("Пожалуйста подождите...мы тупим!");
								$('#sym-checkout-lb-alert').addClass("alert-info");
								$('#sym-checkout-lb-alert').show();
								var serialize = $(this).serialize();
								$.ajax({
								dataType: "json",
								type: "POST",
								url: cartpath + "/index.php?c=sym-checkout-processor-json&action=doCheckout",
								data:serialize,
								success: function(checkoutData){
									if(typeof checkoutData.error != 'undefined'){
									$('#sym-checkout-lb-alert').removeClass("alert-info");
									$('#sym-checkout-lb-alert').addClass("alert-danger");
									$('#sym-checkout-lb-alert').text(checkoutData.error);
									return false;
								}
										$('#sym-checkout-lb-alert').removeClass("alert-info");
										$("#sym-checkout-lb-alert").addClass('alert-success');
										$("#sym-checkout-lb-alert").text('Processing your Order');
										top.location.href=checkoutData.url;
								return false;
								}	
								});	
								return false;
							});
							
							$("#sym-view-cart-btn").unbind().bind('click',function(){
							$(document).symShowCartLightboxRefresh();
							return false;
							});
						return false;
						}
						});/* $.ajax for checkout */
					return false;
					}
					}); /* $.ajax for cart */
				
			return false;	
			}
		}); /* $.ajax for login */
		return false;
};

jQuery.fn.symShowCartLightboxRefresh = function(){
	var cartJSpath = $("#symbiotic-cart-js-path").html();
	$.getScript(cartJSpath);
	$(document).symShowCartLightbox();
};
jQuery.fn.symShowCheckoutLightboxRefresh = function(){
	var cartJSpath = $("#symbiotic-cart-js-path").html();
	$.getScript(cartJSpath);
	$(document).symCheckout();
};

});