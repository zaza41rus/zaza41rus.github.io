<!DOCTYPE html>
<html lang="en">
<head>
<!-- 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
!-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Symbiotic - Control Board - <?php echo $pagename; ?></title>
<link href="css/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/jquery.printElement.js"></script>
<script type="text/javascript" src="js/symbiotic.js"></script>
<script type="text/javascript" src="../sym-app/js/sym-cart.js"></script>
<script type="text/javascript">
jQuery(document).ready(function($){
$("#sidebar .nav-links  .sidebar-header").siblings().hide();
$("#sidebar .nav-links  .sidebar-header").click(function(){
var shown = $(this).attr('data-shown');
if(shown != 'true'){
$(this).addClass('active-head');
$(this).parent().children('li').slideDown();
$(this).attr('data-shown','true');
}else{
$(this).siblings().slideUp();
$(this).removeClass('active-head');
$(this).attr('data-shown','false');
}
});

var thisdoc = "<?php echo basename($_SERVER['PHP_SELF']);?>";
$("#sidebar .nav-links a").each(function(){
var target = $(this).attr('href');
if(target == thisdoc){
$(this).parent().addClass("active");
$(this).parent().parent().children('li').show();
$(this).parent().parent().children('.sidebar-header').addClass('active-head');
$(this).parent().parent().children('.sidebar-header').attr('data-shown','true');
}
})

});
</script>
</head>
<body>
<?php $orders_new = $order->all('seen','no');
$num_new = count($orders_new);
?>
<div class="container-fluid">
<div class="row-fluid">
<div class="col-md-2" id='sidebar'>
<ul class="nav nav-links">
<li class="sidebar-header"><span class='glyphicon glyphicon-tasks'></span>&nbsp;Dashboard</li>
<li><a href="index.php" >Home</a></li>

<li><a href="symbiotic.php" >About Symbiotic</a></li>
</ul>
<ul class="nav nav-links">
<li class="sidebar-header"><span class='glyphicon glyphicon-list-alt'></span>&nbsp;Orders</li>
<li><a href="orders.php" >All Orders</a></li>
<li><a href="orders-new.php" >New Orders <?php if($num_new > 0){echo "<span class=\"badge\">".$num_new."</span>";}?></a></li>
<li><a href="order-details.php" >Search</a></li>
<li><a href="orders-monthly.php" >Monthly Orders</a></li>
<li><a href="create-invoice.php" >Create Invoices</a></li>
</ul>
<ul class="nav nav-links">
<li class="sidebar-header"><span class='glyphicon glyphicon-briefcase'></span>&nbsp;Products</li>
<li><a href="products.php" >All Products</a></li>
<li><a href="product-add.php" >Add New Product</a></li>
<li><a href="products-out.php" >Out of Stock</a></li>
<li><a href="categories.php" >Categories</a></li>
<li><a href="category-add.php" >Add New Category</a></li>
</ul>

<?php if($user->is_admin(USER)){ ?>
<ul class="nav nav-links">
<li class="sidebar-header"><span class='glyphicon glyphicon-tag'></span>&nbsp;Coupons</li>
<li><a href="coupons.php" >All Coupon</a></li>
<li><a href="coupon-add.php" >Add New</a></li>
<li><a href="coupons-deleted.php" >Deleted</a></li>
</ul>
<ul class="nav nav-links">
<li class="sidebar-header"><span class='glyphicon glyphicon-plane'></span>&nbsp;Shipping</li>
<li><a href="shipping.php" >Shipping Settings</a></li>
<li><a href="shipping-regions.php" >Shipping Regions</a></li>
<li><a href="shipping-region-add.php" >Add Shipping Region</a></li>
</ul>
<ul class="nav nav-links">
<li class="sidebar-header"><span class='glyphicon glyphicon-user'></span>&nbsp;Customers</li>
<li><a href="customers.php" >All Customers</a></li>
<li><a href="customer-search.php" >Search</a></li>
</ul>
<ul class="nav nav-links">
<li class="sidebar-header"><span class='glyphicon glyphicon-cog'></span>&nbsp;Settings</li>
<li><a href="settings.php" >Settings</a></li>
<li><a href="settings-admins.php" >Manage Admin Users</a></li>
</ul>
<?php } ?>
<ul class="nav nav-links">
<li class="sidebar-header"><span class='glyphicon glyphicon-text-width'></span>&nbsp;Integration</li>
<li><a href="create-html.php" >Create HTML Code</a></li>
<li><a href="integration.php" >Integration</a></li>
</ul>
</div>
<div class="col-md-10 col-md-offset-2 main-body">
<div class="page-header"><h1><?php echo $pagename; ?></h1></div>
<div class="alert alert-success" id="message" style="display:none;"></div>


<?php
if(isset($error)){
echo "<div class='alert alert-danger'>$error</div>";
}
if(isset($success)){
echo "<div class='alert alert-success'>$success</div>";
}
if($setting['mode'] == '0'){
?>

<div class="alert alert-success">
<h3>Looks like you just installed Ajax Cart</h3>
<p>Before you  go live you need to follow these easy steps:</p>
<ol>
<li>Delete <code>install.php</code>.</li>
<li><a href="integration.php">Integrate</a> Ajax Cart into your webpages.</li>
<li>Go to <code>Settings -> Website Settings</code> and Change mode to <code>Live</code>.</li>
<li>Enjoy.</li>
</ol>
<p>You can always contact us for  free support at our <a target="_blank" href="http://store.BakeMySite.com/products/symbiotic">Support Site</a></p>
</div>
<?php }?>
