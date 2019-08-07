<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Products'; 
require_once('./include/admin-load.php');

if(isset($_GET['a']) && $_GET['a'] == 'setResults'  && is_numeric($_REQUEST['results']) ){
 $_SESSION['products_results'] = $_REQUEST['results'];
 $success = "Setting Saved";
}
if(!isset($_SESSION['products_results'])){
	$_SESSION['products_results'] = 25;
}
// Pagination
$num = $product->count_all();
$currpage = (isset($_GET['page']) && $_GET['page'] > 0 ) ? $_GET['page'] : 1;
$maxres = $_SESSION['products_results'];
settype($maxres, "integer");
$pages = $num / $maxres;
$pages = ceil($pages);
$start = ( $currpage - 1 ) * $maxres ;
$last = $start + $maxres -1;

$products = $product->per_page($start,$maxres);

require_once('./header.php');

?>
<ul class="nav nav-pills"><li><a href="product-add.php" >Add New Product</a></li><li><a href="create-html.php" >Create HTML Code</a></li></ul>
<hr>
<?php if(empty($products)){
?>
<h2 align='center'>No Products added.</h2>
<?php
}else{?>
<div class="row"><div class="col-md-12 text-center"><ul class="pagination">
<?php 
$i='';
$count= 1;
echo "<li><a href=\"products.php?page=1\">First</a></li>";
for($i = 1 ; $i<=$pages ; $i++){
if(($currpage - $i) <=3  && ($count <= 7)){

echo "<li><a href=\"products.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+1 ;
}
elseif($currpage==$i){
echo "<li><a href=\"products.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+ 1;

}
}
echo "<li><a href=\"products.php?page=" . $pages . "\">Last</a></li>";
?></ul>
</div>
</div>

<div class="row">
<div class="col-md-12">
<table class="table table-hover">
<thead>
<tr>
<th>Product ID</th>
<th>Name</th>
<th>Price and Shipping (<?php echo $setting['currency_symbol']; ?>)</th>
<th>Options</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<?php foreach($products as $pro) {
if(empty($pro['shipping'])){
$pro['shipping'] = '0';
}
$pro['shipping_charge'] = ($pro['shipping'] !='0')?$pro['shipping']:'Free';
?>
<tr<?php if($pro['stock'] <= 5 ){ echo " class='info'";}?>>
<td><?php echo $pro['id']; ?></td>
<td><a href="product.php?id=<?php echo $pro['id']; ?>"><img class="img-thumbnail" src="<?php echo $setting['website_url']; ?>/images/products/small-<?php echo $pro['image']; ?>" />&nbsp;<?php echo $pro['name']; ?></a></td>
<td><?php echo $pro['price'] ." + ".$pro['shipping_charge']." = ".number_format(($pro['shipping'] + $pro['price']),2); ?></td>
<td>
<?php 
$options = $product->options($pro['id']);

foreach ($options as $option){
echo $option['name'] . " - " . $setting['currency_symbol'] . " " . $option['price'] . "<br>";
 } ?>
</td>
<td><ul class="pagination"><li><a title="Add Product Images" href="product-images.php?product_id=<?php echo $pro['id']; ?>"><i class="glyphicon glyphicon-camera"></i></a></li><li><a href="product-update-options.php?product_id=<?php echo $pro['id']; ?>" title="Add / Remove options"><i class="glyphicon glyphicon-plus"></i></a></li><li><a href="product-update-regions.php?product_id=<?php echo $pro['id']; ?>" title="Add / Remove Shipping regions"><i class="glyphicon glyphicon-road"></i></a></li><li><a href="product-edit.php?product_id=<?php echo $pro['id']; ?>" title="Edit Product"><i class="glyphicon glyphicon-pencil"></i></a></li><li><a href="product-remove.php?product_id=<?php echo $pro['id']; ?>" title="Remove Product"><i class="glyphicon glyphicon-trash"></i></a></li></ul></td>
</tr>
<?php
}?>

</tbody></table></div></div>
<div class="row">
<div class="col-md-12">
<form action="products.php?a=setResults" method="post" class="form-inline">
 <div class="form-group col-md-12 "><label class="col-md-6 control-label text-right" for="">Set number of products per page: </label><div class="col-md-6"><select class="form-control" name="results">
 <option value="10">10</option>
 <option value="20">25</option>
 <option value="50">50</option>
 <option value="75">75</option>
 <option value="100">100</option>
 <option value="200">200</option>
 </select> 
<button class="btn btn-default">Save</button></div></div></form></div></div>
<?php
}
require_once('./footer.php');

?>