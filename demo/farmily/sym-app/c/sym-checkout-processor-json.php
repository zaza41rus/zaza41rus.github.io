<?php
	if(!defined('ABSPATH')){
	echo "You access can't file directly";
	exit;
	}
	$regions = $shipping->region_all();
	$addresses = $address->all();
	for($i = 0; $i < count($addresses);$i++){
	$r =  $addresses[$i]['region'];
	foreach($regions as $regn){
		if($regn['id'] == $r){
			$addresses[$i]['shippingCharge'] = number_format($regn['shipping'],2,'.','');
	}}}
	header('Content-Type: application/json; charset=utf-8');
	$jsonReturn = array();
	if(!isset($_REQUEST['action']) || empty($_REQUEST['action'])){
	$jsonReturn['error'] ='Invalid request';
	}
	
	switch($_REQUEST['action']){
		case 'init':
		$jsonReturn['regions'] = $regions;
		$jsonReturn['user'] = $_SESSION['curr_user'];
		$jsonReturn['addresses'] = $addresses;
		$jsonReturn['shipping_mode'] = $setting['shipping_mode'];
		$jsonReturn['gateways'] = $gateways;
		break;
		case 'doCheckout':
		if($auth->is_loggedin()){
			if(!isset($_REQUEST['address'])){
			$jsonReturn['error'] = 'Вы не указали свои данные' ;
			}else{
			$verify = $address->is_address($_REQUEST['address']);
			if(!$verify){
				$jsonReturn['error'] = $address->error;
			}
			}
			if(!isset($_REQUEST['gateway'])){
				$jsonReturn['error'] ='Выберете метод оплаты';
			}
			if(!isset($jsonReturn['error'])){
				$items_count = '0';
				$cart_total  = '0';
				$net_amount  = '0';
				$shippingPrice  = '0';
				$couponCode ="";
				$couponType = "";
				$couponMin = "";
				$couponOff = "";
				$taxRate = $setting['tax'];
				$addr_details = $address->details($_REQUEST['address']);
				$addr_region = $addr_details['region'];
					if(isset($_SESSION['basket']['items'])){
						$taxRate = $setting['tax'];
						foreach($_SESSION['basket']['items'] as $item){
							$price = $item['price']*$item['count'];
							$items_count = $items_count + $item['count'];
							$cart_total = $cart_total + $price;
							$shippingPrice = $shippingPrice + ($item['shipping']*$item['count']);
							$shippingPrice = number_format($shippingPrice, 2, '.', '');
							if($item['count'] >= 1){
								$regionsArr = json_decode($item['region']);
								if(in_array($addr_region,$regionsArr))
								{
									if(SHIPPINGMODE == '2'){
									foreach($regions as $regn){
									if($regn['id'] == $addr_region){
									$shippingPrice = number_format($regn['shipping'],2,'.','');
									$net_amount = $net_amount + $shippingPrice ;
									}
									}}

								}else{
								$jsonReturn['error'] = $item['name']." не доступен в вашем регионе";
								}
							}
						}
						if(isset($_SESSION['basket']['coupon'])){
						if($cart_total >=  $_SESSION['basket']['coupon']['min']){
						$discount =  $_SESSION['basket']['coupon']['discount'];
						if($_SESSION['basket']['coupon']['discount_type'] == '1'){
						$discount = $cart_total  * $discount / 100;
						}
						$discount = number_format($discount, 2, '.', '');
							}else{
							$discount = 0;
							}
						}else{
						$discount = 0;
						}
						$tax = $taxRate * ($cart_total- $discount) /100 ;
						if(($cart_total- $discount + $tax) >= FREESHIPPING && FREESHIPPING != 0){
						$shippingPrice = 0;
						}
						$cart_total = number_format($cart_total, 2, '.', '');
						$net_amount = number_format(($cart_total + $tax + $shippingPrice - $discount), 2, '.', '');
					}else{
						$jsonReturn['error'] = "Cart is empty.";
					}

				if(($cart_total- $discount + $tax) >= FREESHIPPING && FREESHIPPING != 0){
					$shippingPrice = 0;
				}
				if(!isset($jsonReturn['error'])){
					$items = json_encode($_SESSION['basket']['items']);
					$_SESSION['basket']['order'] = array();
					$_SESSION['basket']['order']['address'] = $_REQUEST['address'];
					$_SESSION['basket']['order']['gateway'] = $_REQUEST['gateway'];
					$_SESSION['basket']['order']['total'] = $cart_total;
					$_SESSION['basket']['order']['shipping'] = $shippingPrice;
					$_SESSION['basket']['order']['discount'] = $discount;
					$_SESSION['basket']['order']['tax'] = $tax;
					$_SESSION['basket']['order']['net_amount'] = $net_amount;
					foreach($gateways as $gate){
					if($gate['file'] == $_SESSION['basket']['order']['gateway']){
					$gname = $gate['name'];
					break;
					}else{
					$gname = 'Unknown';
					}
					}
					$ip= $_SERVER['REMOTE_ADDR'];
					$gname .= " (IP " . $ip. ")";
					if(isset($_SESSION['basket']['coupon']['code'])){
					$couponused = ($_SESSION['basket']['coupon']['code'] != 'Invalid Coupon')? $_SESSION['basket']['coupon']['code']: 'Нету';
					}else{
						$couponused = 'Нету';
					}
					$cid = $crypt->decrypt(	$_SESSION['uid']);
					$order_id = $order->add($cid,$_REQUEST['address'],$items,$net_amount,$cart_total,$tax,$shippingPrice,$discount,$couponused,$gname);
					$_SESSION['basket']['order_id'] = $order_id;
					$URLstring = $setting['website_url']."/gateways/".$_SESSION['basket']['order']['gateway'] ."?symbiotic=symbiotic&curr=".$setting['currency']."&total=$net_amount&order_id=$order_id";
					$jsonReturn['url']	= $URLstring;
				}
			}
			
		}else{
		$jsonReturn['error'] ='Ошибка безопасности: Пользователь не зарегистрирован';
		}
		break;
		
		default:
		$jsonReturn['error'] ='Неверный запрос';
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