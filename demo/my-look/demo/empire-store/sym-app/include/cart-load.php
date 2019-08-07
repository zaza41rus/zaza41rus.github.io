<?php
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
function sanitize_output($buffer)
{
    $search = array(
        '/\>[^\S ]+/s', //strip whitespaces after tags, except space
        '/[^\S ]+\</s', //strip whitespaces before tags, except space
        '/(\s)+/s'  // shorten multiple whitespace sequences
        );
    $replace = array(
        '>',
        '<',
        '\\1'
        );
    $buffer = preg_replace($search, $replace, $buffer);

    return $buffer;
}

ob_start("sanitize_output");


session_name('SYMCART');
session_start();
/*
$path = dirname(__FILE__);
foreach (glob($path ."/languages/lang.*.php") as $file) {
    $filename = basename($file);
    require_once('languages/'.$filename);
	$len = strlen($filename) - 9;
	$langname= substr($filename,5,$len);
	$lang[$langname] = $translation;
	unset($translation);
}
*/
define('ABSPATH',dirname(dirname(__FILE__)));
require_once(ABSPATH . '/include/config.php');
require_once(ABSPATH . '/include/functions.php');
require_once(ABSPATH . '/include/classes/load-classes.php');
require_once(ABSPATH . '/include/mySql-injection-vaccine.php');
// Database Connection
define('DBTYPE', 'mysql');
$setting = $settings->get_all();

if(isset($_REQUEST['action'])){
	if($_REQUEST['action'] == 'signout'){
	$auth->signout();
	}
}

DEFINE('MODE',$setting['mode']);
DEFINE('LANG','english');
DEFINE('CURRENCY',$setting['currency']);
DEFINE('CS',$setting['currency_symbol']);
DEFINE('MINITEMS',$setting['shipping_min_items']);
DEFINE('MAX',$setting['max_order_total']);
DEFINE('SHIPPINGMODE',$setting['shipping_mode']);
DEFINE('BASE',$setting['website_url']);
DEFINE('FREESHIPPING',$setting['free_shipping']);
define('IMGPATH',ABSPATH . $setting['images']);
define('EXTIMGPATH', $setting['website_url'] . $setting['images']);


?>