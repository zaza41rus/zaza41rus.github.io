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
		case 'checkPending':
			if(isset($_SESSION['sym-callback']) && isset($_SESSION['sym-order'])){
			$jsonReturn['pending'] = true;
			$details = $order->details($_SESSION['sym-order']);
			$jsonReturn['products'] = json_decode($details['items'],true);
			$jsonReturn['id'] = $details['id'];
			$jsonReturn['amount'] = $details['amount'];
			$jsonReturn['net'] = $details['net'];
			$jsonReturn['discount'] = $details['discount'];
			$details['coupon'] = !empty($details['coupon']) ? $details['coupon']: 'Нету';
			$jsonReturn['coupon'] = $details['coupon'];
			$jsonReturn['tax'] = $details['tax'];
			$jsonReturn['shipping'] = $details['shipping'];
			$jsonReturn['gateway'] = $details['gateway'];
			$jsonReturn['email'] = $_SESSION['curr_user'];
			switch ($details['payment']){
				case '1':
				$payment = 'Выполнено';
				break;
				case '2':
				$payment = 'В ожидании';
				break;
				case '3':
				$payment = 'Неудачный';
				break;
				case '4':
				$payment = 'Возвращено';
				break;
				default:
				$role = 'Неизвестно';	
			}
			switch ($details['status']){
				case '1':
				$status = 'Одобрено';
				break;
				case '2':
				$status = 'В ожидании';
				break;
				case '3':
				$status = 'Отменен';
				break;
				case '4':
				$status = 'Отплавленный';
				break;
				case '5':
				$status = 'Доставленный';
				break;
				case '6':
				$status = 'Возвращено';
				break;
				default:
				$status = 'Неизвестно';
			}
			$jsonReturn['payment'] = $payment;
			$jsonReturn['status'] = $status;
			$jsonReturn['img_path'] = $setting['website_url'] . $setting['images'];
			$jsonReturn['currency'] =$setting['currency_symbol'];
			unset($_SESSION['sym-callback']);
			unset($_SESSION['sym-order']);
			$jsonReturn['img_path'] = $setting['website_url'] . $setting['images'];
			$jsonReturn['currency'] =$setting['currency_symbol'];
			}else{
			$jsonReturn['pending'] = false;
			}
		break;
		case 'sendMail':
		if(!isset($_REQUEST['order']) || empty($_REQUEST['order'])){
		$jsonReturn['error'] ='Invalid request';
		break;
		}
		$details = $order->details($_REQUEST['order']);
		if(!$details){
		$jsonReturn['error'] = $order->error;
		break;
		}
		$file = ABSPATH . "/v/receipt.php";
		ob_start();
			include $file;
			$mail = ob_get_contents();
		ob_end_clean();
		$customer =  $_SESSION['curr_user'];
		$admin = $setting['web_email'];
		$headers ="";
		$headers .= "Content-type: text/html; charset=utf-8\n";
		$headers .= "from:Farmily <no-reply@".$_SERVER['HTTP_HOST']."> \n";
		$subject = "Заказ";
		@mail($customer,$subject,$mail,$headers);
		@mail($admin,$subject,$mail,$headers);
		$jsonReturn['message'] = 'Mail Sent';
		break;
		default:
		$jsonReturn['error'] ='Invalid request';
	}
	

	if(isset($jsonReturn['error'])){
		$jsonReturn = json_encode($jsonReturn);
		echo $jsonReturn;
		exit;
	}
	$jsonReturn = json_encode($jsonReturn);
	echo $jsonReturn;
?>