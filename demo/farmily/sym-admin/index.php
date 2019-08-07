<?php 
/****************************************************************/
/*	Symbiotic 7													*/
/*	File Last Modified:(25/02/2015)								*/
/*	Copyright BakeMySite 2015									*/
/****************************************************************/
$pagename = 'Overview'; 

require_once('./include/admin-load.php');
$new_orders = $order->all('seen','no');
$setting = $settings->get_all();
require_once('./header.php');
 ?>
 <div class="row">
<div class="col-md-6">
<h3><a href="orders-new.php">Новый заказ <?php if($num_new > 0){echo "(".$num_new.")";}?></a></h3>
<?php if(isset($new_orders[0])){?>
<table class="table">
<thead>
<tr>
<th>Дата</th>
<th>Номер заказа</th>
<th>Количество</th>
<th>Статус оплаты</th>
</tr>
</thead>
<tbody>
<?php for($i =0 ; $i<5;$i++){ if(isset($new_orders[$i])){
switch ($new_orders[$i]['payment']){
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
?>
<tr>
<td><?php echo $new_orders[$i]['date'];?></td>
<td><a href="order-details.php?id=<?php echo $new_orders[$i]['id']?>"><?php echo $new_orders[$i]['id'];?></a></td>
<td><?php echo $setting['currency_symbol'] . " " . $new_orders[$i]['net']; ?></td>
<td><?php echo $payment; ?></td>
</tr>
<?php }} ?>
</tbody>
</table><?php } else{
echo "<h3 class='text-center'>Нет новых заказов</h3>";
}?>
</div><div class="col-md-6">
<h3><a href="settings.php">Настройки</a></h3>
<table class="table">
<thead>
<tr>
<th>Настройки</th>
<th>Значение</th>
</tr>
</thead>
<tbody>
<tr><td>Сайт URL</td><td><?php echo $setting['website_url'];?></td></tr>
<tr><td>Админ почта</td><td><?php echo $setting['web_email'];?></td></tr>
<tr><td>Счет по электронной почте</td><td><?php echo $setting['invoice_email'];?></td></tr>
<tr><td>Валюта</td><td><?php echo $setting['currency'] ." (". $setting['currency_symbol'];?> )</td></tr>
</tbody>
</table>

</div></div><div class="row"><div class="col-md-6">

<form action="order-details.php" method="post" class="form-inline">
    <h4>Найти заказ:</h4> <div class="form-group">
<input class="form-control" type="text" name="id" placeholder="Номер заказа"></div>
<button class="btn btn-default">Показать Детали</button>
</form>

</div><div class="col-md-6">
<form action="create-invoice.php" method="post" class="form-inline"><h4>Создание счета-фактуры:</h4>
 <div class="form-group"><input class="form-control"type="text" name="id" placeholder="Номер заказа" >
</div> <button class="btn btn-default">Создание счета-фактуры</button>
</form>

</div>
</div>


<?php
require_once('./footer.php');

?>