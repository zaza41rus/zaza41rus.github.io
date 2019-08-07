<?php
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
require_once('class.address.php');
require_once('class.auth.php');
require_once('class.cart.php');
require_once('class.category.php');
require_once('class.coupon.php');
require_once('class.encryption.php');
require_once('class.order.php');
require_once('class.product.php');
require_once('class.settings.php');
require_once('class.shipping.php');
require_once('class.userpanel.php');
require_once('class.UserEncryption.php');
require_once('class.validate.php');

 require_once('db.php');
 $db = new Db;

$address = new Address;
$auth = new Auth;
$cart = new Cart;
$coupon = new Coupon;
$category = new Category;
$crypt = new encryption_class;
$order = new Order;
$product = new Product;
$settings = new Settings;
$shipping = new Shipping;
$user = new User;
$encryption = new Encryption;
$validate = new Validate;
?>