<?php
	if(!defined('ABSPATH')){
	echo "You access can't file directly";
	exit;
	}
	header('Content-Type: application/json; charset=utf-8');
	$jsonReturn = array();
	if(!isset($_REQUEST['product_id']) || empty($_REQUEST['product_id'])){
	$jsonReturn['error'] ='Invalid request';
	}else{
		$id = $_REQUEST['product_id'];
		$details = $product->details($id);
		$allImages = $product->get_images($id);
		$images =array();
		foreach($allImages as $img){
			$images[] = $img['image'];
		}
		if(!$details){
		$jsonReturn['error'] ='Product doesn\'t exists';
		}else{
		
			switch($_REQUEST['type']){
			case 'btn':
			if($details['stock'] < 1){
			$jsonReturn['error'] = "Out of stock";
			}
			$jsonReturn['name'] = $details['name'];
			$jsonReturn['price'] = $details['price'];
			$options = $product->options($id);
			if(!empty($options)){
			for($i = 0;$i < count($options); ++$i){
			$jsonReturn['options'][$i]['id'] = $options[$i]['id'];
			$jsonReturn['options'][$i]['name'] = $options[$i]['name'];
			$jsonReturn['options'][$i]['price'] = $options[$i]['price'];
			}}
		break;
		
		case 'img':
			$jsonReturn['image'] = $details['image'];
			$jsonReturn['images'] = $images;
		break;
		
		case 'desc':
			$jsonReturn['description'] = $details['description'];
		break;
		
		default:
			$jsonReturn['name'] = $details['name'];
			$jsonReturn['price'] = $details['price'];
			$options = $product->options($id);
			if(!empty($options)){
			for($i = 0;$i < count($options); ++$i){
			$jsonReturn['options'][$i]['id'] = $options[$i]['id'];
			$jsonReturn['options'][$i]['name'] = $options[$i]['name'];
			$jsonReturn['options'][$i]['price'] = $options[$i]['price'];
			}}
			$jsonReturn['image'] = $details['image'];
			$jsonReturn['description'] = $details['description'];
			$jsonReturn['images'] = $images;
		}
		}
	}
	
	if(isset($jsonReturn['error'])){
		$jsonReturn = json_encode($jsonReturn);
		echo $jsonReturn;
		exit;
	}
	$jsonReturn['img_path'] = $setting['website_url'] . $setting['images'];
	$jsonReturn['currency'] =$setting['currency_symbol'];
	
	$jsonReturn = json_encode($jsonReturn);
	echo $jsonReturn;
?>