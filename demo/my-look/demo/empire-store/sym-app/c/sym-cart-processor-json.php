<?php
	if(!defined('ABSPATH')){
	echo "You access can't file directly";
	exit;
	}
	$items_count = '0';
	$cart_total  = '0';
	$net_amount  = '0';
	$shippingPrice  = '0';
	$couponCode ="";
	$couponType = "";
	$couponMin = "";
	$couponOff = "";
	$taxRate = $setting['tax'];
	header('Content-Type: application/json; charset=utf-8');
	$jsonReturn = array();
	if(!isset($_REQUEST['action']) || empty($_REQUEST['action'])){
	$jsonReturn['error'] ='Invalid request';
	}
	
	if(isset($_SESSION['basket']['items'])){
		$taxRate = $setting['tax'];
		foreach($_SESSION['basket']['items'] as $item){
			$price = $item['price']*$item['count'];
			$items_count = $items_count + $item['count'];
			$cart_total = $cart_total + $price;
			$shippingPrice = $shippingPrice + ($item['shipping']*$item['count']);
			$shippingPrice = number_format($shippingPrice, 2, '.', '');
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
		$tax = number_format($tax, 2, '.', '');
		$cart_total = number_format($cart_total, 2, '.', '');
		$net_amount = number_format(($cart_total + $tax + $shippingPrice - $discount), 2, '.', '');
	}
	
	
	switch($_REQUEST['action']){
		case 'add':
		if(isset($_REQUEST['product_id'])){
			if(!isset($_REQUEST['qty']) || $_REQUEST['qty'] == 'undefined'){
				$_REQUEST['qty'] = '1';
			}
			if(isset($_REQUEST['option']) && $_REQUEST['option'] != 'undefined'){
					$result = $cart->add($_REQUEST['product_id'],$_REQUEST['qty'],$_REQUEST['option']);
			}	else{
			$result = $cart->add($_REQUEST['product_id'],$_REQUEST['qty']);
			}
			if(empty($cart->error)){
			$jsonReturn['message'] = $cart->msg;
			}else{
			$jsonReturn['error'] = $cart->error;
			}
		}else{
			$jsonReturn['error'] ='Invalid request';
		}
		break;
		
		case 'update':
		if(isset($_REQUEST['item'])){
			foreach($_REQUEST['item'] as $uitem){
				$result = $cart->update($uitem['id'],$uitem['count']); 
					if(!$result){
					break;
					}
			}
			if(empty($cart->error)){
			$jsonReturn['message'] = $cart->msg;
			}else{
			$jsonReturn['error'] = $cart->error;
			}
			}else{
			$jsonReturn['error'] ='Invalid request';
			}
		break;
		
		case 'empty':
		$result = $cart->empty_cart(); 	
		if(empty($cart->error)){
		$jsonReturn['message'] = $cart->msg;
		}else{
		$jsonReturn['error'] = $cart->error;
		}
		break;	
		case 'coupon':
		if(!empty($_REQUEST['coupon'])){
		$_REQUEST['coupon'] = strtoupper($_REQUEST['coupon']);
		$off = $coupon->details($_REQUEST['coupon']);				
		if($off){
		$_SESSION['basket']['coupon']['code'] = $_REQUEST['coupon'];
		$_SESSION['basket']['coupon']['discount'] = $off['off'];
		$_SESSION['basket']['coupon']['discount_type'] = $off['off_type'];
		$_SESSION['basket']['coupon']['min'] = $off['order_min'];
		$jsonReturn['message'] = 'Coupon Applied Successfully';
		}else{
		$jsonReturn['error'] = $coupon->error;
		}
		}else{
		unset($_SESSION['basket']['coupon']);
		$jsonReturn['message'] = 'Coupon Removed Successfully'; 
		}
		break;
		
		case 'count_cart':
		$jsonReturn['count'] = $items_count;
		break;
		
		case 'show_total':
		$jsonReturn['total'] = $net_amount;
		break;	
		case 'cart_items':
		if(isset($_SESSION['basket']['coupon']['code'])){ $couponCode = $_SESSION['basket']['coupon']['code']; }
		if(isset($_SESSION['basket']['coupon']['discount'])){ $couponOff = $_SESSION['basket']['coupon']['discount'];}
		if(isset($_SESSION['basket']['coupon']['discount_type'])){ $couponType = $_SESSION['basket']['coupon']['discount_type'];}
		if(isset($_SESSION['basket']['coupon']['min'])){ $couponMin = $_SESSION['basket']['coupon']['min'];}
		$jsonReturn['count'] = $items_count;
		$jsonReturn['items'] = $_SESSION['basket']['items'];
		$jsonReturn['total'] = $net_amount;
		$jsonReturn['cart_total'] = $cart_total;
		$jsonReturn['discount'] = $discount;
		$jsonReturn['coupon'] = $couponCode;
		$jsonReturn['couponOff'] = $couponOff;
		$jsonReturn['couponType'] = $couponType;
		$jsonReturn['couponMin'] = $couponMin;
		$jsonReturn['tax'] = $tax;
		$jsonReturn['taxRate'] = $taxRate;
		$jsonReturn['shippingPrice'] = $shippingPrice;
		$jsonReturn['shipping_mode'] = $setting['shipping_mode'];
		$jsonReturn['free_shipping'] = $setting['free_shipping'];
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
	$jsonReturn['shipping_min_items'] = $setting['shipping_min_items'];
	$jsonReturn['max_order_total'] = number_format($setting['max_order_total'], 2, '.', '');
	$jsonReturn['min_order_total'] = number_format($setting['min_order_total'], 2, '.', '');
	$jsonReturn['img_path'] = $setting['website_url'] . $setting['images'];
	$jsonReturn['currency'] =$setting['currency_symbol'];
	
	$jsonReturn = json_encode($jsonReturn);
	echo $jsonReturn;
?>