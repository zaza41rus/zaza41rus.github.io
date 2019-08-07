<?php
	if(!defined('ABSPATH')){
	echo "You access can't file directly";
	exit;
	}
	header('Content-Type: application/json; charset=utf-8');
	$jsonReturn = array();
	if(!isset($_REQUEST['action']) || empty($_REQUEST['action'])){
	$jsonReturn['error'] ='Invalid request';
	}
	
	
	switch($_REQUEST['action']){
		case 'checklogin':
		$jsonReturn['loginStatus'] = ($auth->is_loggedin()) ? true:false;
		break;
		case 'doLogin':
			if(empty($_REQUEST['email']) || empty($_REQUEST['pwd'])){
				$jsonReturn['error'] = 'Please enter Email and Password';
			}else{
			$email=trim($_REQUEST['email']);
			$password=trim($_REQUEST['pwd']);
			$loggedIn = $auth->login($email,$password);
			if($loggedIn){
			$jsonReturn['loginStatus'] = true;
			}else{
			$jsonReturn['error'] = $auth->error;
			}
			}
		break;
		
		case 'doEmailLogin':
			if(empty($_REQUEST['newEmail'])){
			$jsonReturn['error'] =  'Please enter email';
			}else{
			$email=trim($_REQUEST['newEmail']);
				if($user->is_new_user($email)){
				$pwd = randomPassword();
				$result= $user->add(' -- ','0000000000',$email,$pwd);
				if($result){
					$auth->login($email,$pwd);
					$jsonReturn['loginStatus'] = true;
				}else{
				$jsonReturn['error'] = $user->error;
				}
				
			}else{
				$jsonReturn['error'] =  'Email already registered, Please login to your account';
			}
			}
		break;
		case 'addAddress':
			 	$uid = $_SESSION['uid'];
				$name = trim($_POST['addr_name']);
				$addr = trim($_POST['addr_addr']);
				$country = trim($_POST['addr_c']);
				$region = trim($_POST['addr_region']);
				$zip = trim($_POST['addr_zip']);
				$mobile = trim($_POST['addr_mob']);
				$result = $address->add($uid,$name,$addr,$country,$region,$zip,$mobile);
				if($result){
					$jsonReturn['addressAdded'] = true;
				}else{
					$jsonReturn['error'] = $address->error;
				}
		break;
		
		default:
		$jsonReturn['error'] ='Invalid request';
	}
	

	if(isset($jsonReturn['error'])){
		$jsonReturn = json_encode($jsonReturn);
		echo $jsonReturn;
		exit;
	}
	if(isset($jsonReturn['message'])){
		$jsonReturn = json_encode($jsonReturn);
		echo $jsonReturn;
		exit;
	}
	$jsonReturn['img_path'] = $setting['website_url'] . $setting['images'];
	$jsonReturn['currency'] =$setting['currency_symbol'];
	
	$jsonReturn = json_encode($jsonReturn);
	echo $jsonReturn;
?>