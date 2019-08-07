<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Orders'; 
require_once('./include/admin-load.php');
$orders = $order->all();
// Pagination
$currpage = (isset($_GET['page'])) ? $_GET['page'] : 1;
$maxres = 50;
$num = count($orders);
$pages = $num / $maxres;
$pages = ceil($pages);
$start = ( $currpage - 1 ) * $maxres ;
$last = $start + $maxres -1;
////////////////
require_once('./header.php');

?>
<ul class="nav nav-pills"><li><a href="orders-new.php" >Новый заказ</a></li><li><a href="orders-monthly.php" >Месячные заказы</a></li><li><a href="create-invoice.php" >Создание счетов-фактур</a></li></ul><hr>
<?php if(empty($orders)){
?>
<h2 align='center'>Нет заказов.</h2>
<?php
}else{?>
<div class="text-center"><ul class="pagination">
<?php 
$i='';
$count= 1;
echo "<li><a href=\"orders.php?page=1\">Первая</a></li>";
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
echo "<li><a href=\"orders.php?page=" . $pages . "\">Последняя</a></li>";
?>
</ul>
</div>
<table class="table table-hover">
<thead>
<tr>
<th>Дата</th>
<th>Заказ ID</th>
<th>Количество</th>
<th>Способ оплаты</th>
<th>Статус оплаты</th>
<th>Статус заказа</th>
<th>Действия</th>
</tr>
</thead>
<tbody>
<?php for($i = $start; $i <= $last; $i++) {
if (isset($orders[$i])){
switch ($orders[$i]['payment']){
	case '1':
	$payment = 'Выполнен';
	break;
	case '2':
	$payment = 'В ожидании';
	break;
	case '3':
	$payment = 'Ошибка заказа';
	break;
	case '4':
	$payment = 'Возвращено';
	break;
	default:
	$role = 'Неизвестно';	
}
switch ($orders[$i]['status']){
	case '1':
	$status = 'Выполнен';
	break;
	case '2':
	$status = 'В ожидании';
	break;
	case '3':
	$status = 'Cancelled';
	break;
	case '4':
	$status = 'Отправленный';
	break;
	case '5':
	$status = 'Доставленный';
	break;
	case '6':
	$status = 'Возвращено';
	break;
	default:
	$status = 'Неизвестно';
}

	?>
<tr<?php if($orders[$i]['seen']=='no'){ echo " class='info'";}?>>
<td><?php echo $orders[$i]['date']; ?></td>
<td><?php echo $orders[$i]['id']; ?></td>
<td><?php echo $setting['currency_symbol'] . " " . $orders[$i]['net']; ?></td>
<td><?php echo $orders[$i]['gateway']; ?></td>
<td><?php echo $payment; ?></td>
<td><?php echo $status; ?></td>
<td><a href="order-details.php?id=<?php echo $orders[$i]['id']; ?>">Просмотр / Редактирование</a></td>
</tr>
<?php }
}?></tbody>

</table>
<div class="col-md-6">
<form action="order-details.php" method="get" class="form-inline">
<h4>Заказ Подробнее</h4>
<span class="col-md-8 no-gutter">
<input class="form-control"type="text" name="id" placeholder="Номер заказа" required></span><span class="col-md-4 no-gutter">
<button class="btn btn-default">Показать Детали</button></span>
</form></div>
<?php
}
require_once('./footer.php');

?>