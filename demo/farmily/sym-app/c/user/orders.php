<?php
	if(!defined('ABSPATH')){
	echo "You access can't file directly";
	exit;
	}
$all_orders = $order->all();
$currpage = (isset($_GET['page'])) ? $_GET['page'] : 1;
$maxres = 25;
$num = count($all_orders);
$pages = $num / $maxres;
$pages = ceil($pages);
$start = ( $currpage - 1 ) * $maxres ;
$last = $start + $maxres -1;
?>
<h2>Мои Заказы</h2>
<?php if (isset($all_orders[0])){ ?>
<div class="text-center"><ul class="pagination">
<?php 
$i='';
$count= 1;
echo "<li><a href=\"orders.php?page=1\">First</a></li>";
for($i = 1 ; $i<=$pages ; $i++){
if(($currpage - $i) <=3  && ($count <= 7)){

echo "<li><a href=\"orders.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+1 ;
}
elseif($currpage==$i){
echo "<li><a href=\"orders.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+ 1;

}
}
echo "<li><a href=\"orders.php?page=" . $pages . "\">Last</a></li>";
?></ul></div>
<table class="table table-striped table-bordered table-hover">
<thead>
<th>Номер заказа</th>
<th>Дата</th>
<th>Итого (<?php echo $setting['currency_symbol'];?>)</th>
<th>Статус</th>
</tr>
</thead>
<tbody>
<?php
for($i = $start; $i <= $last; $i++) {
if (isset($all_orders[$i])){
?>
<tr>
<td><?php echo $all_orders[$i]['id']; ?></td>
<td><?php echo $all_orders[$i]['date']; ?></td>
<td><?php echo $all_orders[$i]['net'] ; ?></td>
<td><a href="order-status.php?id=<?php echo $all_orders[$i]['id']; ?>"><i class="icon-list"></i> Details</a></td>
<tr>
<?php
}
}
?>
</tbody></table>
<div class="text-center"><ul class="pagination">
<?php 
$i='';
$count= 1;
echo "<li><a href=\"orders.php?page=1\">First</a></li>";
for($i = 1 ; $i<=$pages ; $i++){
if(($currpage - $i) <=3  && ($count <= 7)){

echo "<li><a href=\"orders.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+1 ;
}
elseif($currpage==$i){
echo "<li><a href=\"orders.php?page=" . $i . "\">" . $i . "</a></li>";
$count = $count+ 1;

}
}
echo "<li><a href=\"orders.php?page=" . $pages . "\">Last</a></li>";
?></ul></div>

<?php
}else{
echo "<h2 class='text-center'>Нет заказов</h2></div>";
}

?>