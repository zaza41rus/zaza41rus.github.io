<?php
	if(!defined('ABSPATH')){
	echo "You access can't file directly";
	exit;
	}
	header('Content-Type: application/json; charset=utf-8');
	$jsonReturn = array();
	if(!isset($_REQUEST['query']) || empty($_REQUEST['query'])){
	$jsonReturn['error'] ='Invalid request';
	}else{
		$query = $_REQUEST['query'];
		$results = $product->search($query);
		$jsonReturn['products'] = $results;
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