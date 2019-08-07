<?php
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
class Auth{
	var $error = '';
	public $sdb;
	
	public function __construct(){
	global $db;
	 $this->sdb = $db;
	}
	
	public function is_loggedin(){
		
		if(isset($_SESSION['customerauth']) && isset($_SESSION['curr_user']) && isset($_SESSION['token'])){
		$checksum = md5($_SESSION['curr_user'] . 'symbiotic' . date('ymd'));
			if($checksum == $_SESSION['token']){
			return true;
			}
			return false;
		}
		return false;	
	}
	public function login($email,$password){
	global $encryption;
	global $crypt;
	$password = $encryption->encrypt($password);
	$email = strtolower($email);
	$stmt = "SELECT * FROM  " . PFX . "customers WHERE email = :email AND password = :pass AND active = 1";
	$this->sdb->query($stmt);
	$this->sdb->bind(":email",$email);
	$this->sdb->bind(":pass",$password);
	$result = $this->sdb->single();
		if($result){
		$_SESSION['curr_user'] = $result['email'];
		$_SESSION['uid'] = $crypt->encrypt($result['id']);
		$_SESSION['token'] = md5($result['email'] . 'symbiotic' . date('ymd'));
		$_SESSION['customerauth'] = true;
		$this->msg = 'Login Successfull';
		return true;
	}
	$this->error = 'Неправильная почта пользователя / Пароль';
	return false;
	}
	public function signout(){
		unset($_SESSION['curr_user']);
		unset($_SESSION['basket']);
		//session_start(); // Used Till V1.1
		header("location:index.php");
		exit;
	}	
	}

?>