<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
require_once('./include/admin-load.php');
if(isset($_REQUEST['action'])){
	if($_REQUEST['action'] == 'logout'){
	$auth->logout();
	}
}
if(isset($_REQUEST['login'])){
		if(empty($_REQUEST['email']) || empty($_REQUEST['pwd'])){
			$error = 'Please enter Email and Password';
		}
		else{
		$email=trim($_REQUEST['email']);
		$password=trim($_REQUEST['pwd']);
	if(!$auth->login($email,$password)){

		$error = $auth->error;
	}
	}
}
if(isset($_REQUEST['reset'])){
		if(empty($_REQUEST['email'])){
			$error = 'Please enter Email';
		}
		else{
		$email=trim($_REQUEST['email']);
		if($user->is_user($email)){
		$pass = $user->get_pass($email);
		
	$headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=utf-8\n";
    $headers .= "From:Symbiotic Cart <no-reply@".$_SERVER['HTTP_HOST']."> \n";
	$subject = "Account Login Information";
	$message = "<h3>Hello, ".$email ."</h3><br />";
	$message .= "Your password is: ".$pass." <br />";
	$message .= "&copy; ".$_SERVER['HTTP_HOST'];
	mail($email,$subject,$message,$headers);
			$success = 'Done, check your inbox';
		}
		else{
			$error = "User doesn't exists";
		}
	}
}
if($auth->is_loggedin())
{
	header("location:index.php");	
}

if(!empty($auth->msg)){
	$success = $auth->msg;
	}
	if(!empty($auth->error)){
	$error = $auth->error;
	}
	
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Ajax Cart Admin - Login</title>
<link href="css/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery.js"></script>
<?php
  $bg = array('pattern-generator.png', 'background.png', 'elephant.jpg'); // array of filenames

  $i = rand(0, count($bg)-1); // generate random number size of the array
  $selectedBg = "$bg[$i]"; // set variable equal to which random filename was chosen
?>
<style type="text/css">
body{
	background:url(images/<?php echo $selectedBg; ?>);
	background-size:cover;
	color:#fff;
}
h1,h2{
	text-shadow:none;
}
a{
	color:#fff;
}
</style>
</head>
<body>
<div class="container">
<h1 class="text-center">Ajax Cart Admin</h1>
<div class="col-md-3" style="margin:30px auto;float:none;padding:10px;">
<form action="login.php" method="post">
<div class="text-center"><img src="images/logo.png"></div>
<h2 class="text-center">Administration Login</h2>
<?php
if(isset($error)){
echo "<div class='alert alert-danger'>$error</div>";
}
if(isset($success)){
echo "<div class='alert alert-success'>$success</div>";
}
?>
 <div class="form-group">
<label for="email">Email</label><input class="form-control"type="text" name="email" id="email" ></div> <div class="form-group">
<label for="pwd">Password</label><input class="form-control"type="password" name="pwd" id="pwd" ></div> <div class="form-group">
<button id="submit" name="login" class="btn btn-primary">Login</button> <button id="reset" name="reset" class="btn btn-default">Forgot Password</button>
</div>
</form>
</div>
<div class="row"><div class="col-md-12 text-right"><a href="http://BakeMySite.com">&copy; BakeMySite <?php echo date('Y');?></a></div></div><br />
</div>
</div>




</body>
</html>