<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Shipping Regions'; 
require_once('./include/admin-load.php');

if(isset($_GET['a']) && $_GET['a'] == 'setResults'  && is_numeric($_REQUEST['results']) ){
 $_SESSION['products_results'] = $_REQUEST['results'];
 $success = "Setting Saved";
}
if(!isset($_SESSION['products_results'])){
	$_SESSION['products_results'] = 25;
}

// Pagination
$currpage = (isset($_GET['page'])) ? $_GET['page'] : 1;
$maxres = 25;
$num = $shipping->count_all();
$pages = $num / $maxres;
$pages = ceil($pages);
$start = ( $currpage - 1 ) * $maxres ;
$last = $start + $maxres -1;

$regions = $shipping->per_page($start,$maxres);

require_once('./header.php');

?>
<ul class="nav nav-pills"><li><a  href="shipping-region-add.php">Add a Shipping Region</a></li><li><a  href="shipping.php">Shipping Settings</a></li></ul>
<hr>
<?php if(empty($regions)){
?>
<h2 align='center'>Regions added Yet.</h2>
<?php
}else{?>
<div class="text-center"><ul class="pagination">
<?php 
$i='';
$count= 1;
echo "<li><a href=\"shipping-regions.php?page=1\">First</a></li>";
for($i = 1 ; $i<=$pages ; $i++){
if(($currpage - $i) <=3  && ($count <= 7)){

echo "<li><a href=\"shipping-regions.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+1 ;
}
elseif($currpage==$i){
echo "<li><a href=\"shipping-regions.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+ 1;

}
}
echo "<li><a href=\"shipping-regions.php?page=" . $pages . "\">Last</a></li>";
?></ul></div>
<table class="table">
<thead>
<tr>
<th>Region ID</th>
<th>Name</th>
<th>ZIP</th>
<th>Shipping (<?php echo $setting['currency_symbol'] ; ?>)</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<?php foreach($regions as $region) {
?>
<tr>
<td><?php echo $region['id']; ?></td>
<td><?php echo $region['name']; ?></td>
<td><?php echo $region['zip']; ?></td>
<td><?php echo $region['shipping'] ; ?></td>
<td><ul class="pagination"><li><a href="shipping-region-edit.php?region_id=<?php echo $region['id']; ?>" title="Edit Region"><i class="glyphicon glyphicon-pencil"></i></a></li><li><a href="shipping-region-remove.php?region_id=<?php echo $region['id']; ?>" title="Remove Region"><i class="glyphicon glyphicon-trash"></i></a></li></ul></td>
</tr>
<?php 
}
?>

</tbody></table>
<?php 
}
require_once('./footer.php');

?>