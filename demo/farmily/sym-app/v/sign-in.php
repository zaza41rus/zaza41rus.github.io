<?php
$title='User Sign in';
require_once('../include/cart-load.php');
if(isset($_REQUEST['action']) && ($_REQUEST['action'] == "recover")){

		if(isset($_REQUEST['email']) && empty($_REQUEST['email'])){
			$reseterror= 'Please enter email';
		}
		elseif(isset($_REQUEST['email'])){
		$email=trim($_REQUEST['email']);
		if(!$user->is_new_user($email)){
		$pass = $user->get_pass($email);
		
			$headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=utf-8\n";
    $headers .= "from:Farmily <no-reply@".$_SERVER['HTTP_HOST']."> \n";
	$subject = "Информация о вашем АККАУНТЕ";
	$message = "<h2>Привет, ".$email ."</h2><br />";
	$message .= "Вы запросили пароль от ".$_SERVER['HTTP_HOST']." на этот электронный адрес <br />";
	$message .= "Ваш пароль <b>".$pass."</b> .<br />";
	$message .= "&copy; ".$_SERVER['HTTP_HOST'];
	mail($email,$subject,$message,$headers);

			$success = 'Сделано, проверьте ваш почтовый ящик';
			}else{
			$reseterror= 'Пользователь не существует';
			}
	}
}



require_once('header.inc.php');
?>
<div class="col-sm-8">
<h1>Создайте свою учетную запись</h1><br />

<h2>Вы сможете:</h2>
<h4>1) Быть в вкурсе наших предложений</h4>
<h4>2) Корректировать и отслеживать свои заказы</h4>
<h4>4) Управлять адресами доставки и прочее...</h4>
<br /><h2>Еще нет аккаунта?</h2>
 <a class="btn btn-success" href="sign-up.php">Зарегистрироваться</a>
</div>
<div class="col-sm-4 login-box">

<?php
if(isset($_REQUEST['action']) && ($_REQUEST['action'] == "recover")){
?>

<h3 class="text-center">Сбросить Пароль</h3>
<form action="sign-in.php" method="post" class="form">
<?php if(isset($reseterror)){
		echo  "<div class=\"alert alert-danger\" style=\"display:block;\">".$reseterror."<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button></div>";
		 }elseif(isset($success)){
		echo  "<div class=\"alert alert-success\" style=\"display:block;\">".$success."<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button></div>";
		 }
		 ?>
		 	 <div class="form-group">
    <label for="email">Почта</label>
    <div >
<input class="form-control" type="email" required name="email" value="" id="email">
<input class="form-control" type="hidden" name="action" value="recover">

</div></div>
<div class="form-group">
    <div>
<button type="submit" name="submit" class="btn btn-primary" ><i class="icon-white icon-envelope"></i> Отправить пароль</button>
</div>
</div>
</form>

Вспомнили пароль? <a href="sign-in.php" class="btn btn-default">Войти в систему</a>

<?php
}
else{
?>

<h3 class="text-center">Войти</h3>
<?php
if(isset($error)){
				echo  "<div class=\"alert alert-danger\" style=\"display:block;\">".$error."<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button></div>";
				}
	?>			
<form class="form" action="sign-in.php" method="post" >

  <div class="form-group">
    <label  for="inputEmail">Почта</label>
    <div>
      <input class="form-control"  class="input-block-level"  required type="email" required id="inputEmail" placeholder="Email" name="email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword" >Пароль</label>
    <div>
      <input class="form-control"  class="input-block-level"  required type="password" id="inputPassword" name="pwd" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div>
      <input class="form-control" type="hidden" name="login">
      <button type="submit" class="btn btn-primary">Войти</button> <!--<?php if(!empty($setting['fb_app_secret']) && !empty($setting['fb_app_secret'])){ ?><a target="_top" href='auth/facebook.php?ref=<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];?>' class="btn btn-default">Sign in with Facebook</a><?php } ?><!-->
    </div>
  </div>  
  <div class="form-group">
    <div>
         <a class="btn btn-link" href="sign-in.php?action=recover">Забыли пароль</a>
    </div>
  </div>
</form>



<?php
}
?>
</div>
<?php
require_once('footer.inc.php');
?>