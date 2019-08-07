<?php
	if(!defined('ABSPATH')){
	echo "You access can't file directly";
	exit;
	}
$crf = md5($_SESSION['uid'] . date('D-M-Y'));
if($_POST && isset($_REQUEST['crf'])){
if($_REQUEST['crf'] == $crf){
$pwd = $_POST['edit_pwd'];
$npwd = $_POST['edit_new_pwd'];
$npwd2 = $_POST['edit_new_pwd2'];
$details = $user->details($_SESSION['uid']);
if($pwd == $details['password']){
if(empty($npwd)){
$user->error  = 'Please enter a new password.';
}elseif(empty($npwd)){
$user->error  = 'Please re-enter a new password.';
}elseif($npwd == $npwd2){
$result= $user->update($_SESSION['uid'],'password',base64_encode($npwd));
}else{
$user->error  = 'New passwords does not match.';
}}else{

$user->error  = 'Please enter a correct current password.';

}
}else{
$user->error  = 'Authentication error, Try again.';
}
}
?>
<h2>Изменить настройки учетной записи</h2>
<hr><?php
if($user->msg){
				echo  "<div class=\"alert alert-success\" style=\"display:block;\">".$user->msg."<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button></div>";
				}
				if($user->error){
				echo "<div class=\"alert alert-danger\" style=\"display:block;\">".$user->error."<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button></div>";
				}
				?>
				<h4>Изменить Пароль</h4>
<form action="account.php" method="post" id="edit-admin" class="form-horizontal">
<div class="form-group">
<label class="col-md-3 control-label text-right" for="edit-admin-email">Используемая Почта</label>
<div class="col-md-4">
<input class="form-control" disabled type="text" name="edit_email" value="<?php echo $_SESSION['curr_user'];?>" id="edit-admin-email"></div>
</div>
<div class="form-group">
<label class="col-md-3 control-label text-right" for="edit-pwd">Текущий Пароль</label><div class="col-md-4">
<input class="form-control" type="password" name="edit_pwd" value="" id="edit-pwd">
</div></div>
<div class="form-group">
<label class="col-md-3 control-label text-right" for="edit-new-pwd">Новый Пароль</label><div class="col-md-4">
<input class="form-control" type="password" name="edit_new_pwd" value="" id="edit-new-pwd">
</div></div>
<div class="form-group">
<label class="col-md-3 control-label text-right" for="edit-new-pwd2">Повторите Пароль</label><div class="col-md-4">
<input class="form-control" type="password" name="edit_new_pwd2" value="" id="edit-new-pwd2">
</div></div>
<div class="form-group"><div class="col-md-4 col-md-offset-3">
<input class="form-control" name="crf" value="<?php echo $crf;?>" type="hidden">
<button class="btn btn-primary">Изменить</button>
</div>
</div>

</form>	
