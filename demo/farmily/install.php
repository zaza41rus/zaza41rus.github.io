<?php 
function email($email){
		$email = trim($email);
		if(strstr($email,'@') && strstr($email,'.')){
			$email = explode('@',$email);
			
			if(count($email)  == 2) { return true;}
			
			return false;
	}
	
			return false;
	}
	
if($_POST){

$db_name = trim($_POST['db_name']);
$db_user = trim($_POST['db_user']);
$db_pwd = trim($_POST['db_pwd']);
$db_host = trim($_POST['db_host']);
$db_pre = trim($_POST['db_pre']);
$user_email = trim($_POST['user_email']);
$user_pwd = trim($_POST['user_pwd']);
$user_pwd2 = trim($_POST['user_pwd2']);
$web_url = trim($_POST['web_url']);

if(empty($db_name) || empty($db_user)|| empty($db_pre) || empty($db_pwd) || empty($db_host) || empty($user_email) || empty($user_pwd) || empty($user_pwd2) ||  empty($web_url)){
$error[] = "All fields are required.";
}
elseif($user_pwd2 != $user_pwd){
$error[] = "User passwords don't match.";
}elseif(!email($user_email)){
$error[] = "Invalid Email ID.";
}else{

DEFINE('DBNAME',$db_name);
DEFINE('DBUSER',$db_user);
DEFINE('DBPWD',$db_pwd);
DEFINE('DBHOST',$db_host);
DEFINE('PFX',$db_pre);



	try {
		$db_connection = new PDO("mysql:host=".DBHOST.";dbname=".DBNAME."",DBUSER, DBPWD);
		}
	catch (PDOException $e) {
		$error[]= $e->getMessage();
		}
		
		require_once('sym-app/include/classes/class.UserEncryption.php');
		$encryption = new Encryption;
		$user_pwd = $encryption->encrypt($user_pwd);

		
if(!isset($error[0])){

	$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer` int(11) NOT NULL,
  `name` varchar(99) NOT NULL,
  `address` text NOT NULL,
  `country` varchar(15) NOT NULL,
  `region` int(10) NOT NULL,
  `zip` varchar(15) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci");

$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "coupons` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(15) NOT NULL,
  `off` varchar(10) NOT NULL,
  `off_type` int(11) NOT NULL,
  `order_min` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci") ;

$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `slang` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `products` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci") ;


$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NULL,
  `mobile` varchar(50) NULL,
  `email` varchar(99) NOT NULL,
  `password` varchar(99) NOT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci") ;

$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "options` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `name` varchar(99) NOT NULL,
  `price` varchar(99) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci") ;

$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(15) NOT NULL,
  `items` text NOT NULL,
   `net` varchar(99) NOT NULL,
  `amount` varchar(99) NOT NULL,
  `tax` varchar(99) NOT NULL,
  `shipping` varchar(99) NOT NULL,
  `discount` varchar(99) NOT NULL DEFAULT '0',
  `coupon` varchar(99) DEFAULT NULL,
  `payment` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `customer` varchar(99) NOT NULL,
  `address` int(11) NOT NULL,
  `gateway` varchar(99) NOT NULL,
  `track` varchar(99) NOT NULL,
  `track_url` varchar(99) NOT NULL,
  `remarks` text NOT NULL,
  `callback` int(11) NOT NULL DEFAULT '0',
  `seen` varchar(3) NOT NULL DEFAULT 'no',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci") ;

$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "products` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(99) NOT NULL,
  `price` varchar(99) NOT NULL,
  `description` text NOT NULL,
  `category` int(20) NOT NULL,
  `shipping` varchar(99) NOT NULL,
  `stock` int(20) NOT NULL,
  `regions` text NOT NULL,
  `active` int(11) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci") ;

$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "products_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id`  int(11) NOT NULL,
  `image` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `active` int(11) NOT NULL,
  `primary` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci") ;

$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `setting` varchar(99) NOT NULL,
  `value` varchar(99) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci");


$query = $db_connection->exec("INSERT INTO `" . PFX . "settings` (`setting`, `value`) VALUES
('website_url', '".$web_url."'),
('web_email', '" . $user_email . "'),
('invoice_email', '" . $user_email . "'),
('currency', 'USD'),
('currency_symbol', '$'),
('secret', 'symbiotic'),
('g_dis', '0'),
('fb_dis', '0'),
('shipping_min_items', '1'),
('max_order_total', '5000'),
('min_order_total', '0'),
('shipping_mode', '1'),
('free_shipping', '0'),
('tax', ''),
('fb_app_id', ''),
('fb_app_secret', ''),
('fb_url', ''),
('g_url', ''),
('mode', '0'),
('rc_private', ''),
('rc_public', ''),
('images', '/images/products/')");


$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "shipping_regions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(99) NOT NULL,
  `zip` varchar(99) NOT NULL,
  `shipping` varchar(99) NOT NULL,
   `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci") ;

$query = $db_connection->exec("INSERT INTO `" . PFX . "shipping_regions` (`name`,`shipping`,`active`) VALUES
('National','0' ,1),
('International','0' , 1)");

$query = $db_connection->exec("CREATE TABLE IF NOT EXISTS `" . PFX . "users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(99) NOT NULL,
  `role` int(11) NOT NULL,
  `latest_login` varchar(11) NOT NULL,
  `last_login` varchar(11) NOT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8  COLLATE=utf8_unicode_ci");


$query = $db_connection->exec("INSERT INTO " . PFX . "users (`id`, `email`, `password`, `role`, `last_login`, `active`) VALUES
(null, '" . $user_email . "', '" . $user_pwd . "', 1, 'Never', 1)");


	}
if($query !== FALSE){
$success = true;
}else{
$success = false;
}

$string = "<?php\r\n
DEFINE('DBNAME','$db_name'); \r\n
DEFINE('DBUSER','$db_user'); \r\n
DEFINE('DBPWD','$db_pwd'); \r\n
DEFINE('DBHOST','$db_host'); \r\n
DEFINE('PFX','$db_pre'); \r\n

 \r\n?>";
$fp = fopen('sym-admin/include/config.php', 'w') or die("can't open file");
$query= fwrite($fp, $string);
$query= fclose($fp);

$pfp = fopen('sym-app/include/config.php', 'w') or die("can't open file");
$query= fwrite($pfp, $string);
$query= fclose($pfp);

if($query !== FALSE){
$success = false;
}else{
$success = true;
}

$path_to_ins= $_SERVER['HTTP_HOST'] . dirname($_SERVER['REQUEST_URI']);
}}

if(isset($_GET['step']) && $_GET['step'] <= 4){
$s = $_GET['step'];
}else{
$s = '1';
}
if(isset($success)){
$s = '4';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Symbiotic - AJAX Cart with Orders Invoices &amp; Checkout Installation</title>
<link href="sym-admin/css/style.css" rel="stylesheet"  type="text/css">
<script type="text/javascript" src="symbiotic/jquery.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="text-center col-md-12">
<img src="sym-admin/images/logo.png" /></div></div><br>
<div class="row">
<div class="col-md-6 col-md-offset-3">
<ul class="breadcrumb">
<li>Welcome <span class="divider">&gt;</span></li>
<li>System Requirements <span class="divider">&gt;</span></li>
<li>Installation <span class="divider">&gt;</span></li>
<li>Complete</li>
</ul><?php
if(isset($error)){
foreach($error as $err){
echo "<div class='alert alert-danger' style='display:block;'>".$err."</div>";
}
}
?>
<div class="accordin" id="step1" <?php if($s != '1' ) {echo "style=\"display:none;\""; } ?>>
<h2 class="text-center">Welcome buddy!</h2>
<p class="text-center">Ajax Cart installation is very easy. Click Start Installation to Continue</p>
<p class="text-center"><a class="btn btn-primary btn-large" href="install.php?step=2">Start Installation</a></p>
</div>
<div class="accordin" id="step2" <?php if($s != 2 ) {echo "style=\"display:none;\"" ;} ?>>
<h2 class="text-center">System Requirements</h2>
<p>Please make sure that you have completed following things before you start installation.</p>
<ul>
<li>Uploaded all files to server</li>
<li>Created a MySql database (if you don't have a MySql database already)</li>
<li>MySql database access details (Username, Password, Database name)</li>
<li>Granted all permissions to your DB user (If not already)</li>
</ul>
<p>if you are having any problem regarding steps above you can  visit <a href="http://store.siteomagic.com/products/symbiotic">SuperbLab Support</a></p>
<p class="text-center"><a class="btn btn-large btn-default" href="install.php?step=1">Back</a> <a class="btn btn-primary btn-large" href="install.php?step=3">Continue</a></p>
</div>
<div class="accordin" id="step3"  <?php if($s != 3 ) {echo "style=\"display:none;\"" ;} ?>>
<h2 class="text-center">Installation</h2>
<form action="install.php?step=3" method="post" class="form-horizontal">
	 <div class="form-group">
    <label class="col-md-4 control-label text-right" for="db_name">Database Name</label>
    <div class="col-md-8">
<input class="form-control" type="text" name="db_name" value="" id="db_name"> 
</div></div>	 <div class="form-group">
    <label class="col-md-4 control-label text-right" for="db_user">Database Username</label>
    <div class="col-md-8">
<input class="form-control" type="text" name="db_user" value="" id="db_user"> 
</div></div>	 <div class="form-group">
    <label class="col-md-4 control-label text-right" for="db_pwd">Database Password</label>
    <div class="col-md-8">
<input class="form-control" type="text" name="db_pwd" value="" id="db_pwd"> 
</div></div>	 <div class="form-group">
    <label class="col-md-4 control-label text-right" for="db_host">Database Host</label>
    <div class="col-md-8">
<input class="form-control" type="text" name="db_host" value="localhost" id="db_host"> 
</div></div>	 <div class="form-group">
    <label class="col-md-4 control-label text-right" for="db_pre">Table Prefix</label>
    <div class="col-md-8">
<input class="form-control" type="text" name="db_pre" value="sym_" id="db_pre"> 
</div></div>	 <div class="form-group">
    <label class="col-md-4 control-label text-right" for="user_email">Email ID</label>
    <div class="col-md-8">
<input class="form-control" type="text" name="user_email" value="" id="user_email"> 
</div></div>	 <div class="form-group">
    <label class="col-md-4 control-label text-right" for="user_pwd">Password</label>
    <div class="col-md-8">
<input class="form-control" type="text" name="user_pwd" value="" id="user_pwd"> 
</div></div>	 <div class="form-group">
    <label class="col-md-4 control-label text-right" for="user_pwd2">Confirm Passowrd</label>
    <div class="col-md-8">
<input class="form-control" type="text" name="user_pwd2" value="" id="user_pwd2">
</div></div>	 <div class="form-group">
    <label class="col-md-4 control-label text-right" for="web_url">Website URL</label>
    <div class="col-md-8">
<input class="form-control" type="text" name="web_url" value="<?php echo 'http://'.$_SERVER['HTTP_HOST']. dirname($_SERVER['PHP_SELF']); ?>" id="web_url">
<input class="form-control" type="hidden" name="action" value="install">
</div></div>
<p class="text-center"><a class="btn btn-large btn-default" href="install.php?step=2">Back</a> <button type="submit" class="btn btn-primary btn-large" >Install</button></p>
</form>

</div>
<div class="accordin" id="step4"  <?php if($s != 4 ) {echo "style=\"display:none;\""; } ?>>
<h2 class="text-center">Hurray!! Installation Completed</h2>
<p class="text-center"><a class="btn btn-primary btn-large" href="sym-admin">Login</a></p>
</div>
</div>
</div>
<hr>
<div class="row">
<div class="col-md-12" >
<div class="text-right">
&copy; BakeMySite <?php echo date('Y');?>
</div>
</div>
</div>
</div>
</body>
</html>
