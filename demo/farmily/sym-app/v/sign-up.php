<?php
$title='Create New Account';
require_once('../include/cart-load.php');
$publickey = $setting['rc_public'];
$privatekey = $setting['rc_private'];
$resp = null;
$error = null;
if(isset($_REQUEST['error'])){
$user->error = $_REQUEST['error'];
}
if(!empty($publickey) && !empty($privatekey)){ 
require_once(ABSPATH . '/include/plugins/recaptchalib.php');

if (isset($_POST["recaptcha_response_field"])) {
        $resp = recaptcha_check_answer ($privatekey,
                                        $_SERVER["REMOTE_ADDR"],
                                        $_POST["recaptcha_challenge_field"],
                                        $_POST["recaptcha_response_field"]);

        if ($resp->is_valid) {
            
			if($_POST && isset($_REQUEST['submit'])){
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$npwd = $_POST['password'];
$npwd2 = $_POST['password2'];


if(!$validate->email($email)){
$user->error  = 'Please enter a valid email ID.';

}else{

if($user->is_new_user($email)){
if($npwd == $npwd2){
$result= $user->add($name,$mobile,$email,$npwd);
if($result == true){
				$result= $auth->login($email,$npwd);
				echo("<script> top.location.href='index.php'</script>");
				}
}else{
$user->error  = 'New Passwords does not match.';
}
}else{

$user->error  = 'User already exists.';

}
}




}
			
        } else {
               
                $error = $resp->error;
                $user->error = $resp->error;
        }
}

}else{
// reCaptcha Disabled
	if($_POST && isset($_REQUEST['submit'])){
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$npwd = $_POST['password'];
$npwd2 = $_POST['password2'];

if(!$validate->email($email)){
$user->error  = 'Please enter a valid email ID.';

}else{

if($user->is_new_user($email)){
if($npwd == $npwd2){
$result= $user->add($name,$mobile,$email,$npwd);
if($result == true){
				$result= $auth->login($email,$npwd);
				echo("<script> top.location.href='index.php'</script>");
				}
}else{
$user->error  = 'New Passwords does not match.';
}
}else{

$user->error  = 'User already exists.';

}
}




}


}

require_once('header.inc.php');
?><div class="col-sm-8">

<?php  if(!empty($publickey) && !empty($privatekey)){  ?>
<script type="text/javascript">
var RecaptchaOptions = {
theme: 'custom',
lang: 'en',
custom_theme_widget: 'recaptcha_widget'
};
 </script>
<?php } ?>
<h1>Создайте свою учетную запись</h1><br />

<h2>Вы сможете:</h2>
<h4>1) Быть в вкурсе наших предложений</h4>
<h4>2) Корректировать и отслеживать свои заказы</h4>
<h4>4) Управлять адресами доставки и прочее...</h4>
<?php if(!empty($setting['fb_app_secret']) && !empty($setting['fb_app_secret'])){ ?>
<!--<br /><h2>Don't want to fill form?</h2>
<a class="btn btn-primary  btn-large" href='auth/facebook.php?ref=<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];?>'>Sign up with Facebook</a><!--><br />

<?php } ?>

<br /><h2>Уже есть аккаунт?</h2>
 <a class="btn btn-success btn-large" href="sign-in.php">Войти в систему</a>
 
 
</div>
<div class="col-sm-4 login-box">



<h3 class="text-center">Зарегистрироваться</h3>
<form action="sign-up.php" method="post" id="new-user">

<?php 

if($user->msg){
				echo  "<div class=\"alert alert-success\" style=\"display:block;\">".$user->msg."<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button></div>";
				}
if($user->error){
				echo  "<div class=\"alert alert-danger\" style=\"display:block;\">".$user->error."<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button></div>";
				}?>
				 <div class="form-group">
    <label  for="new-name">Имя</label>
    <div >

<input class="form-control"   class="input-block-level" type="text" required name="name" value="" id="new-name">
</div></div>

				 <div class="form-group">
    <label  for="new-email">Почта</label>
    <div >

<input class="form-control"   class="input-block-level" type="email" required name="email" value="" id="new-email">
</div></div>


 <div class="form-group">
    <label  for="new-pwd">Пароль</label>
    <div >
<input class="form-control"   class="input-block-level" type="password"  required name="password" value="" id="new-pwd"></div></div>

 <div class="form-group">
    <label  for="new-pwd2">Подтвердите пароль</label>
    <div >
<input class="form-control"   class="input-block-level" type="password"  required name="password2" value="" id="new-pwd2"></div></div>  
	 <div class="form-group">
	<label  for="new-mobile">Телефон</label>
    <div >

<input class="form-control"   class="input-block-level" type="text"  name="mobile" value="" id="new-mobile">
</div></div>
<?php  if(!empty($publickey) && !empty($privatekey)){  ?>
<div class="form-group">
    <label  for="recaptcha_response_field">Вы человек?</label>
    <div id="recaptcha_widget" style="display: none;">
<div id="recaptcha_image"></div>
<div class="recaptcha_only_if_incorrect_sol" style="color: red;">Неправильно, попробуйте еще раз</div>
<span class="recaptcha_only_if_image">Введите слова выше:</span>
<span class="recaptcha_only_if_audio">Введите цифры, которые вы слышите:</span>
 <div ><input class="form-control" id="recaptcha_response_field" name="recaptcha_response_field" type="text" class="input-block-level" required></div>
<a href="javascript:Recaptcha.reload();"  class="btn btn-link"><i class="icon-refresh"></i> Получить другой КОД,</a> 
<div class="recaptcha_only_if_image"><a href="javascript:Recaptcha.switch_type('audio')"  class="btn btn-link"><i class="icon-bullhorn"></i> Получить другой АУДЕО КОД</a></div>
<div class="recaptcha_only_if_audio"><a href="javascript:Recaptcha.switch_type('image')"  class="btn btn-link" ><i class="icon-picture"></i> Получить другой РИСУНОК КОД</a></div>

<!--div class="recaptcha_only_if_image"><a href="javascript:Recaptcha.switch_type('audio')">Get an audio CAPTCHA</a></div><br /> 
<div class="recaptcha_only_if_audio"><a href="javascript:Recaptcha.switch_type('image')">Get an image CAPTCHA</a></div><br /><br /> 
<div><a href="javascript:Recaptcha.showhelp()">Help</a><br />
</div-->

<script type="text/javascript" src="http://api.recaptcha.net/challenge?k=<?php echo $publickey;?>&lang=en"></script>

<noscript>
<iframe src="http://api.recaptcha.net/noscript?k=<?php echo $publickey;?>&lang=en" height="200" width="500" frameborder="0"></iframe>
<textarea  class="form-control" name="recaptcha_challenge_field" rows="3" cols="40"></textarea>
<input class="form-control" type="'hidden'" name="'recaptcha_response_field'" value="'manual_challenge'">
</noscript>

</div>


</div> <?php }?>
<div class="form-group">
    
    <div >


</div>
</div>
 <div class="form-group">
     <div >
<button type="submit" name="submit" class="btn btn-primary" >Зарегистрироваться</button>
</div>
	</div></form>	
</div>

<?php
require_once('footer.inc.php');
?>