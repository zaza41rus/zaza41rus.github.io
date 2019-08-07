<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Add Product'; 
require_once('./include/admin-load.php');
if(isset($_REQUEST['product_name']) && isset($_REQUEST['product_price'])&& isset($_REQUEST['product_description'])&& isset($_REQUEST['product_category']) && isset($_REQUEST['product_stock'])&& isset($_REQUEST['product_shipping'])){
	$product_name = trim($_REQUEST['product_name']);
	$product_price = trim($_REQUEST['product_price']);
	$product_description = trim($_REQUEST['product_description']);
	$product_category = trim($_REQUEST['product_category']);
	$product_stock = trim(($_REQUEST['product_stock']));
	$product_shipping = trim($_REQUEST['product_shipping']);
	if(empty($product_shipping)){
	$product_shipping = 0;
	} 
	if(!empty($product_name) && !empty($product_price) && !empty($product_description) &&!empty($product_category) && !empty($product_stock) ){
	$result =$product->add($product_name,$product_price,$product_description,$product_category,$product_stock,$product_shipping);	
	}else{
	$product->error ="All fields are required";
	}
}
	if(!empty($product->msg)){
	$success = $product->msg;
	}
	if(!empty($product->error)){
	$error = $product->error;
	}
$cats = $category->all();
if(!isset($cats['0'])){
$error = "You need to add at least 1 category before adding products.";
}
require_once('./header.php');
?>
<ul class="nav nav-pills"><li><a href="products.php" >Products</a></li></ul>
<hr>
<form action="product-add.php" method="post" class="form-horizontal">
<div class="form-group">
<label class="col-md-3 control-label text-right" for="product-name">Name</label><div class="col-md-4">
<input class="form-control" required type="text" name="product_name" value="" id="product-name"></div></div>
<div class="form-group">
<label class="col-md-3 control-label text-right" for="product-price">Price (<?php echo $setting['currency_symbol'] ; ?>)</label><div class="col-md-4">
<input class="form-control" required type="text" name="product_price" value="" id="product-price"></div></div>
<div class="form-group">
<label class="col-md-3 control-label text-right" for="product-description">Description</label><div class="col-md-4">
<textarea class="form-control" name="product_description" style="width:300px;height:100px;" id="product-description"></textarea></div></div>
<div class="form-group">
<label class="col-md-3 control-label text-right" for="product-category">Product Category</label><div class="col-md-4">
<select class="form-control" name="product_category" id="product-category">
<?php
foreach($cats as $cat){
echo "<option value=\"" . $cat['id']. "\">".$cat['name']."</option>";
}
?></select></div></div>
<div class="form-group">
<label class="col-md-3 control-label text-right" for="product-stock">Stock</label><div class="col-md-4">
<input class="form-control" required type="text" name="product_stock"  id="product-stock"></div></div>
<div class="form-group">
<label class="col-md-3 control-label text-right" for="product-shipping">Shipping Price(<?php echo $setting['currency_symbol'] ; ?>)</label><div class="col-md-4">
<input class="form-control" required type="text" name="product_shipping" value="0" id="product-shipping"></div></div>
<div class="form-group"><div class="col-md-4 col-md-offset-3">
<button class="btn btn-primary">Add product</button>
</div></div>
</form>
<?php
require_once('./footer.php');
?>