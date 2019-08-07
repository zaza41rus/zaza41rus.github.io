<?php
require_once('include/cart-load.php');
require_once('include/gateways.php');
if(!isset($_REQUEST['c'])){
echo 'Invalid Request';
exit;
}
$c = dirname(__FILE__) . '/c/' . basename($_REQUEST['c']) . ".php";
if(!file_exists($c)){
echo 'Invalid Request';
exit;
}
require_once($c);
?>