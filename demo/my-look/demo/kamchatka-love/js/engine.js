// Как только страничка загрузилась 
	window.onload = function () { 
		// проверяем поддерживает ли браузер FormData 
			if(!window.FormData) {
				/* * если не поддерживает, то выводим 
				* то выводим предупреждение вместо формы */
				var div = ge('content');
				div.innerHTML = "Ваш браузер не поддерживает объект FormData";
				div.className = 'notSupport'; 
			}
	}


$(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	$("#sendform").validate({
		submitHandler: function(form){
			var form = document.forms.sendform,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "/send.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						$("#sendform").html('<p class="thank">Данные отправлены<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});	
})







$(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	$("#sendform2").validate({
		submitHandler: function(form){
			var form = document.forms.sendform2,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "/send2.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						$("#sendform2").html('<p class="thank2">Заявка отправлена<p><p class="pic2"><p><p class="thank2">Ожидайте ответа</br>от</br>заинтересовавшейся сотороны<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});	
})


$(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	$("#sendform3").validate({
		submitHandler: function(form){
			var form = document.forms.sendform3,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "/send3.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						$("#sendform3").html('<p class="thank2">Заявка отправлена<p><p class="pic2"><p><p class="thank2">Ожидайте ответа</br>от</br>заинтересовавшейся сотороны<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});	
})




$(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	$("#sendform4").validate({
		submitHandler: function(form){
			var form = document.forms.sendform4,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "/send4.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						$("#sendform4").html('<p class="thank2">Заявка отправлена<p><p class="pic2"><p><p class="thank2">Ожидайте ответа</br>от</br>заинтересовавшейся сотороны<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});	
})


$(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	$("#sendform5").validate({
		submitHandler: function(form){
			var form = document.forms.sendform5,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "/send5.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						$("#sendform5").html('<p class="thank2">Заявка отправлена<p><p class="pic2"><p><p class="thank2">Ожидайте ответа</br>от</br>заинтересовавшейся сотороны<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});	
})



$(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	$("#sendform6").validate({
		submitHandler: function(form){
			var form = document.forms.sendform6,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "/send6.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						$("#sendform6").html('<p class="thank2">Заявка отправлена<p><p class="pic2"><p><p class="thank2">Ожидайте ответа</br>от</br>заинтересовавшейся сотороны<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});	
})

$(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	$("#sendform7").validate({
		submitHandler: function(form){
			var form = document.forms.sendform7,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "/send7.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						$("#sendform7").html('<p class="thank2">Заявка отправлена<p><p class="pic2"><p><p class="thank2">Ожидайте ответа</br>от</br>заинтересовавшейся сотороны<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});	
})





$(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	$("#sendform8").validate({
		submitHandler: function(form){
			var form = document.forms.sendform8,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "/send8.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						$("#sendform8").html('<p class="thank2">Заявка отправлена<p><p class="pic2"><p><p class="thank2">Ожидайте ответа</br>от</br>заинтересовавшейся сотороны<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});	
})




$(document).ready(function(){
	// =validation
	var errorTxt = 'Ошибка отправки';
	$("#sendform9").validate({
		submitHandler: function(form){
			var form = document.forms.sendform9,
				formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", "/send9.php");
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						$("#sendform9").html('<p class="thank2">Заявка отправлена<p><p class="pic2"><p><p class="thank2">Ожидайте ответа</br>от</br>заинтересовавшейся сотороны<p>');
					}
				}
			};
			xhr.send(formData);
		}
	});	
})



function sendSuccess(callback){
	$(callback).find("form fieldset").html(thank);
}
