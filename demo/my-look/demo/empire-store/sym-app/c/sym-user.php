<?php
	if(!defined('ABSPATH')){
	echo "You access can't file directly";
	exit;
	}
	if(!isset($_REQUEST['p'])){
	echo 'Invalid Request';
	exit;
	}
	$f =basename($_REQUEST['p']);


if(!$auth->is_loggedin() && ($f != 'sign-in') && ($f != 'sign-up')&& ($f != 'recover') ){
	$f = 'sign-in';
}
if($auth->is_loggedin()){
define('USER',$_SESSION['curr_user']);
$setting = $settings->get_all();
}
if($f == 'sign-in'){

if(isset($_REQUEST['action'])){
	if($_REQUEST['action'] == 'signout'){
	$auth->signout();
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
		mail($email,'Symbiotic Cart Password',$pass);
			$success = 'Done, check your inbox';
		}
		else{
			$error = "User doesn't exists";
		}
	}
}
if($auth->is_loggedin())
{
	$f = 'orders';
}

}
	$c = dirname(__FILE__) . '/user/' . $f . ".php";
	if(!file_exists($c)){
	echo $c;
	echo 'Invalid Request';
	exit;
	}
	require_once($c);
?>